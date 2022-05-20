function showModal(id) {
    document.getElementById(id).style.display = 'flex';
}

function hideModal(id) {
    document.getElementById(id).style.display = 'none';
}




const _substages = [1, 2, 3, 5, 6];
let stageList = [];
for (let i = 2; i <= 20; i++) {
    stageList = stageList.concat(_substages.map((e) => i + '-' + e));
}


let playerNames = new Array(10).fill('');
playerNames[9] = '?';
let renaming = false;
document.getElementById('rename').addEventListener('click', rename);

function rename() {
    if (renaming) {
        renaming = false;

        for (let i = 1; i <= 8; i++) {
            const e = document.getElementById('player' + i);
            playerNames[i] = e.innerText.trim();
            const c = e.children[0];
            c.contentEditable = false;
            c.classList.remove('editable');
        }
        redrawHistory();
        document.getElementById('rename-center').classList.add('hidden');
        document.getElementById('match-center').classList.remove('hidden');
        document.getElementById('rename').innerText = 'Edit Names';
    } else {
        renaming = true;
        for (let i = 1; i <= 8; i++) {
            const e = document.getElementById('player' + i);
            const c = e.children[0];
            c.contentEditable = true;
            c.classList.add('editable');
        }
        document.getElementById('match-center').classList.add('hidden');
        document.getElementById('rename-center').classList.remove('hidden');
        document.getElementById('rename').innerText = 'Save Names';
        document.getElementById('player1').children[0].focus();
    }
}


function loadPlayerNames() {
    for (let i = 1; i <= 8; i++) {
        document.getElementById('player' + i).children[0].innerText = playerNames[i];
    }
}
/*
old is 4/3/2 1/1 0/0 for 8/7/6 5/4 3/2

new is 4/3/2 2/2 0/0, but at 3 reset ghost/1/2 thing








*/

const undoStack = [];


const MATCHMAKING_SIMPLE = 1;
const MATCHMAKING_ADVANCED = 2;
let matchmakingAlgo;


let matchedPlayers = [];
let turnsSinceElim = 0;
let players = [];
let playerCount = 8;

function switchAlgo() {
    if (matchmakingAlgo === MATCHMAKING_ADVANCED) {
        matchmakingAlgo = MATCHMAKING_SIMPLE;
        document.getElementById('switch-algo').innerText = 'Switch to Normal Algorithm';
        document.getElementById('curr-algo').innerText = 'Reset Algorithm';
    } else {
        matchmakingAlgo = MATCHMAKING_ADVANCED;
        document.getElementById('switch-algo').innerText = 'Switch to Reset Algorithm';
        document.getElementById('curr-algo').innerText = 'Normal Algorithm';
    }
    updateMatchupTracker();
}
switchAlgo();


function resetMatchupTracker() {
    const oldInfo =
        [matchedPlayers, turnsSinceElim, players, playerCount, playerNames];
    matchedPlayers = [];
    turnsSinceElim = 0;
    players = [false, true, true, true, true, true, true, true, true];
    playerCount = 8;
    playerNames = new Array(10).fill('');
    playerNames[9] = '?';
    loadPlayerNames();
    renaming = false;
    rename();
    updateMatchupTracker();
    redrawHistory();
    return oldInfo;
}

function undoResetMatchupTracker(histArr) {
    let [mp, tse, p, pc, pn] = histArr;
    matchedPlayers = mp;
    turnsSinceElim = tse;
    players = p;
    playerCount = pc;
    playerNames = pn;
    loadPlayerNames();
    updateMatchupTracker();
    redrawHistory();
}


function updateMatchupTracker() {

    document.getElementById('stage-number').innerText = stageList[matchedPlayers.length];

    let safeCount = 0;
    let safes = [];
    if (playerCount >= 7) {
        safeCount = 4;
    } else if (playerCount >= 6) {
        safeCount = 3;
    } else if (playerCount >= 5) {
        safeCount = 2;
    } else if (playerCount >= 3) {
        if (matchmakingAlgo == MATCHMAKING_ADVANCED) {
            if (playerCount == 4) {
                safeCount = 2;
            } else {
                // When just hit 4, only exclude last fought.
                // This is per natures, idk if accurate but
                // will go with it.
                safeCount = Math.min(2, turnsSinceElim + 1);
            }
        } else {
            safeCount = 1;
        }
    }
    if (playerCount == 2 && matchmakingAlgo == MATCHMAKING_ADVANCED && turnsSinceElim >= 2) {
        // Special case for 3 players
        const penultimate = matchedPlayers[matchedPlayers.length - 2];
        const ultimate = matchedPlayers[matchedPlayers.length - 1];
        if (ultimate == 9) {
            safes = [penultimate];
        } else if (penultimate == 9) {
            safes = [ultimate];
        } else {
            // ghost is up next, random
        }
        console.log(safes);
    } else {
        if (matchmakingAlgo == MATCHMAKING_SIMPLE) {
            safeCount = Math.min(safeCount, turnsSinceElim);
        }
        safeCount = Math.min(safeCount, matchedPlayers.length);
        safes = matchedPlayers.slice(matchedPlayers.length - safeCount);
    }
    for (let i = 1; i <= 8; i++) {
        const e = document.getElementById('player' + i);
        if (players[i]) {
            e.classList.remove('inactive');
        } else {
            e.classList.add('inactive');
        }
        if (safes.includes(i)) {
            e.children[0].classList.add('safe');
        } else {
            e.children[0].classList.remove('safe');
        }
    }

}


