//! This script is used to spawn the achievements table in the achievements page

import { Parser } from "./parser.js";
import { defaultAchievements } from "./default.js";

const parser = new Parser()

// Defining achievements table
const achievementsTableId = 'achievements-table';
const achievementsTable = document.getElementById(achievementsTableId);

// Defining achievements table for mobile devices
const achievementsMobileTableId = 'achievements-table-mobile';
const achievementsMobileTable = document.getElementById(achievementsMobileTableId);

const achievements = await fetch('http://localhost:2401/achievements', {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    method: 'GET'
}).then(response => response.json()).then(result => {
    return parser.parseAchievements(result.data)
}).catch(error => {
    console.log(error)
    return defaultAchievements
})

// Spawning achievements
for (const achievement of achievements) {
    achievement.spawnFrom(achievementsTable, achievements.indexOf(achievement));
}
for (const achievement of achievements) {
    achievement.spawnMobileFrom(achievementsMobileTable);
}