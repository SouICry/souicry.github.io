const shadowItems =
{
    "deathblade": {
        "name": "Caustic Deathblade",
        "recipe": [
            "sword",
            "sword"
        ], "done": true,
        "desc": "Contributing to a kill grants the holder +15 Attack Damage for the rest of combat. This effect can stack any number of times (starting at 3). The wearer receives -25% max health.",
        "notes": []
    },
    "gs": {
        "name": "Evil Giantslayer",
        "recipe": [
            "sword",
            "bow"
        ], "done": true,
        "big": true,
        "desc": "The holder's Abilities and attacks do 45% bonus damage. If the target has less than 1100 maximum Health, the holder's Abilities and attacks do 20% decreased damage instead.",
        "notes": [
        ]
    },
    "gunblade": {
        "name": "Hextech Gunblade Of Immortality",
        "recipe": [
            "sword",
            "rod"
        ], "done": true,
        "desc": "The holder's magic and true damage from Abilities heal the nearest ally with missing health for 50% of the damage dealt. This heal cannot effect the holder."
    },
    "shojin": {
        "name": "Spectral Spear of Shojin",
        "recipe": [
            "sword",
            "tear"
        ], "done": true,
        "desc": "The holder's attacks restore 14 additional Mana on-hit. The holder deals 25% less damage."
    },
    "ga": {
        "name": "Guardian Fallen Angel",
        "recipe": [
            "sword",
            "chain"
        ], "done": true,
        "unique": true,
        "big": true,
        "desc": "Prevents the holder's first death, placing them in stasis instead. After 2 seconds, they return with 100% Health and shed all negative effects. After this effect triggers, the holder's Attack Speed is reduced by 50% for the rest of combat."
    },
    "bt": {
        "name": "Riskthirster",
        "recipe": [
            "sword",
            "cloak"
        ], "done": true,
        "desc": "Physical damage heals holder for 40% of the damage dealt. Each time the holder heals to 90% Health, they gain 30% Attack Speed for 3 seconds (does not stack). The holder takes 33% of their maximum Health in true damage at the beginning of combat.",
        "notes": [
        ]
    },
    "zekes": {
        "name": "Zeke's Evil Herald",
        "recipe": [
            "sword",
            "belt"
        ],
        "done": true,
        "desc": "When combat begins, the holder reduces the Attack Speed of all allies within 1 hex in the same row by -30%. The holder then gains 40% Attack Speed for each affected ally."
    },
    "ie": {
        "name": "Sacrificial Infinity Edge",
        "recipe": [
            "sword",
            "glove"
        ],
        "unique": true,
        "done": true,
        "desc": "Gives 75% Critical Strike Chance (including components). Each point of Critical Strike Chance above 100% becomes +1% Critical Strike Damage. The holder also gains 25% Critical Strike Damage. Each time the holder critically strikes, they deal 5% of their maximum Health to themselves as true damage."
    },
    "rfc": {
        "name": "Rapid Deathcannon",
        "recipe": [
            "bow",
            "bow"
        ], "done": true,
        "big": true,
        "desc": "Increases the holder's Attack Range by 1 hex. Additionally, the holder gains +40% bonus attack speed when there are no enemies within 2 hexes. The holder's attacks can no longer miss."
    },
    "rageblade": {
        "name": "Guinsoo's Sacrificial Rageblade",
        "recipe": [
            "bow",
            "rod"
        ], "done": true,
        "desc": "Attacks grant +8% bonus Attack Speed for the rest of combat. The bonus Attack Speed can stack any number of times. The holder is dealt 2% of their maximum Health as true damage each attack.",
        "notes": [
            "Does not bypass the attack speed limit of 5 attacks per second."
        ]
    },
    "shiv": {
        "name": "Statikk Stiletto",
        "recipe": [
            "bow",
            "tear"
        ], "done": true,
        "desc": "Every other attack from the holder unleashes a chain lightning that strikes 4 enemies, dealing 55 magic damage and reducing their Magic Resist by 70% for 5 seconds. The holder receives -50% Attack Damage"
    },
    "titans": {
        "name": "Titan's Revenge",
        "recipe": [
            "bow",
            "chain"
        ], "done": true,
        "big": true,
        "desc": "Every 4 seconds, the holder's next attack deals 40% of the total damage they have taken since the last empowered attack as true damage."
    },
    "hurricane": {
        "name": "Runaan's Untamed Hurricane",
        "recipe": [
            "bow",
            "cloak"
        ], "done": true,
        "desc": "The holder's attacks fire bolts at 2 nearby enemies, dealing 60% of the wearer's Attack Damage. These bolts can critically strike but do not apply on-hit effects."
    },
    "zzrot": {
        "name": "Unstable Zz'Rot Portal",
        "recipe": [
            "bow",
            "belt"
        ], "done": true,
        "desc": "When the holder dies, a Construct with 500 Health arises to continue the fight. When it dies it deals 777 true damage to enemies within one hex.",
        "notes": []
    },
    "lw": {
        "name": "Final Whisper",
        "recipe": [
            "bow",
            "glove"
        ],
        "done": true,
        "unique": true,
        "desc": "When the holder inflicts a critical hit, the target's Armor and Magic Resist are reduced by 50% for 2 seconds. The holder's Armor and Magic Resist are also permanently reduced by 50%."
    },
    "dcap": {
        "name": "Rabadon's Caustic Deathcap",
        "recipe": [
            "rod",
            "rod"
        ], "done": true,
        "desc": "The holder gains 80 additional Ability Power and receives -25% maximum Health."
    },
    "archangels": {
        "name": "Archdemon's Staff Of Immortality",
        "recipe": [
            "rod",
            "tear"
        ], "done": true,
        "desc": "Each time the holder casts their ability, they gain empty maximum Health equal to 350% of their maximum Mana. The holder then heals for that amount."
    },
    "locket": {
        "name": "Locket of the Silver Lunari",
        "recipe": [
            "rod",
            "chain"
        ], "done": true,
        "desc": "The holder and all allies within 2 hexes take 25% reduced damage, but gain 5 less mana per attack."
    },
    "spark": {
        "name": "Ionic Dark-Spark",
        "recipe": [
            "rod",
            "cloak"
        ], "done": true,
        "desc": "Enemies and allies (except the holder) within 2 hexes are zapped when they cast an ability, taking magic damage scaling with their max Mana. Enemies take 200% of their max mana, and allies take 100% of their max mana. Whenever an ally or enemy is zapped, the holder gains 5 Ability Power for the rest of combat."
    },
    "morello": {
        "name": "Mor-evil-lonomicon",
        "recipe": [
            "rod",
            "belt"
        ], "done": true,
        "unique": true,
        "desc": "When the holder deals magic damage with their ability, they burn the target, dealing 100% of the target's maximum Health as true damage over 25 seconds, and reducing healing by 50% for the duration of the burn. The holder's ability deals 50% less damage.",
        "notes": []
    },
    "jg": {
        "name": "Sacrificial Gauntlet",
        "recipe": [
            "rod",
            "glove"
        ], "done": true,
        "desc": "The holder's magic and true damage from their ability can critically strike. The holder gains 65% Critical Strike Damage. After the holder casts their ability, they lose 20% of their maximum Health.",
        "notes": [
            "Multi-target abilities critically strike on a per-target basis."
        ]
    },
    "blue-buff": {
        "name": "Very Dark Blue Buff",
        "recipe": [
            "tear",
            "tear"
        ], "done": true,
        "unique": true,
        "desc": "After casting their ability, the holder gains 10 Mana. If the holder has less than 50% health, this is increased to 40."
    },
    "frozen-heart": {
        "name": "Frozen Dark Heart",
        "recipe": [
            "tear",
            "chain"
        ], "done": true,
        "unique": true,
        "desc": "Reduces the Attack Speed of all enemies within 2 hexes by 50%. The Attack speed of allies (except the wearer) within 1 Hex is reduced by 50%."
    },
    "chalice": {
        "name": "Chalice of Malice",
        "recipe": [
            "tear",
            "cloak"
        ], "done": true,
        "desc": "When combat begins, all of the holder's allies within 1 hex in the same row gain 45 Ability Power for the rest of combat. The holder loses 20 Ability Power instead of gaining any."
    },
    "redemption": {
        "name": "Sacrificial Redemption",
        "recipe": [
            "tear",
            "belt"
        ], "done": true,
        "desc": "The wearer radiates an aura to all allies on the board except themself, and heals them for 15% of their missing Health every 5 seconds. Each time this happens, the wearer damages themselves for 10% of their current health as true damage."
    },
    "hoj": {
        "name": "Hand of Vengance",
        "recipe": [
            "tear",
            "glove"
        ], "done": true,
        "desc": "At the beginning of combat, the holder gains +40 Attack Damage and +40 Ability Power, and Attacks and Spells heal for 40% of the damage dealt. These bonuses expire after each takedown, and renew on the next.",
        "notes": []
    },
    "bramble": {
        "name": "Refracted Bramble Vest",
        "recipe": [
            "chain",
            "chain"
        ], "done": true,
        "big": true,
        "desc": "Reduces incoming physical damage by 50%.",
        "notes": [
            ""
        ]
    },
    "gargoyles": {
        "name": "Gargoyle Stoneplate Of Immortality",
        "recipe": [
            "chain",
            "cloak"
        ], "done": true,
        "desc": "The holder heals themself for 70 Health every 2 seconds for each unit targeting them."
    },
    "sunfire": {
        "name": "Eclipse Cape",
        "recipe": [
            "chain",
            "belt"
        ], "done": true,
        "big": true,
        "desc": "Every 2 seconds, a random enemy within 3 hexes is burned for 25% of their maximum Health over 10 seconds. Any healing they receive is reduced by 50%. The holder is also burned for 4% of their maximum Health every second for the entierty of combat.",
        "notes": []
    },
    "shroud": {
        "name": "Dark Shroud of Stillness",
        "recipe": [
            "glove",
            "chain"
        ], "done": true,
        "unique": true,
        "desc": "When combat begins, the holder shoots a beam straight ahead and behind that delays affected enemies' and allies' first ability cast, increasing their maximum Mana by 50% until they cast.",
        "notes": []
    },
    "dclaw": {
        "name": "Refracted Dragon's Claw",
        "recipe": [
            "cloak",
            "cloak"
        ], "done": true,
        "desc": "Reduces incoming magic damage by 15%. Negates bonus damage from incoming critical hits.",
        "notes": []
    },
    "zephyr": {
        "name": "Turbulent Zephyr",
        "recipe": [
            "cloak",
            "belt"
        ], "done": true,
        "unique": true,
        "desc": "When combat begins, the holder summons a whirlwind on the opposite side of the arena that removes the closest enemy from combat for 8 seconds. Once the enemy returns to combat, they gain 30 Attack Damage and Ability Power for the rest of combat. Ignores CC immunity."
    },
    "qss": {
        "name": "Caustic Quicksilver",
        "recipe": [
            "cloak",
            "glove"
        ], "done": true,
        "unique": true,
        "desc": "The wearer is immune to crowd control for the entirety of combat and receives -25% maximum Health.",
        "notes": [
            "Does not work against Zephyr."
        ]
    },
    "warmogs": {
        "name": "Warmog's Sacrificial Armor",
        "recipe": [
            "belt",
            "belt"
        ], "done": true,
        "desc": "Grants 1500 bonus Health (including components). The holder takes 100 true damage each second.",
        "notes": [
            "Puts all units above the Giant Slayer threshold."
        ]
    },
    "trap-claw": {
        "name": "Vengeful Trap Claw",
        "recipe": [
            "belt",
            "glove"
        ], "done": true,
        "desc": "Blocks the first enemy ability that hits the wearer, then teleports them to the spell's caster, and causes both units to start targeting each other. They deal 25% increased damage to each other."
    },
    "tg": {
        "name": "Cursed Thief's Gloves",
        "recipe": [
            "glove",
            "glove"
        ],
        "unique": true,
        "desc": "At the beginning of each round, the wearer equips 2 random non-spatula full shadow items that are removed at the end of the round.",
        "notes": [
            "Does not include component items, unlike normal Thief's Gloves.",
            "The two items are not pure random, but have pre-determined combinations that exclude duplicates of unique items."
        ]
    },
    "fon": {
        "name": "Force of Darkness",
        "recipe": [
            "spat",
            "spat"
        ],
        "desc": "Gain +2 maximum team size but take 100% extra player damage.",
        "notes": [
            "The item needs to be equipped by a unit once (on the board or bench) before its effect is applied.",
            "Once applied, the item does not need to be equipped anymore."
        ]
    },
    "sword-spat": {
        "name": "Forgotten Emblem",
        "recipe": [
            "spat",
            "sword"
        ],
        "trait": "Forgotten",
        "unique": true,
        "desc": "Wearer becomes a Forgotten."
    },
    "bow-spat": {
        "name": "Hellion Emblem",
        "recipe": [
            "spat",
            "bow"
        ],
        "trait": "Hellion",
        "unique": true,
        "desc": "Wearer becomes a Hellion."
    },
    "rod-spat": {
        "name": "Dragonslayer Emblem",
        "recipe": [
            "spat",
            "rod"
        ],
        "trait": "Dragonslayer",
        "unique": true,
        "desc": "Wearer becomes a Dragonslayer."
    },
    "tear-spat": {
        "name": "Coven Emblem",
        "recipe": [
            "spat",
            "tear"
        ],
        "trait": "Coven",
        "unique": true,
        "desc": "Wearer becomes a Coven."
    },
    "chain-spat": {
        "name": "Cavalier Emblem",
        "recipe": [
            "spat",
            "chain"
        ],
        "trait": "Cavalier",
        "unique": true,
        "desc": "Wearer becomes a Cavalier."
    },
    "cloak-spat": {
        "name": "Revenant Emblem",
        "recipe": [
            "spat",
            "cloak"
        ],
        "trait": "Revenant",
        "unique": true,
        "desc": "Wearer becomes a Revenant."
    },
    "belt-spat": {
        "name": "Nightbringer Emblem",
        "recipe": [
            "spat",
            "belt"
        ],
        "trait": "Nightbringer",
        "unique": true,
        "desc": "Wearer becomes a Nightbringer."
    },
    "glove-spat": {
        "name": "Abomination Emblem",
        "recipe": [
            "spat",
            "glove"
        ],
        "trait": "Abomination",
        "unique": true,
        "desc": "Wearer becomes a Abomination."
    }
}