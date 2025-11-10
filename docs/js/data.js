export const PERSONAS = {
    Orpheus: {
        name: "Orpheus", HP: 75, SP: 30,
        STATS:{STR: 5, MAG: 4, END: 5, AGI: 4, LUK: 3},
        ABILITY:["bash", "agi", "dia"], img:"./img/Orpheus.png",
        PASSIVES: ["regenerate_1"],
        affinities: { elec: 'weak', fire: 'resist' }
    },
    Izanagi: {
        name: "Izanagi", HP: 85, SP: 20,
        STATS:{STR: 7, MAG: 2, END: 6, AGI: 3, LUK: 3},
        ABILITY:["lunge", "bash"], PASSIVES: ["regenerate_1"],
        img:"./img/Izanagi.png",
        affinities: { wind: 'weak', elec: 'resist', phys: 'resist' }
    },
    Arsene: {
        name: "Arsene", HP: 65, SP: 40,
        STATS:{STR: 3, MAG: 6, END: 3, AGI: 6, LUK: 3},
        ABILITY:["eiha", "bufu"], PASSIVES: ["regenerate_1"],
        img:"./img/Arsene.png",
        affinities: { light: 'weak', dark: 'resist' }
    }
};
export const DEMONS = [
    {
        name:"Pixie", HP: 30, maxHP: 30, SP: 20,
        STATS:{STR: 3, MAG: 5, END: 2, AGI: 6, LUK: 4},
        ABILITY:["zio", "dia"], img:"./img/Pixie.webp",
        affinities: { phys: 'weak', elec: 'resist', wind: 'weak' }
    },
    {
        name:"Mandrake", HP: 40, maxHP: 40, SP: 22,
        STATS:{STR: 2, MAG: 8, END: 3, AGI: 5, LUK: 7},
        ABILITY:["eiha"], img:"./img/Mandrake.png", 
        affinities: { fire: 'weak', elec: 'resist' }
    },
    {
        name:"Goblin", HP: 45, maxHP: 45, SP: 15,
        STATS:{STR: 7, MAG: 2, END: 5, AGI: 4, LUK: 3},
        ABILITY:["lunge"], img:"./img/Goblin.webp", 
        affinities: { wind: 'weak', fire: 'resist' }
    },
    {
        name:"Agathion", HP: 50, maxHP: 50, SP: 25,
        STATS:{STR: 5, MAG: 6, END: 5, AGI: 7, LUK: 5},
        ABILITY:["zio", "lunge"], img:"./img/Agathion.webp", 
        affinities: { wind: 'weak', elec: 'resist', dark: 'resist' }
    },
    {
        name:"Slime", HP: 60, maxHP: 60, SP: 10,
        STATS:{STR: 6, MAG: 2, END: 8, AGI: 2, LUK: 2},
        ABILITY:["lunge"], img:"./img/Slime.png",
        affinities: { phys: 'resist', fire: 'weak', elec: 'weak' }
    },
    {
        name:"Bicorn", HP: 55, maxHP: 55, SP: 18,
        STATS:{STR: 8, MAG: 3, END: 6, AGI: 6, LUK: 3},
        ABILITY:["lunge", "garu"], img:"./img/Bicorn.png",
        affinities: { elec: 'weak', dark: 'null' }
    },
    {
        name:"Angel", HP: 60, maxHP: 60, SP: 35,
        STATS:{STR: 5, MAG: 9, END: 6, AGI: 8, LUK: 6},
        ABILITY:["kouha", "garu", "dia"], img:"./img/Angel.png", 
        affinities: { dark: 'weak', light: 'null', elec: 'weak' }
    },
    {
        name:"Jack Frost", HP: 70, maxHP: 70, SP: 40,
        STATS:{STR: 6, MAG: 11, END: 7, AGI: 9, LUK: 8},
        ABILITY:["bufu", "bufula"], img:"./img/Jack_Frost.webp",
        affinities: { fire: 'weak', ice: 'null' }
    },
    {
        name:"Pyro Jack", HP: 75, maxHP: 75, SP: 45,
        STATS:{STR: 5, MAG: 12, END: 6, AGI: 10, LUK: 9},
        ABILITY:["agi", "agilao"], img:"./img/Pyro_Jack.png", 
        affinities: { ice: 'weak', fire: 'null' }
    },
    {
        name:"Nekomata", HP: 80, maxHP: 80, SP: 35,
        STATS:{STR: 9, MAG: 7, END: 7, AGI: 14, LUK: 10},
        ABILITY:["power_slash", "garula"], img:"./img/Nekomata.webp", 
        affinities: { elec: 'weak', psy: 'resist' }
    },
    {
        name:"Leanan Sídhe", HP: 85, maxHP: 85, SP: 60,
        STATS:{STR: 7, MAG: 15, END: 8, AGI: 11, LUK: 12},
        ABILITY:["psio", "diarama"], img:"./img/Leanan_Sidhe.webp", 
        affinities: { nuke: 'weak', psy: 'resist' }
    },
    {
        name:"Orthrus", HP: 90, maxHP: 90, SP: 40,
        STATS:{STR: 12, MAG: 8, END: 9, AGI: 11, LUK: 5},
        ABILITY:["agilao", "assault_dive"], img:"./img/Orthrus.webp", 
        affinities: { ice: 'weak', fire: 'resist' }
    },
    {
        name:"Valkyrie", HP: 100, maxHP: 100, SP: 45,
        STATS:{STR: 14, MAG: 9, END: 10, AGI: 12, LUK: 8},
        ABILITY:["power_slash", "bufula"], img:"./img/Valkyrie.png", 
        affinities: { fire: 'weak', ice: 'resist', light: 'null' }
    },
    {
        name:"Rakshasa", HP: 110, maxHP: 110, SP: 30,
        STATS:{STR: 16, MAG: 5, END: 12, AGI: 10, LUK: 6},
        ABILITY:["megaton_raid"], img:"./img/Rakshasa.png", 
        affinities: { light: 'weak', phys: 'resist', dark: 'null' }
    },
    {
        name:"Queen Mab", HP: 130, maxHP: 130, SP: 90,
        STATS:{STR: 10, MAG: 18, END: 11, AGI: 15, LUK: 13},
        ABILITY:["agidyne"], img:"./img/Queen_Mab.png", 
        affinities: { nuke: 'weak', fire: 'null', elec: 'resist' }
    },
    {
        name:"Anubis", HP: 140, maxHP: 140, SP: 130,
        STATS:{STR: 11, MAG: 20, END: 12, AGI: 15, LUK: 16},
        ABILITY:["kougaon", "eigaon", "megido"], img:"./img/Anubis.webp", 
        affinities: { light: 'null', dark: 'null' }
    },
    {
        name:"Rangda", HP: 150, maxHP: 150, SP: 85,
        STATS:{STR: 12, MAG: 16, END: 13, AGI: 17, LUK: 11},
        ABILITY:["agidyne", "eigaon"], img:"./img/Rangda.webp", 
        affinities: { elec: 'weak', light: 'weak', phys: 'resist', fire: 'resist' }
    },
    {
        name:"Throne", HP: 160, maxHP: 160, SP: 100,
        STATS:{STR: 13, MAG: 19, END: 14, AGI: 13, LUK: 12},
        ABILITY:["agidyne", "kougaon"], img:"./img/Throne.webp", 
        affinities: { dark: 'weak', fire: 'null', light: 'null', nuke: 'resist' }
    },
    {
        name:"Barong", HP: 175, maxHP: 175, SP: 95,
        STATS:{STR: 18, MAG: 14, END: 15, AGI: 16, LUK: 10},
        ABILITY:["ziodyne", "megaton_raid"], img:"./img/Barong.png", 
        affinities: { psy: 'weak', elec: 'null', phys: 'resist' }
    },
    {
        name:"Abaddon", HP: 200, maxHP: 200, SP: 110,
        STATS:{STR: 20, MAG: 15, END: 18, AGI: 12, LUK: 8},
        ABILITY:["gigantic_fist", "megido"], img:"./img/Abaddon.webp", 
        affinities: { nuke: 'weak', phys: 'resist', fire: 'resist', dark: 'resist' }
    }
];
export const MINI_BOSSES = [
    {
        name:"Rampaging Oni", HP: 95, maxHP: 95, SP: 30,
        STATS:{STR: 9, MAG: 5, END: 10, AGI: 7, LUK: 5},
        ABILITY:["power_slash", "bash"], img:"./img/Oni.webp", 
        affinities: { phys: 'resist', elec: 'weak', wind: 'weak' },
        isMiniBoss: true,
        description: "A physical wall that forces you to use magic." 
    },
    {
        name:"Setanta", HP: 75, maxHP: 75, SP: 40,
        STATS:{STR: 8, MAG: 8, END: 7, AGI: 13, LUK: 10},
        ABILITY:["lunge", "bash"], img:"./img/Setanta.webp", 
        affinities: { psy: 'weak', wind: 'resist', fire: 'resist' },
        isMiniBoss: true,
        description: "A high-crit attacker that is hard to hit."
    },
    {
        name:"Incubus", HP: 80, maxHP: 80, SP: 70,
        STATS:{STR: 6, MAG: 9, END: 7, AGI: 11, LUK: 10},
        ABILITY:["agilao", "eiha"], img:"./img/Incubus.png", 
        affinities: { phys: 'weak', fire: 'resist', dark: 'resist', ice: 'weak' },
        isMiniBoss: true,
        description: "A glass cannon that hits hard with magic but is weak to physical attacks."
    },
    {
        name:"High Pixie", HP: 85, maxHP: 85, SP: 65,
        STATS:{STR: 6, MAG: 10, END: 7, AGI: 12, LUK: 10},
        ABILITY:["zionga", "dia"], img:"./img/High_Pixie.webp",
        affinities: { nuke: 'weak', fire: 'weak', wind: 'resist', elec: 'resist' },
        isMiniBoss: true,
        description: "A durable magic user that can heal itself."
    },
    {
        name:"Principality", HP: 100, maxHP: 100, SP: 80,
        STATS:{STR: 9, MAG: 9, END: 9, AGI: 9, LUK: 9},
        ABILITY:["kouga", "diarama"], img:"./img/Principality.webp", 
        affinities: { dark: 'weak', light: 'resist', wind: 'resist' },
        isMiniBoss: true,
        description: "A battle of attrition that tests your damage output against its healing."
    },
    {
        name:"Kaiwan", HP: 110, maxHP: 110, SP: 60,
        STATS:{STR: 10, MAG: 8, END: 11, AGI: 10, LUK: 8},
        ABILITY:["agilao", "psio"], img:"./img/Kaiwan.webp", 
        affinities: { phys: 'weak', psy: 'resist' },
        isMiniBoss: true,
        description: "An all-rounder with multiple resistances, forcing you to find an opening."
    },
    {
        name:"Naga", HP: 90, maxHP: 90, SP: 55,
        STATS:{STR: 9, MAG: 9, END: 8, AGI: 13, LUK: 7},
        ABILITY:["zionga", "lunge"], img:"./img/Naga.webp", 
        affinities: { wind: 'weak', elec: 'resist' },
        isMiniBoss: true,
        description: "An elemental specialist that punishes those with an electric weakness."
    }
];
export const BOSSES = [
    {
        name:"Cerberus", HP: 110, maxHP: 220, SP: 80,
        STATS:{STR: 13, MAG: 8, END: 15, AGI: 14, LUK: 7},
        ABILITY:["gigantic_fist", "power_slash"], img:"./img/Cerberus.png", 
        affinities: { ice: 'weak', fire: 'null' },
        isBoss: true,
        description: "A relentless physical attacker that tests your endurance and physical defense."
    },
    {
        name:"Girimehkala", HP: 150, maxHP: 250, SP: 120,
        STATS:{STR: 14, MAG: 14, END: 20, AGI: 8, LUK: 9},
        ABILITY:["megaton_raid", "eigaon"], img:"./img/Girimekhala.png", 
        affinities: { phys: 'null', dark: 'resist', light: 'weak', nuke: 'weak' },
        isBoss: true,
        description: "A defensive fortress that nullifies all physical attacks, forcing a magic-based strategy."
    },
    {
        name:"Belphegor", HP: 120, maxHP: 220, SP: 150,
        STATS:{STR: 10, MAG: 17, END: 14, AGI: 12, LUK: 11},
        ABILITY:["agidyne", "bufudyne"], img:"./img/Belphegor.png",
        affinities: { fire: 'resist', ice: 'null', elec: 'weak' },
        isBoss: true,
        description: "A powerful mage that barrages you with high-tier elemental spells."
    },
    {
        name:"Odin", HP: 160, maxHP: 260, SP: 140,
        STATS:{STR: 18, MAG: 18, END: 17, AGI: 16, LUK: 14},
        ABILITY:["ziodyne", "brave_blade"], img:"./img/Odin.png", 
        affinities: { wind: 'weak', elec: 'null', light: 'resist' },
        isBoss: true,
        description: "A balanced master of both physical and magical combat with no obvious flaws."
    },
    {
        name:"Trumpeter", HP: 180, maxHP: 280, SP: 200,
        STATS:{STR: 15, MAG: 18, END: 16, AGI: 15, LUK: 15},
        ABILITY:["megidola", "diarahan"], img:"./img/Trumpeter.webp", 
        affinities: { elec: 'weak', light: 'null', dark: 'null' },
        isBoss: true,
        description: "A strategic nightmare that can fully heal itself and uses Almighty damage that cannot be resisted."
    }
];
export const FINAL_BOSS = {
    name:"Satan", HP: 300, maxHP: 300, SP: 150,
    STATS:{STR: 15, MAG:15, END: 15, AGI: 10, LUK: 10},
    ABILITY:["agilao", "zionga", "bufudyne"], img:"./img/Satan.webp",
    affinities: { },
    isFinalBoss: true
};
export const FLOOR_ENCOUNTERS = [
    ["Pixie", "Slime"],
    ["Pixie", "Slime", "Goblin"],
    ["Goblin", "Mandrake", "Agathion"],
    ["Bicorn", "Angel", "Jack Frost"],
    ["Angel", "Bicorn", "Jack Frost"],
    ["Pyro Jack", "Nekomata"],
    ["Orthrus", "Valkyrie"],
    ["Leanan Sídhe", "Rakshasa"],
    ["Queen Mab", "Rangda"],
    ["Throne", "Barong", "Abaddon", "Anubis"]
];
export const FLOOR_BACKGROUNDS = [
    './bg-img/level1.jpg', 
    './bg-img/level2.jpg', 
    './bg-img/level3.webp', 
    './bg-img/level4.jpg', 
    './bg-img/level5.webp', 
];
export const SKILLS = {
    lunge: { name: "Lunge", cost: { hp: 5 }, power: 13, type: "physical", element: "phys", evolves_to: "assault_dive" },
    bash:   { name: "Bash", cost: { hp: 8 }, power: 10, type: "physical", element: "phys", evolves_to: "power_slash" },
    assault_dive: { name: "Assault Dive", cost: { hp: 14 }, power: 22, type: "physical", element: "phys", evolves_to: "megaton_raid" },
    power_slash:  { name: "Power Slash", cost: { hp: 18 }, power: 30, type: "physical", element: "phys", evolves_to: "gigantic_fist" },
    megaton_raid:  { name: "Megaton Raid", cost: { hp: 20 }, power: 40, type: "physical", element: "phys", evolves_to: "gods_hand" },
    gigantic_fist: { name: "Gigantic Fist", cost: { hp: 25 }, power: 45, type: "physical", element: "phys", evolves_to: "brave_blade" },
    gods_hand:    { name: "God's Hand", cost: { hp: 30 }, power: 80, type: "physical", element: "phys" },
    brave_blade:  { name: "Brave Blade", cost: { hp: 32 }, power: 85, type: "physical", element: "phys" },
    primal_force: { name: "Primal Force", cost: { hp: 35 }, power: 100, type: "physical", element: "phys" },
    
    agi:    { name: "Agi", cost: { sp: 4 }, power: 12, type: "magic", element: "fire", evolves_to: "agilao" },
    agilao: { name: "Agilao", cost: { sp: 8 }, power: 25, type: "magic", element: "fire", evolves_to: "agidyne" },
    agidyne:{ name: "Agidyne", cost: { sp: 16 }, power: 50, type: "magic", element: "fire", evolves_to: "inferno" },
    inferno:{ name: "Inferno", cost: { sp: 28 }, power: 90, type: "magic", element: "fire" },

    bufu:   { name: "Bufu", cost: { sp: 4 }, power: 12, type: "magic", element: "ice", evolves_to: "bufula" },
    bufula: { name: "Bufula", cost: { sp: 8 }, power: 25, type: "magic", element: "ice", evolves_to: "bufudyne" },
    bufudyne:{ name: "Bufudyne", cost: { sp: 16 }, power: 50, type: "magic", element: "ice", evolves_to: "diamond_dust" },
    diamond_dust: { name: "Diamond Dust", cost: { sp: 28 }, power: 90, type: "magic", element: "ice" },

    zio:    { name: "Zio", cost: { sp: 4 }, power: 12, type: "magic", element: "elec", evolves_to: "zionga" },
    zionga: { name: "Zionga", cost: { sp: 8 }, power: 25, type: "magic", element: "elec", evolves_to: "ziodyne" },
    ziodyne:{ name: "Ziodyne", cost: { sp: 16 }, power: 50, type: "magic", element: "elec", evolves_to: "thunder_reign" },
    thunder_reign: { name: "Thunder Reign", cost: { sp: 28 }, power: 90, type: "magic", element: "elec" },

    garu:   { name: "Garu", cost: { sp: 4 }, power: 12, type: "magic", element: "wind", evolves_to: "garula" },
    garula: { name: "Garula", cost: { sp: 8 }, power: 25, type: "magic", element: "wind", evolves_to: "garudyne" },
    garudyne:{ name: "Garudyne", cost: { sp: 16 }, power: 50, type: "magic", element: "wind", evolves_to: "panta_rhei" },
    panta_rhei: { name: "Panta Rhei", cost: { sp: 28 }, power: 90, type: "magic", element: "wind" },

    psi:    { name: "Psi", cost: { sp: 5 }, power: 14, type: "magic", element: "psy", evolves_to: "psio" },
    psio:   { name: "Psio", cost: { sp: 10 }, power: 28, type: "magic", element: "psy", evolves_to: "psiodyne" },
    psiodyne:{ name: "Psiodyne", cost: { sp: 18 }, power: 55, type: "magic", element: "psy" },

    frei:    { name: "Frei", cost: { sp: 5 }, power: 14, type: "magic", element: "nuke", evolves_to: "freila" },
    freila:  { name: "Freila", cost: { sp: 10 }, power: 28, type: "magic", element: "nuke", evolves_to: "freidyne" },
    freidyne:{ name: "Freidyne", cost: { sp: 18 }, power: 55, type: "magic", element: "nuke" },

    kouha:    { name: "Kouha", cost: { sp: 5 }, power: 14, type: "magic", element: "light", evolves_to: "kouga" },
    kouga:    { name: "Kouga", cost: { sp: 10 }, power: 28, type: "magic", element: "light", evolves_to: "kougaon" },
    kougaon:  { name: "Kougaon", cost: { sp: 18 }, power: 55, type: "magic", element: "light" },

    eiha:    { name: "Eiha", cost: { sp: 5 }, power: 14, type: "magic", element: "dark", evolves_to: "eigaon" },
    eigaon:  { name: "Eigaon", cost: { sp: 10 }, power: 28, type: "magic", element: "dark", evolves_to: "eigadyne" },
    eigadyne:{ name: "Eigadyne", cost: { sp: 18 }, power: 55, type: "magic", element: "dark" },

    megido:    { name: "Megido", cost: { sp: 15 }, power: 35, type: "magic", element: "almighty", evolves_to: "megidola" },
    megidola:  { name: "Megidola", cost: { sp: 24 }, power: 55, type: "magic", element: "almighty", evolves_to: "megidolaon" },
    megidolaon:{ name: "Megidolaon", cost: { sp: 38 }, power: 80, type: "magic", element: "almighty" },
    morning_star: { name: "Morning Star", cost: { sp: 54 }, power: 120, type: "magic", element: "almighty" },
    
    dia:      { name: "Dia", cost: { sp: 6 }, power: 30, type: "healing", element: "heal", evolves_to: "diarama" },
    diarama:  { name: "Diarama", cost: { sp: 12 }, power: 70, type: "healing", element: "heal", evolves_to: "diarahan" },
    diarahan: { name: "Diarahan", cost: { sp: 24 }, power: 999, type: "healing", element: "heal" },
};
export const PASSIVE_SKILLS = {
    fire_boost: { name: "Fire Boost", description: "Increases Fire damage by 25%.", type: "damage_boost", element: "fire", multiplier: 1.25 },
    ice_boost:  { name: "Ice Boost", description: "Increases Ice damage by 25%.", type: "damage_boost", element: "ice", multiplier: 1.25 },
    elec_boost: { name: "Elec Boost", description: "Increases Elec damage by 25%.", type: "damage_boost", element: "elec", multiplier: 1.25 },
    wind_boost: { name: "Wind Boost", description: "Increases Wind damage by 25%.", type: "damage_boost", element: "wind", multiplier: 1.25 },
    resist_phys: { name: "Resist Physical", description: "Reduces damage taken from Physical attacks.", type: "resistance", element: "phys", affinity: "resist" },
    counter:     { name: "Counter", description: "15% chance to repel Physical attacks with light damage.", type: "counter", chance: 0.15, power: 10 },
    invigorate_1: { name: "Invigorate 1", description: "Restore 3 SP at the start of your turn.", type: "regen", resource: "SP", amount: 3 },
    regenerate_1: { name: "Regenerate 1", description: "Restore 5% of max HP at the start of your turn.", type: "regen", resource: "HP", amount: 0.05 },
    apt_pupil: { name: "Apt Pupil", description: "Doubles your critical hit rate.", type: "crit_boost", multiplier: 2.0 },
};
export const CARDS = [
    {
        name: "0. The Fool",
        description: "+1 to all stats.",
        apply: function(persona) {
            persona.STATS.STR += 1;
            persona.STATS.MAG += 1;
            persona.STATS.END += 1;
            persona.STATS.AGI += 1;
            persona.STATS.LUK += 1;
            return "The Fool grants insight. All stats increased by 1.";
        }
    },
    {
        name: "I. The Magician",
        description: "Increases Magic by 2.",
        apply: function(persona) { persona.STATS.MAG += 2; return "The Magician enhances arcane power. MAG increased by 2."}
    },
    {
        name: "IV. The Emperor",
        description: "Increases Endurance by 2.",
        apply: function(persona) { persona.STATS.END += 2; return "The Emperor bolsters resilience. END increased by 2."}
    },
    {
        name: "VI. The Lovers",
        description: "Increases Agility and Luck by 1.",
        apply: function(persona) {
            persona.STATS.AGI += 1;
            persona.STATS.LUK += 1;
            return "The Lovers bless you with grace. AGI and LUK increased by 1.";
        }
    },
    {
        name: "VII. The Chariot",
        description: "Increases Strength by 2.",
        apply: function(persona) { persona.STATS.STR += 2; return "The Chariot drives you forward. STR increased by 2."}
    },
    {
        name: "VIII. Strength",
        description: "Increases Strength and Endurance by 1.",
        apply: function(persona) {
            persona.STATS.STR += 1;
            persona.STATS.END += 1;
            return "Strength empowers your body. STR and END increased by 1.";
        }
    },
    {
        name: "IX. The Hermit",
        description: "Increases Luck by 3.",
        apply: function(persona) { persona.STATS.LUK += 3; return "The Hermit guides your fate. LUK increased by 3."}
    },
    {
        name: "XI. Justice",
        description: "Increases Strength and Magic by 1.",
        apply: function(persona) {
            persona.STATS.STR += 1;
            persona.STATS.MAG += 1;
            return "Justice brings balance to your power. STR and MAG increased by 1.";
        }
    },
    {
        name: "XII. The Hanged Man",
        description: "Increases Agility by 3.",
        apply: function(persona) { persona.STATS.AGI += 3; return "The Hanged Man grants a new perspective. AGI increased by 3."}
    },
    {
        name: "XV. The Devil",
        description: "Increases Strength by 4.",
        apply: function(persona) { persona.STATS.STR += 4; return "The Devil tempts with raw power. STR increased by 4."}
    },
    {
        name: "XVI. The Tower",
        description: "Increases Endurance by 4.",
        apply: function(persona) { persona.STATS.END += 4; return "The Tower brings unforeseen fortitude. END increased by 4."}
    },
    {
        name: "XVIII. The Moon",
        description: "Increases Magic and Luck by 2.",
        apply: function(persona) {
            persona.STATS.MAG += 2;
            persona.STATS.LUK += 2;
            return "The Moon's illusion empowers you. MAG and LUK increased by 2.";
        }
    },
    {
        name: "XXI. The World",
        description: "+2 to Strength, Magic, and Endurance.",
        apply: function(persona) {
            persona.STATS.STR += 2;
            persona.STATS.MAG += 2;
            persona.STATS.END += 2;
            return "The World expands your potential. STR, MAG, and END increased by 2.";
        }
    },
    {
        name: "II. The High Priestess",
        description: "+5 to Max SP and restore 5 SP.",
        apply: function(persona) {
            persona.maxSP += 5;
            persona.SP += 5;
            return "The High Priestess deepens your focus. Max SP +5.";
        }
    },
    {
        name: "III. The Empress",
        description: "+10 to Max HP and heal 10 HP.",
        apply: function(persona) {
            persona.maxHP += 10;
            persona.HP += 10;
            return "The Empress nurtures your life force. Max HP +10." ;
        }
    },
    {
        name: "V. The Hierophant",
        description: "Restore 50% of your Max SP.",
        apply: function(persona) {
            const spRestore = Math.floor(persona.maxSP * 0.50);
            persona.SP = Math.min(persona.maxSP, persona.SP + spRestore);
            return `The Hierophant's wisdom restores ${spRestore} SP.`;
        }
    },
    {
        name: "XIII. Death",
        description: "Fully restore HP and SP.",
        apply: function(persona) {
            persona.HP = persona.maxHP;
            persona.SP = persona.maxSP;
            return "Death brings rebirth. HP and SP fully restored.";
        }
    },
    {
        name: "XIV. Temperance",
        description: "Heal 50% of your Max HP.",
        apply: function(persona) {
            const healAmount = Math.floor(persona.maxHP * 0.50);
            persona.HP = Math.min(persona.maxHP, persona.HP + healAmount);
            return `Temperance's grace heals you for ${healAmount} HP.`;
        }
    },
    {
        name: "XVII. The Star",
        description: "+5 Max HP and +5 Max SP.",
        apply: function(persona) {
            persona.maxHP += 5;
            persona.maxSP += 5;
            persona.HP += 5;
            persona.SP += 5;
            return "The Star's hope shines upon you. Max HP and SP +5.";
        }
    },
    {
        name: "XX. Judgement",
        description: "Increase Max HP and Max SP by 10%.",
        apply: function(persona) {
            const hpBonus = Math.floor(persona.maxHP * 0.10);
            const spBonus = Math.floor(persona.maxSP * 0.10);
            persona.maxHP += hpBonus;
            persona.maxSP += spBonus;
            persona.HP += hpBonus;
            persona.SP += spBonus;
            return "Judgement awakens new power. Max HP and SP increased by 10%.";
        }
    },
    {
        name: "X. Wheel of Fortune",
        description: "+3 to a random stat.",
        apply: function(persona) {
            const stats = ["STR", "MAG", "END", "AGI", "LUK"];
            const randomStat = stats[Math.floor(Math.random() * stats.length)];
            persona.STATS[randomStat] += 3;
            return `The Wheel of Fortune turns! ${randomStat} increased by 3.`;
        }
    },
    {
        name: "XIX. The Sun",
        description: "+1 to all stats and restore 50% of HP & SP.",
        apply: function(persona) {
            persona.STATS.STR += 1;
            persona.STATS.MAG += 1;
            persona.STATS.END += 1;
            persona.STATS.AGI += 1;
            persona.STATS.LUK += 1;
            const healAmount = Math.floor(persona.maxHP * 0.50);
            const spRestore = Math.floor(persona.maxSP * 0.50);
            persona.HP = Math.min(persona.maxHP, persona.HP + healAmount);
            persona.SP = Math.min(persona.maxSP, persona.SP + spRestore);
            return "The Sun grants a radiant blessing. All stats +1, HP & SP restored.";
        }
    },
];

export const SOUNDS = {
    hit: new Audio('./sfx/hit.mp3'),
    crit: new Audio('./sfx/crit.mp3'),
    heal: new Audio('./sfx/heal.mp3'),
    select: new Audio('./sfx/select.mp3'),
};
Object.values(SOUNDS).forEach(sound => sound.volume = 0.2);