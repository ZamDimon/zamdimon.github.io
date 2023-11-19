//! This file contains the Achievement class implementation.

export class Achievement {
    constructor(properties) {
        const{
            _name, _year, _subject, _level, _result, _url
        } = properties;

        Object.assign(this, properties)
    }

    /** Spawns the HTML table row element with the specified achievement
     * @param achievement(Achievement) - achievement to spawn
     * @returns HTMLDivElement - achievement row
     * */
    spawnFrom(htmlElement) {
        const achievementTr = document.createElement('tr');
    
        // Adding a name and a link to the achievement
        const nameTd = document.createElement('td');
        const nameUrlElement = document.createElement('a');
        nameUrlElement.href = this.url;
        nameUrlElement.id = 'link-blue';
        nameUrlElement.textContent = this.name;
        nameTd.appendChild(nameUrlElement);
        achievementTr.appendChild(nameTd);
        
        // Adding a year
        const yearTd = document.createElement('td');
        yearTd.textContent = this.year;
        achievementTr.appendChild(yearTd);
        
        // Adding a subject
        const subjectTd = document.createElement('td');
        subjectTd.textContent = this.subject;
        achievementTr.appendChild(subjectTd);
        
        // Adding a level
        const levelTd = document.createElement('td');
        levelTd.textContent = this.level.title;
        achievementTr.appendChild(levelTd);
        
        // Adding a result
        const resultTd = document.createElement('td');
        resultTd.className = 'medal-title';
        resultTd.textContent = this.result.description;
        achievementTr.appendChild(resultTd);
    
        // Adding a medal icon
        const medalIconTd = document.createElement('td');
        medalIconTd.className = this.result.className;
        const medalIcon = document.createElement('i');
        medalIcon.className = `em ${this.result.medalIcon}`;
        medalIcon.setAttribute('aria-role', 'presentation');
        medalIcon.setAttribute('aria-label', 'FIRST PLACE MEDAL');
        medalIconTd.appendChild(medalIcon);
        achievementTr.appendChild(medalIconTd);
    
        htmlElement.appendChild(achievementTr);
    }
}