function matchPlayer(num) {
    undoStack.push(['match', num]);
    matchedPlayers.push(num);
    turnsSinceElim++;
    updateMatchupTracker();
    appendHistory(matchedPlayers.length - 1);
}

function undoMatchPlayer() {
    matchedPlayers.pop();
    turnsSinceElim--;
    updateMatchupTracker();
    redrawHistory();
}

function eliminatePlayer(num) {
    undoStack.push(['elim', num, turnsSinceElim]);
    playerCount--;
    players[num] = false;
    turnsSinceElim = 0;
    updateMatchupTracker();
}

function undoEliminatePlayer(histArr) {
    let [_, num, tse] = histArr;
    playerCount++;
    players[num] = true;
    turnsSinceElim = tse;
    updateMatchupTracker();
}


let mouseDownCellTimer = null;
let mouseDownCellNum = 0;
let mouseDownCellEvent = null;

function clickPlayer() {
    if (!players[mouseDownCellNum]) {
        // Do nothing for eliminated players
        return;
    }
    if (mouseDownCellEvent.button == 2) {
        // Right click
        eliminatePlayer(mouseDownCellNum)
    } else {
        // Left
        if (!renaming) {
            matchPlayer(mouseDownCellNum);
        }

    }

    mouseDownCellNum = 0;
}

function longClickPlayer() {
    if (!players[mouseDownCellNum]) {
        // Do nothing for eliminated players
        return;
    }
    eliminatePlayer(mouseDownCellNum)

    mouseDownCellTimer = null;
    mouseDownCellNum = 0;
}


function mouseDownCell(e, num) {

    mouseDownCellEvent = e;
    mouseDownCellTimer = setTimeout(longClickPlayer, 1000);
    mouseDownCellNum = num;
}

function mouseUp(e) {
    // Short click if timer not expired yet.
    if (mouseDownCellTimer != null) {
        clearTimeout(mouseDownCellTimer);
        mouseDownCellTimer = null;
        clickPlayer();
    }
    // Otherwise was long click handled by timeout.
}


document.addEventListener('mouseup', (e) => mouseUp(e));
for (let i = 1; i <= 8; i++) {
    document.getElementById('player' + i).addEventListener('mousedown', (e) => mouseDownCell(e, i));

    document.getElementById('player' + i).addEventListener('contextmenu', (e) => e.preventDefault());
}


function appendHistory(index) {
    const e = document.createElement("div");
    e.classList.add('history-player');
    e.innerHTML = '<div class="stage-num">' + stageList[index] + '</div>' + playerNames[matchedPlayers[index]];
    document.getElementById('history-list').appendChild(e);
}

function redrawHistory() {
    document.getElementById('history-list').innerHTML = '';
    for (let i = 0; i < matchedPlayers.length; i++) {
        appendHistory(i);
    }
}

function showMatchHistory() {
    document.getElementById('match-history').style.display = 'inline-block';
    document.getElementById('match-history-show').style.display = 'none';

}

function hideMatchHistory() {
    document.getElementById('match-history').style.display = 'none';
    document.getElementById('match-history-show').style.display = 'inline-block';
}


/* Component tracker */

const ITEM_BOX_CAROUSEL = 1;
const ITEM_BOX_NATURAL = 2;
const ITEM_BOX_OTHER = 3;
const carouselItemElement = document.getElementById('carousel-items');
const naturalItemElement = document.getElementById('natural-items');
const otherItemElement = document.getElementById('other-items');

const carouselItemBoxElement = document.querySelector('#carousel-items .box-items');
const naturalItemBoxElement = document.querySelector('#natural-items .box-items');
const otherItemBoxElement = document.querySelector('#other-items .box-items');
carouselItemBoxElement.oncontextmenu = (e) => e.preventDefault();
naturalItemBoxElement.oncontextmenu = (e) => e.preventDefault();
otherItemBoxElement.oncontextmenu = (e) => e.preventDefault();
document.getElementById('item-tracker').oncontextmenu = (e) => e.preventDefault();


const itemBars = {
    'sword': document.getElementById('item-bar-sword'),
    'bow': document.getElementById('item-bar-bow'),
    'rod': document.getElementById('item-bar-rod'),
    'tear': document.getElementById('item-bar-tear'),
    'chain': document.getElementById('item-bar-chain'),
    'cloak': document.getElementById('item-bar-cloak'),
    'belt': document.getElementById('item-bar-belt'),
    'glove': document.getElementById('item-bar-glove'),
    'spat': null,
}

let activeItemBox;
let activeItemBoxElement;
let activeItemBoxBoxElement;
let naturalComponents;

