const traits =
{
    "Abomination": {
        "desc": "When 3 allied Champions have died, the Monstrosity will rise from its grave. The Monstrosity receives bonus Health and Attack Damage based on allied Abomination champions' star levels. The 3 Abomination champions nearest the grave will also grant the Monstrosity a random copy of one of their items when combat starts.",
        "effect": {
            "2": "800 Health, 80 Attack Damage",
            "3": "1200 Health, 120 Attack Damage",
            "4": "1600 Health, 160 Attack Damage",
            "5": "2000 Health, 200 Attack Damage"
        },
        "notes": "",
    },
    "Coven": {
        "desc": "",
        "effect": {
            "3": "At the start of combat, the champion nearest to the center of your Coven champions is chosen as the Coven Leader, gaining 50% bonus Ability Power. Each time a Coven champion casts, 25% of the cost is bestowed upon the Coven Leader as Mana."
        },
        "notes": ""
    },
    "Dawnbringer": {
        "desc": "Dawnbringers rapidly heal some of their maximum Health the first time they drop below 50%. When this occurs, all allied Dawnbringers gain 10% bonus damage.",
        "effect": {
            "2": "30% of Maximum Health",
            "4": "50% of Maximum Health",
            "6": "90% of Maximum Health",
            "8": "150% of Maximum Health"
        },
        "notes": ""
    },
    "Draconic": {
        "desc": "In Hyper Roll, dragon eggs hatch a lot faster!",
        "effect": {
            "3": "At the end of each player combat, gain a dragon egg on your bench. The bigger the egg, the longer it takes to hatch, and the rarer the reward.",
            "5": "Dragon eggs are golden! Golden eggs hatch into even rarer loot."
        },
        "notes": ""
    },
    "Dragonslayer": {
        "desc": "Dragonslayers gain bonus Ability Power. After the first ally Dragonslayer scores a takedown on an enemy with at least 1400 maximum Health, all allies gain additional Ability Power for the rest of the round.",
        "effect": {
            "2": "30% Ability Power for Dragonslayers, 20% for everyone else",
            "4": " 60% Ability Power for Dragonslayers, 40% for everyone else"
        },
        "notes": ""
    },
    "Eternal": {
        "desc": "",
        "effect": {
            "1": "Wolf separates from Lamb, and can be placed anywhere on the battlefield. Wolf does not count toward your team size, and receives all of Lamb's stat bonuses."
        }// todo
    },
    "Forgotten": {
        "desc": "Forgotten champions have bonus Attack Damage and Ability Power. Each Shadow item held by a Forgotten champion increases these bonuses by 10% on all Forgotten champions, stacking up to 4 times.",
        "effect": {
            "3": "35 Attack Damage and Ability Power",
            "6": "70 Attack Damage and Ability Power",
            "9": "110 Attack Damage and Ability Power"
        },
        "notes": ""
    },
    "Hellion": {
        "desc": "Hellions gain Attack Speed. Whenever a Hellion dies, a Doppelhellion (a one less star copy) will leap from the Hellion portal and join the fight!",
        "effect": {
            "3": "5% Attack Speed",
            "5": "50% Attack Speed",
            "7": "110% Attack Speed"
        },
        "notes": ""
    },
    "Ironclad": {
        "desc": "All allies gain Armor.",
        "effect": {
            "2": "40 Armor",
            "3": "100 Armor"
        },
        "notes": ""
    },
    "Nightbringer": {
        "desc": "Nightbringers gain a shield for 8 seconds equal to a percent of their maximum Health the first time they drop below 50%. When this occurs, that Nightbringer gains bonus damage.",
        "effect": {
            "2": "30% Shield, 20% Damage",
            "4": "50% Shield, 30% Damage",
            "6": "75% Shield, 40% Damage",
            "8": "100% Shield, 50% Damage"
        },
        "notes": ""
    },
    "Redeemed": {
        "desc": "Redeemed champions have increased Armor, Magic Resistance, and Ability Power. When they die, their bonus is split among remaining Redeemed allies.",
        "effect": {
            "3": "25 Armor & Magic Resist, 30% Ability Power",
            "6": "40 Armor & Magic Resist, 50% Ability Power",
            "9": "65 Armor & Magic Resist, 80% Ability Power"
        },
        "notes": ""
    },
    "Revenant": {
        "desc": "Revenants revive after their first death each combat. Once revived, they take and deal 30% increased damage.",
        "effect": {
            "2": "Revive with 30% Health",
            "3": "Revive with 75% Health"
        },
        "notes": ""
    },
    "Verdant": {
        "desc": "Champions that start combat adjacent to at least one Verdant ally are immune to crowd control for a duration.",
        "effect": {
            "2": "5 seconds",
            "3": "8 seconds"
        },
        "notes": ""
    },
    "Assassin": {
        "desc": "Innate: When combat starts, Assassins leap to the enemy backline. Assassins’ abilities can critically strike and they gain bonus Critical Strike Chance and bonus Critical Strike Damage.",
        "effect": {
            "2": "10% Crit Chance; 25% Crit Damage",
            "4": "30% Crit Chance; 55% Crit Damage",
            "6": "50% Crit Chance; 90% Crit Damage"
        },
        "notes": ""
    },
    "Brawler": {
        "desc": "Brawlers gain additional maximum Health.",
        "effect": {
            "2": "400 Bonus Health",
            "4": "800 Bonus Health"
        },
        "notes": ""
    },
    "Caretaker": {
        "desc": "",
        "effect": {
            "1": " Caretakers deploy with a Baby Dragon that can be placed anywhere on the battlefield. Baby Dragons gain 100% of their handler’s Attack Speed and restore 50 mana to their Caretaker upon death."
        }
    },
    "Cavalier": {
        "desc": "Innate: Cavaliers charge quickly towards their target whenever they move. Cavaliers take reduced damage. At the start of combat and after charge, this effect is doubled for 4 seconds.",
        "effect": {
            "2": "15% Damage Reduction",
            "3": "20% Damage Reduction",
            "4": "25% Damage Reduction"
        },
        "notes": ""
    },
    "Cruel": {
        "desc": "",
        "effect": {
            "1": "Cruel champions are purchased with Little Legend Health instead of gold. They can be sold for gold but not Health. You're welcome. A Cruel champion hungers to be alone against exactly 1 enemy left standing."
        },
        "notes": ""
    },
    "God-King": {
        "desc": "",
        "effect": {
            "1": "If you have exactly one God-King they deal 20% bonus damage to enemies who have at least one of their Rival Traits. Garen's Rival Traits: Forgotten, Nightbringer, Coven, Hellion, Dragonslayer, Abomination, Revenant. Darius' Rival Traits: Redeemed, Dawnbringer, Verdant, Draconic, Ironclad."
        }
    },
    "Invoker": {
        "desc": "All allies gain extra Mana from their basic attacks.",
        "effect": {
            "2": "+3 Mana",
            "4": "+6 Mana"
        },
        "notes": ""
    },
    "Knight": {
        "desc": "All allies block a flat amount of damage from all sources.",
        "effect": {
            "2": "15 Damage Blocked",
            "4": "40 Damage Blocked",
            "6": "60 Damage Blocked"
        },
        "notes": ""
    },
    "Legionnaire": {
        "desc": "Legionnaires gain bonus attack speed, and their first attack after casting a spell heals them for 50% of the damage dealt.",
        "effect": {
            "2": "25% Attack Speed",
            "4": "50% Attack Speed",
            "6": "80% Attack Speed",
            "8": "120% Attack Speed"
        },
        "notes": ""
    },
    "Mystic": {
        "desc": "All allies gain Magic Resist.",
        "effect": {
            "2": "40 Magic Resist",
            "3": "100 Magic Resist",
            "4": "180 Magic Resist"
        },
        "notes": ""
    },
    "Ranger": {
        "desc": "After 4 seconds, Rangers gain Attack Speed for 4 seconds. They regain this bonus every 4 seconds thereafter.",
        "effect": {
            "2": "60% Attack Speed",
            "4": "120% Attack Speed"
        },
        "notes": ""
    },
    "Renewer": {
        "desc": "Renewers heal for a percent of their maximum Health each second. If they're full health, they restore mana instead.",
        "effect": {
            "2": "5% Health or 5% Mana",
            "4": "8% Health or 8% Mana"
        },
        "notes": ""
    },
    "Skirmisher": {
        "desc": "Skirmishers gain a shield at the start of combat, and bonus Attack Damage each second.",
        "effect": {
            "3": "300 Shield and +3 Attack Damage each second",
            "6": "600 Shield and +10 Attack Damage each second"
        },
        "notes": ""
    },
    "Spellweaver": {
        "desc": "Spellweavers have bonus Ability Power, which increases any time a champion uses an ability, stacking up to 10 times.",
        "effect": {
            "2": "20% Ability Power, +2% bonus Ability Power",
            "4": "40% Ability Power, +4% bonus Ability Power",
        },
        "notes": ""
    }
}