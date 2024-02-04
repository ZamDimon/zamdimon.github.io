
import { Achievement } from "../achievements/achievement.js";
import { AchievementLevel } from "../achievements/level.js";
import { AchievementResult } from "../achievements/result.js";
import { spawnFrom } from "./achievement.js";

export function attachAddButtonCallback() {
    // Finding an "Add" button
    const addBtnId = 'add-btn';
    const addBtn = document.getElementById(addBtnId);

    // Attaching an event listener to the "Add" button
    addBtn.onclick = () => {
        // Finding the form elements
        const nameInputId = 'inputName';
        const nameInput = document.getElementById(nameInputId);

        const urlInputId = 'inputUrl';
        const urlInput = document.getElementById(urlInputId);

        const yearInputId = 'inputYear';
        const yearInput = document.getElementById(yearInputId);

        const subjectInputId = 'inputSubject';
        const subjectInput = document.getElementById(subjectInputId);

        const level = parseInt(document.querySelector('input[name="gridRadiosLevel"]:checked').value)
        const place = parseInt(document.querySelector('input[name="gridRadiosResult"]:checked').value)

        const resultInputId = 'inputResult';
        const resultInput = document.getElementById(resultInputId);

        // Finding the form element values
        const name = nameInput.value
        const url = urlInput.value
        const year = parseInt(yearInput.value)
        const subject = subjectInput.value
        const result = resultInput.value

        // Creating a new achievement
        const achievement = {
            id: "1",
            type: "achievement",
            attributes: {
                name: name,
                url: url,
                year: year,
                subject: subject,
                level: level,
                place: place,
                result: result
            },
        }

        // Sending a POST request to the server
        fetch('http://localhost:2401/achievements', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                data: [achievement]
            })
        }).then(response => response.json())
        .then(apiResult => {
            // Finding the achievements table
            const achievementsTableId = 'achievements-table-tbody';
            const achievementsTable = document.getElementById(achievementsTableId);

            // Spawning the achievement
            const createdId = parseInt(apiResult[0].id)
            spawnFrom(new Achievement({
                name: name,
                year: year,
                subject: subject,
                level: AchievementLevel.fromInt(level),
                result: AchievementResult.fromInt(place).withDescription(result),
                url: url,
            }), createdId, achievementsTable);
        }).catch(error => {
            console.log(error)
        })
    }
}