
const componentList = Object.keys(components);
for (const name in components) {
    components[name].items = {}
    components[name].shadowItems = {}
}


for (const name in fullItems) {
    const item = fullItems[name];
    const shadowItem = shadowItems[name];
    components[item.recipe[0]].items[item.recipe[1]] = [name, item, shadowItem];
    components[shadowItem.recipe[0]].shadowItems[shadowItem.recipe[1]] = [name, shadowItem];
    if (item.recipe[0] != item.recipe[1]) {
        components[item.recipe[1]].items[item.recipe[0]] = [name, item, shadowItem];
        components[shadowItem.recipe[1]].shadowItems[shadowItem.recipe[0]] = [name, shadowItem];
    }
}


const normalImgPath = "img/items/";
const shadowImgPath = "img/shadow_items/"
const overlayHtml = '<img class="overlay" src="img/shadow-overlay.png"/>';
const itemGridCellIdPrefix = 'item-grid-cell-';

const grid = document.getElementById('grid-body');

const critChance = '<p>+15% Critical Strike Chance</p>';
const dodgeChance = '<p>+15% Dodge Chance</p>';
const gloveStats = {
    'tear': critChance,
    'sword': critChance,
    'rod': critChance,
    'bow': critChance,
    'chain': dodgeChance,
    'belt': dodgeChance,
    'cloak': dodgeChance,
}

componentList.forEach((c) => createComponentGridCell(c));
createComponentGridCell('spat', false, true);

componentList.forEach((row) => {
    createComponentGridCell(row, true);
    const rowSpat = row == 'spat';
    componentList.forEach((c) => {
        const cSpat = c == 'spat';
        createItemGridCell(components[row].items[c], (rowSpat && !cSpat) || (!rowSpat && cSpat))
    })
    createItemGridCell(components[row].shadowItems['spat'], !rowSpat, rowSpat, !rowSpat);
});

createComponentGridCell('spat', true, true);
componentList.forEach((c) => {
    const cSpat = c == 'spat';
    createItemGridCell(components['spat'].shadowItems[c], !cSpat, cSpat, !cSpat);
})
createItemGridCell(components['spat'].shadowItems['spat'], false, true);


function getHoverTargets(index) {
    const res = [];
    const mod = index % 11;
    const pos = index - mod;
    for (let i = 0; i < 11; i++) {
        res.push(pos + i);
        res.push(i * 11 + mod);
    }
    return res;
}

function createGridCell(shadow) {
    const o = document.createElement('div');
    o.classList.add('grid-cell');
    const index = grid.childElementCount;
    o.gridIndex = index;
    o.id = itemGridCellIdPrefix + index;
    if (index > 11 && index % 11 > 0) {
        const hoverTargets = getHoverTargets(index);
        o.onmouseover = () => {
            hoverTargets.forEach((i) => {

                document.getElementById(itemGridCellIdPrefix + i).classList.add('highlighted')
            });
        }
        o.onmouseout = () => {
            hoverTargets.forEach((i) => document.getElementById(itemGridCellIdPrefix + i).classList.remove('highlighted'));
        }
    }
    grid.appendChild(o);
    const d = document.createElement('div');
    if (shadow) {
        d.classList.add('img-box');
        const overlay = document.createElement('img')
        overlay.src = "img/shadow-overlay.png";
        overlay.classList.add('overlay');
        d.appendChild(overlay);
    }
    const img = document.createElement('img');
    d.appendChild(img);
    o.appendChild(d);
    return [img, o];
}

