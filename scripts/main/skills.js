//! Skills

export class Skill {
    constructor(properties) {
        const{
            _name, _icon, _description
        } = properties;

        Object.assign(this, properties)
    }

    /** Spawns the HTML element with the specified skill
     * @param skill(Skill) - skill to spawn
     * @returns HTMLDivElement - skill card
     * */
    spawnFrom(htmlElement) {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card color-border';

        // Spawn an image
        const skillIcon = document.createElement('img');
        skillIcon.src = `images/icons/skills/${this.icon}`;
        skillCard.appendChild(skillIcon);

        // Spawn a header
        const skillHeader = document.createElement('p');
        skillHeader.className = 'skill-card-header';
        skillHeader.innerHTML = this.name;
        skillCard.appendChild(skillHeader);

        // Spawn a description
        const skillDescription = document.createElement('p');
        skillDescription.className = 'skill-card-description';
        skillDescription.innerHTML = this.description;
        skillCard.appendChild(skillDescription);

        htmlElement.appendChild(skillCard);
    }
}