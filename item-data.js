const components = {
    "sword": {
        "name": "B.F Sword",
        "stats": {
            "Attack Damage": 10
        },
    },
    "bow": {
        "name": "Recurve Bow",
        "stats": {
            "Attack Speed": 10
        },
        "percent": true
    },
    "chain": {
        "name": "Chain Vest",
        "stats": {
            "Armor": 20
        }
    },
    "cloak": {
        "name": "Negatron Cloak",
        "stats": {
            "Magic Resist": 20
        }
    },
    "rod": {
        "name": "Needlessly Large Rod",
        "stats": {
            "Ability Power": 10
        }
    },
    "tear": {
        "name": "Tear of the Goddess",
        "stats": {
            "Starting Mana": 15
        }
    },
    "belt": {
        "name": "Giant's Belt",
        "stats": {
            "Health": 150
        }
    },
    "glove": {
        "name": "Sparring Gloves",
        "stats": {
            "Critical Strike Chance": 5,
            "Dodge Chance": 10
        },
        "percent": true
    },
    "spat": {
        "name": "Spatula",
        "stats": {

        }
    },
}



const fullItems =
{
    "deathblade": {
        "name": "Deathblade",
        "recipe": [
            "sword",
            "sword"
        ], "done": true,
        "desc": "Contributing to a kill grants the holder +10 additional Attack Damage for the rest of combat. This effect can stack any number of times (starting at 3).",
        "notes": [
            "Gives 50 AD at the start of the round, including components."
        ]
    },
    "gs": {
        "name": "Giant Slayer",
        "recipe": [
            "sword",
            "bow"
        ], "done": true,
        "desc": "The holder's spells and basic attacks do 10% bonus damage. If the target has more than 1750 maximum Health, the bonus increases to 70%.",
        "notes": [
            "Only applies the 10% at exactly 1750 HP."
        ]
    },
    "gunblade": {
        "name": "Hextech Gunblade",
        "recipe": [
            "sword",
            "rod"
        ], "done": true,
        "desc": "Damage from champion abilities heal for 33% of the damage dealt. Excess healing fuels a shield that protects the holder against up to 300 damage.",
        "notes": [
            "Does not work on some spells that deal physical damage and count as basic attacks. <List will be added after further testing on PBE>."
        ]
    },
    "shojin": {
        "name": "Spear of Shojin",
        "recipe": [
            "sword",
            "tear"
        ], "done": true,
        "desc": "Basic attacks restore an additional 8 mana on-hit."
    },
    "ga": {
        "name": "Guardian Angel",
        "recipe": [
            "sword",
            "chain"
        ], "done": true,
        "unique": true,
        "big": true,
        "desc": "Prevents the wearer's first death, placing them in stasis instead. After 2 seconds, they return with 400 health and shed all negative effects."
    },
    "bt": {
        "name": "Bloodthirster",
        "recipe": [
            "sword",
            "cloak"
        ], "done": true,
        "desc": "Basic attacks heal the wearer for 40% of the damage dealt. Upon falling below 40% Health, the wearer gains a 40% max Health shield that lasts up to 5 seconds.",
        "notes": []
    },
    "zekes": {
        "name": "Zeke's Herald",
        "recipe": [
            "sword",
            "belt"
        ], "done": true,
        "desc": "When combat begins, the wearer and all allies within 1 hex in the same row gain 30% Attack Speed for the rest of combat."
    },
    "ie": {
        "name": "Infinity Edge",
        "recipe": [
            "sword",
            "glove"
        ], "done": true,
        "unique": true,
        "desc": "Gives 75% Critical Strike Chance (including components). Each point of Citical Strike Chance above 100% becomes +1% Critical Strike Damage."
    },
    "rfc": {
        "name": "Rapid Firecannon",
        "recipe": [
            "bow",
            "bow"
        ], "done": true,
        "desc": "Increases the wearer's Attack Range by 1 hex and grants 20% bonus Attack Speed (total of 40% including components). The wearer's Basic Attacks can no longer miss."
    },
    "rageblade": {
        "name": "Guinsoo's Rageblade",
        "recipe": [
            "bow",
            "rod"
        ], "done": true,
        "desc": "Basic attacks grant 6% bonus attack speed for the rest of combat. This effect can stack any number of times.",
        "notes": [
            "Does not bypass the attack speed limit of 5 attacks per second."
        ]
    },
    "shiv": {
        "name": "Statikk Shiv",
        "recipe": [
            "bow",
            "tear"
        ], "done": true,
        "big": true,
        "desc": "Every third basic attack from the wearer unleashes a chain lightning that bounces to 4 enemies, dealing 55 magic damage and reducing their Magic Resist by 70% for 5 seconds."
    },
    "titans": {
        "name": "Titan's Resolve",
        "recipe": [
            "bow",
            "chain"
        ], "done": true,
        "desc": "When the wearer takes damage or inflicts a critical hit, they gain 2 Attack Damage and Spell Power. This stacks up to 25 times, at which point the wearer gains 25 Armor and Magic Resistance."
    },
    "hurricane": {
        "name": "Runaan's Hurricane",
        "recipe": [
            "bow",
            "cloak"
        ], "done": true,
        "desc": "Basic attacks fire a bolt at another nearby enemy, dealing 80% of the wearer's Attack Damage and applying on-hit effects. These bolts can critically strike."
    },
    "zzrot": {
        "name": "Zz'Rot Portal",
        "recipe": [
            "bow",
            "belt"
        ],
        "desc": "At the start of combat, the wearer taunts all nearby enemies within 2 hexes for 1 second. Additionally, when the wearer dies, a Construct with 1500 / 2250 / 3000 (based on Star level) Health aries to continue the fight.",
        "notes": [
            "The taunt causes melee units to walk to the Zz'Rot holder if there is an open spot around the holder, possibly walking around other units.",
            "The taunt is ignored by melee units if there are no open spots around the holder."
        ]
    },
    "lw": {
        "name": "Last Whisper",
        "recipe": [
            "bow",
            "glove"
        ], "done": true
        , "unique": true,
        "desc": "When the wearer inflicts a critical hit, the target's Armor is reduced by 70% for 5 seconds. This effect does not stack."
    },
    "dcap": {
        "name": "Rabadon's Deathcap",
        "recipe": [
            "rod",
            "rod"
        ], "done": true,
        "desc": "The holder gains 50 additional Ability Power (on top of components)."
    },
    "archangels": {
        "name": "Archangel's Staff",
        "recipe": [
            "rod",
            "tear"
        ], "done": true,
        "desc": "Each time the wearer casts their abilty, they gain Ability Power equal to 35% of their max Mana."
    },
    "locket": {
        "name": "Locket of the Iron Solari",
        "recipe": [
            "rod",
            "chain"
        ],
        "desc": "When combat begins, the wearer and all allies within 2 hexes in the same row gain a shield that blocks 300 / 350 / 400 (based on Star level) damage for 8 seconds."
    },
    "spark": {
        "name": "Ionic Spark",
        "recipe": [
            "rod",
            "cloak"
        ], "done": true,
        "desc": "Enemies within 2 hexes have their magic resistance reduced by 40% (does not stack). When they cast a spell, they are zapped taking magic damage equal to 200% of their maximum mana."
    },
    "morello": {
        "name": "Morellonomicon",
        "recipe": [
            "rod",
            "belt"
        ], "done": true,
        "unique": true,
        "desc": "When the holder deals magic damage with their spell, they burn the target, dealing 25% of the target's maximum Health as true damage over 10 seconds, and reducing healing by 50% for the duration of the burn.",
        "notes": [
            "Does not stack with Sunfire Cape or other burn effects. The strongest effect takes priority."
        ]
    },
    "jg": {
        "name": "Jeweled Gauntlet",
        "recipe": [
            "rod",
            "glove"
        ],
        "done": true,
        "desc": "The wearer's magic and true damage from their ability can critically strike. The holder gains 40% bonus critical strike damage.",
        "notes": [
            "Multi-target abilities critically strike on a per-target basis."
        ]
    },
    "blue-buff": {
        "name": "Blue Buff",
        "recipe": [
            "tear",
            "tear"
        ],
        "unique": true,
        "desc": "After each spellcast, the wearer's mana is set to 20."
    },
    "frozen-heart": {
        "name": "Frozen Heart",
        "recipe": [
            "tear",
            "chain"
        ],
        "unique": true,
        "done": true,
        "big": true,
        "desc": "Reduces the Attack Speed of enemies within 2 Hexes by 35%."
    },
    "chalice": {
        "name": "Chalice of Power",
        "recipe": [
            "tear",
            "cloak"
        ], "done": true,
        "desc": "When combat begins, the wearer and all allies within 1 hex in the same row gain 30 spell power for the rest of combat."
    },
    "redemption": {
        "name": "Redemption",
        "recipe": [
            "tear",
            "belt"
        ], "done": true,
        "desc": "Every 5 seconds, the wearer radiates an aura to allies within 1 Hex, healing them for 30% of their missing Health. Allies affected by the aura take 40% reduced damage from area-of-effect attacks for 5 seconds."
    },
    "hoj": {
        "name": "Hand of Justice",
        "recipe": [
            "tear",
            "glove"
        ],
        "desc": "At the beginning of each planning phase, the wearer randomly gains either +40 Attack Damage and Ability Power, or 40% of damage dealt.",
        "notes": [
            "The wearer will have a golden glow if the healing buff is applied, or a red glow if the damage buff is applied.",
            "If multiple are equipped, each one determines its buff separtely."
        ]
    },
    "bramble": {
        "name": "Bramble Vest",
        "recipe": [
            "chain",
            "chain"
        ],
        "desc": "Negates bonus damage from incoming critical hits. On being hit by a basic attack, deal 80 / 100 / 150 (based on Star level) magic damage to all nearby enemies (2.5 second cooldown).",
        "notes": [
            "The affect applies to both basic attacks and spells that crit."
        ]
    },
    "gargoyles": {
        "name": "Gargoyle Stoneplate",
        "recipe": [
            "chain",
            "cloak"
        ],
        "done": true,
        "desc": "The holder gains 20 Armor and Magic Resist for each enemy targeting them."
    },
    "sunfire": {
        "name": "Sunfire Cape",
        "recipe": [
            "chain",
            "belt"
        ], "done": true,
        "unique": true,
        "big": true,
        "desc": "At start of combat, and every 2.5 seconds thereafter, applies a 10-second burn to a random enemy within 2 hexes, dealing 2.5% of target's maximum health true damage each second and applying Grievous Wounds for the duration, reducing healing on the target.",
        "notes": [
            "Does not stack with Morellonomicon or other burn effects."
        ]
    },
    "shroud": {
        "name": "Shroud of Stillness",
        "recipe": [
            "glove",
            "chain"
        ],
        "unique": true,
        "done": true,
        "desc": "When combat begins, the wearer shoots a beam straight ahead in a 1.5-hex line that delays affected enemies' first spellcast, increasing their maximum mana by 35% until they cast.",
        "notes": [
            "The effect does not stack with itself or Soraka's ability"
        ]
    },
    "dclaw": {
        "name": "Dragon's Claw",
        "recipe": [
            "cloak",
            "cloak"
        ],
        "done": true,
        "desc": "Reduces incoming magic damage by 50%.",
        "notes": [
            "Stacks multiplicatively with magic resist."
        ]
    },
    "zephyr": {
        "name": "Zephyr",
        "recipe": [
            "cloak",
            "belt"
        ], "done": true,
        "unique": true,
        "desc": "When combat begins, the wearer summons a whirlwind on the opposite side of the arena that removes the closest enemy from combat for 5 seconds. Ignores CC immunity."
    },
    "qss": {
        "name": "Quicksilver",
        "recipe": [
            "cloak",
            "glove"
        ],
        "unique": true,
        "done": true,
        "desc": "The wearer is immune to crowd control effects for the first 10 seconds of combat.",
        "notes": [
            "Does not work against Zephyr."
        ]
    },
    "warmogs": {
        "name": "Warmog's Armor",
        "recipe": [
            "belt",
            "belt"
        ], "done": true,
        "desc": "Grants 1000 bonus Health (including components).",
        "notes": [
            "Puts all 2* and some 1* units above the Giant Slayer threshold."
        ]
    },
    "trap-claw": {
        "name": "Trap Claw",
        "recipe": [
            "belt",
            "glove"
        ],
        "unique": true,
        "big": true,
        "desc": "Blocks the first enemy spell that hits the wearer, and stuns the spell's caster for 4 seconds."
    },
    "tg": {
        "name": "Thief's Gloves",
        "recipe": [
            "glove",
            "glove"
        ],
        "unique": true,
        "desc": "At the beginning of each round, the wearer equips 2 random non-spatula items that are removed at the end of the round. The quality of these items are based on player level.",
        "notes": [
            "The two items are not pure random, but have pre-determined combinations that exclude duplicates of unique items."
        ]
    },
    "fon": {
        "name": "Force of Nature",
        "recipe": [
            "spat",
            "spat"
        ],
        "desc": "Increases the unit cap by 1.",
        "notes": [
            "The item needs to be equipped by a unit once (on the board or bench) before its effect is applied.",
            "Once applied, the item does not need to be equipped anymore."
        ]
    },
    "sword-spat": {
        "name": "Skirmisher Emblem",
        "recipe": [
            "spat",
            "sword"
        ],
        "trait": "Skirmisher",
        "unique": true,
        "desc": "Wearer gains the Skirmisher trait."
    },
    "bow-spat": {
        "name": "Legionnaire Emblem",
        "recipe": [
            "spat",
            "bow"
        ],
        "trait": "Legionnaire",
        "unique": true,
        "desc": "Wearer gains the Legionnaire trait."
    },
    "rod-spat": {
        "name": "Spellweaver Emblem",
        "recipe": [
            "spat",
            "rod"
        ],
        "trait": "Spellweaver",
        "unique": true,
        "desc": "Wearer gains the Spellweaver trait."
    },
    "tear-spat": {
        "name": "Renewer Emblem",
        "recipe": [
            "spat",
            "tear"
        ],
        "trait": "Renewer",
        "unique": true,
        "desc": "Wearer gains the Renewer trait."
    },
    "chain-spat": {
        "name": "Ironclad Emblem",
        "recipe": [
            "spat",
            "chain"
        ],
        "trait": "Ironclad",
        "unique": true,
        "desc": "Wearer gains the Ironclad trait."
    },
    "cloak-spat": {
        "name": "Redeemed Emblem",
        "recipe": [
            "spat",
            "cloak"
        ],
        "trait": "Redeemed",
        "unique": true,
        "desc": "Wearer gains the Redeemed trait."
    },
    "belt-spat": {
        "name": "Dawnbringer Emblem",
        "recipe": [
            "spat",
            "belt"
        ],
        "trait": "Dawnbringer",
        "unique": true,
        "desc": "Wearer gains the Dawnbringer trait."
    },
    "glove-spat": {
        "name": "Assassin Emblem",
        "recipe": [
            "spat",
            "glove"
        ],
        "trait": "Assassin",
        "unique": true,
        "desc": "Wearer gains the Assassin trait."
    }
}