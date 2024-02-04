//! This script is used to spawn the achievements table in the achievements page

import { Parser } from "../achievements/parser.js";
import { spawnFrom } from "./achievement.js";
import { attachAddButtonCallback } from "./add.js";

const parser = new Parser()

// Defining achievements table
const achievementsTableId = 'achievements-table-tbody';
const achievementsTable = document.getElementById(achievementsTableId);

const { achievements, ids } = await fetch('http://localhost:2401/achievements', {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    method: 'GET'
}).then(response => response.json()).then(result => {
    return { achievements: parser.parseAchievements(result.data), ids: result.data.map(entry => entry.id) }
}).catch(error => {
    alert(error)
})

achievements.forEach((achievement, index) => spawnFrom(achievement, ids[index], achievementsTable))

// Attaching an event listener to the "Add" button
attachAddButtonCallback()