function createComponentGridCell(item, vert, shadow) {
    const [img, cell] = createGridCell(shadow);
    if (vert) {
        cell.classList.add("v-component");
    } else {
        cell.classList.add("h-component");
    }
    const imgPath = "img/components/" + item + "1.png";
    img.src = imgPath;

    const component = components[item];
    const statArr = Object.entries(component.stats);
    let stats = '';
    statArr.forEach((arr) => {
        stats += '<p>+' + arr[1] + ' ' + arr[0] + '</p>';
    });
    let content;
    if (!shadow) {
        if (item == 'spat') {
            content = `<div>
                <div>
                ${stats}
                </div>
                <div> 
                    <h3 class="hover-img-title">
                        <div class="img-box">
                            <img src="${imgPath}"/>    
                        </div>
                        <span class="hover-title">
                            ${component.name}
                        </span>
                    </h3>
                </div>
            </div>
            `;
        } else {
            content = `<div>
                <div>
                ${stats}
                </div>
                <div> 
                    <h3 class="hover-img-title">
                        <div class="img-box">
                            <img src="${imgPath}"/>    
                        </div>
                        <span class="hover-title">
                            ${component.name}
                        </span>
                    </h3>
                </div>
                <div>
                    <h3 class="hover-img-title">
                        <div class="img-box">
                            <img src="${imgPath}"/>
                            ${overlayHtml}
                        </div>
                        <span class="hover-title">
                            Shadow ${component.name}
                        </span>
                    </h3></p>
                </div>
            </div>
            `;
        }
    } else {
        content = `<div>
            <div>
            ${stats}
            </div>
            <div>
                <h3 class="hover-img-title">
                    <div class="img-box">
                        <img src="${imgPath}"/>
                        ${overlayHtml}
                    </div>
                    <span class="hover-title">
                        Shadow ${component.name}
                    </span>
                </h3></p>
            </div>
        </div>
        `;
    }


    tippy(cell, {
        content: content,
        allowHTML: true,
    });
}

function createItemGridCell(arr, spat, shadow, shadowPath) {
    const [name, item, shadowItem] = arr;
    const [img, cell] = createGridCell(shadow);
    const imgPath = (shadowPath ? shadowImgPath : normalImgPath) + name + ".png";
    img.src = imgPath;
    if (spat) {
        const o = document.createElement('span');
        o.innerText = item.trait;
        cell.appendChild(o);
    }

    let stats = '';
    let recipe1 =
        item.recipe[0];
    let recipe2 =
        item.recipe[1];
    const firstSpat = recipe1 == 'spat';
    const secondSpat = recipe2 == 'spat'
    if (firstSpat || secondSpat) {
        // no stats to show
    }
    else if (recipe1 == 'glove' || recipe2 == 'glove') {
        if (recipe1 == 'glove' && recipe2 == 'glove') {
            stats = `<p>+15% Critical Strike Chance</p>
            <p>+15% Dodge Chance</p>`
        } else {
            if (recipe1 == 'glove') {
                [recipe2, recipe1] = [recipe1, recipe2];
            }
            const stat1 = Object.entries(components[recipe1].stats)[0];
            stats = '<p>+' + stat1[1] + ' ' + stat1[0] + '</p>' +
                gloveStats[recipe1];
        }
    } else {
        const stat1 = Object.entries(components[recipe1].stats)[0];
        if (recipe1 != recipe2) {
            const stat2 = Object.entries(components[recipe2].stats)[0];
            stats = '<p>+' + stat1[1] + ' ' + stat1[0] + '</p><p>+' + stat2[1] + ' ' + stat2[0] + '</p>';
        } else {
            stats = '<p>+' + stat1[1] * 2 + ' ' + stat1[0] + '</p>';
        }
    }

    let content;
    if (shadowItem && !secondSpat && !firstSpat) {
        content = `<div>
        <div>
        ${stats}
        ${item.unique ? '<p>Unique - Only one per champion' : ''}
        </div>
        <div> 
            <h3 class="hover-img-title">
                <div class="img-box">
                    <img src="${imgPath}"/>    
                </div>
                <span class="hover-title">
                    ${item.name}
                </span>
            </h3>
            <p>${item.desc}</p>
        </div>
        <div>
            <h3 class="hover-img-title">
                <div class="img-box">
                    <img src="${imgPath}"/>
                    ${overlayHtml}
                </div>
                <span class="hover-title">
                    ${shadowItem.name}
                </span>
            </h3>
            <p>${shadowItem.desc}</p>
        </div>
    </div>
    `;
    } else {
        content = `<div>
            <div>
                <h3 class="hover-img-title">
                    <div class="img-box">
                        <img src="${imgPath}"/>
                        ${shadow ? overlayHtml : ''}
                    </div>
                    <span class="hover-title">
                        ${item.name}
                    </span>
                </h3>
                <p>${item.desc}</p>
            </div>
        </div>
        `;

    }


    tippy(cell, {
        content: content,
        allowHTML: true,
    });

}

let itemGridHideDupes = false;
function toggleDuplicateItems() {
    itemGridHideDupes = !itemGridHideDupes;
    let index = 22;
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= i; j++) {
            document.getElementById(itemGridCellIdPrefix + (index + j)).style.visibility = itemGridHideDupes ? 'hidden' : 'visible';
        }
        index += 11;
    }
}