function resetComponentTracker() {
    const oldInfo = [naturalComponents, [...carouselItemBoxElement.children],
        [...naturalItemBoxElement.children], [...otherItemBoxElement.children]];

    pickItemBox(ITEM_BOX_CAROUSEL);

    naturalComponents = {
        'sword': 3,
        'bow': 3,
        'rod': 3,
        'tear': 3,
        'chain': 3,
        'cloak': 3,
        'belt': 3,
        'glove': 3,
    }
    drawItemBars();
    carouselItemBoxElement.innerHTML = '';
    naturalItemBoxElement.innerHTML = '';
    otherItemBoxElement.innerHTML = '';
    return oldInfo;
}

function undoResetComponentTracker(histArr) {
    const [nc, c, n, o] = histArr;
    naturalComponents = nc;

    c.forEach((e) => carouselItemBoxElement.appendChild(e))
    n.forEach((e) => naturalItemBoxElement.appendChild(e))
    o.forEach((e) => otherItemBoxElement.appendChild(e))
}


function pickItemBox(which) {
    activeItemBox = which;
    if (which == ITEM_BOX_CAROUSEL) {
        activeItemBoxElement = carouselItemElement;
        activeItemBoxBoxElement = carouselItemBoxElement;
        carouselItemElement.classList.add('selected');
    } else {
        carouselItemElement.classList.remove('selected');
    }
    if (which == ITEM_BOX_NATURAL) {
        activeItemBoxElement = naturalItemElement;
        activeItemBoxBoxElement = naturalItemBoxElement;
        naturalItemElement.classList.add('selected');
    } else {
        naturalItemElement.classList.remove('selected');
    }
    if (which == ITEM_BOX_OTHER) {
        activeItemBoxElement = otherItemElement;
        activeItemBoxBoxElement = otherItemBoxElement;
        otherItemElement.classList.add('selected');
    } else {
        otherItemElement.classList.remove('selected');
    }
}


function addItem(item, isUndo) {
    if (activeItemBox == ITEM_BOX_NATURAL && item != 'spat') {
        if (!naturalComponents[item]) {
            // Prevent adding zero components left
            return;
        }
        naturalComponents[item]--;
    }

    const e = document.createElement("img");
    e.src = 'img/components/' + item + '.png';
    e.classList.add('item-image');
    const boxRef = activeItemBox;
    const boxBoxRef = activeItemBoxBoxElement;
    const removeHandler = (event) => removeItem(item, boxRef, e, boxBoxRef, event);
    e.onmousedown = removeHandler;
    e.oncontextmenu = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }
    activeItemBoxBoxElement.appendChild(e);
    if (!isUndo) {
        undoStack.push(['addItem', removeHandler]);
    }
    if (activeItemBox == ITEM_BOX_NATURAL && item != 'spat') {
        drawItemBars();
    }
}
function undoAddItem(histArr) {
    histArr[1]();
}

function removeItem(item, itemBox, img, box, event) {
    if (event) {
        if (event.button == 2) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            return;
        }
        undoStack.push(['removeItem', item, itemBox, () => box.appendChild(img)]);
    }
    box.removeChild(img);

    if (itemBox == ITEM_BOX_NATURAL && item != 'spat') {
        naturalComponents[item]++;
        drawItemBars();
    }
}

function undoRemoveItem(histArr) {
    const currBox = activeItemBox;
    const [_, item, itemBox, addFn] = histArr;

    if (itemBox == ITEM_BOX_NATURAL && item != 'spat') {
        naturalComponents[item]--;
        drawItemBars();
    }
    addFn();
}

function drawItemBars() {
    //const remainingNaturalComponents = Object.values(naturalComponents).reduce((s, v) => s + v, 0);
    Object.entries(naturalComponents).forEach((arr) => {
        const [item, count] = arr;
        const bar = itemBars[item];
        if (count === 3) {
            bar.style.height = '100%';
        } else if (count === 2) {
            bar.style.height = '67%';
        } else if (count === 1) {
            bar.style.height = '34%';
        } else if (count === 0) {
            bar.style.height = '1%';
        }
        bar.innerText = count;
        //bar.innerText = Math.round(count / remainingNaturalComponents * 100) + '%';
    });
}






function reset() {
    const matchupInfo = resetMatchupTracker();
    const componentInfo = resetComponentTracker();

    undoStack.push(['reset', matchupInfo, componentInfo]);
}

reset();
document.getElementById('reset').addEventListener('click', reset);


function undo() {
    if (!undoStack.length) {
        return;
    }

    const arr = undoStack.pop();
    switch (arr[0]) {
        case 'match':
            undoMatchPlayer();
            break;
        case 'elim':
            undoEliminatePlayer(arr);
            break;
        case 'reset':
            undoResetMatchupTracker(arr[1]);
            undoResetComponentTracker(arr[2]);
            break;
        case 'addItem':
            undoAddItem(arr);
            break;
        case 'removeItem':
            undoRemoveItem(arr);
            break;
    }
}
document.getElementById('undo').addEventListener('click', undo);