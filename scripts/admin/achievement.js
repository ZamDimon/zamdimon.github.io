//! This file contains the Achievement spawning implementation.

export function spawnFrom(achievement, id, htmlElement) {
    const achievementTr = document.createElement('tr');

    // Adding a name and a link to the achievement
    const nameTh = document.createElement('th');
    nameTh.className = 'text-center';
    const nameUrlElement = document.createElement('a');
    nameUrlElement.href = achievement.url;
    nameUrlElement.className = 'link-info';
    nameUrlElement.textContent = achievement.name;
    nameTh.appendChild(nameUrlElement);
    achievementTr.appendChild(nameTh);
    
    // Adding a year
    const yearTd = document.createElement('td');
    yearTd.className = 'text-center'
    yearTd.textContent = achievement.year;
    achievementTr.appendChild(yearTd);
    
    // Adding a subject
    const subjectTd = document.createElement('td');
    subjectTd.className = 'text-center'
    subjectTd.textContent = achievement.subject;
    achievementTr.appendChild(subjectTd);
    
    // Adding a level
    const levelTd = document.createElement('td');
    levelTd.className = 'text-center'
    levelTd.textContent = achievement.level.title;
    achievementTr.appendChild(levelTd);
    
    // Adding a result
    const resultTd = document.createElement('td');
    resultTd.className = 'text-center'
    resultTd.textContent = achievement.result.description;
    achievementTr.appendChild(resultTd);

    // Adding a remove button
    const removeBtnTd = document.createElement('td');
    const removeBtn = document.createElement('button');
    removeBtn.className = 'btn btn-sm btn-danger'
    removeBtn.type = 'button'
    removeBtn.textContent = 'Delete'

    removeBtn.onclick = () => {
        fetch(`http://localhost:2401/achievements/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'DELETE'
        }).then(response => {
            if (response.ok) {
                achievementTr.remove();
            }
        }).catch(error => {
            alert(error)
        })
    }

    removeBtnTd.appendChild(removeBtn);
    achievementTr.appendChild(removeBtnTd);

    htmlElement.appendChild(achievementTr);
}

