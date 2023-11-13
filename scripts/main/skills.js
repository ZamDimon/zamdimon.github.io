function Skill(name, icon, description) {
    this.name = name;
    this.icon = icon;
    this.description = description;
    return;
}

/** Spawns the HTML element with the specified skill
  * @param skill(Skill) - skill to spawn
  * @returns HTMLDivElement - skill card
  * */
function spawnSkillHTML(skill) {
    // Unpack the skill
    var skillCard = document.createElement('div');
    skillCard.className = 'skill-card color-border';

    // Spawn an image
    var skillIcon = document.createElement('img');
    skillIcon.src = `images/icons/skills/${skill.icon}`;
    skillCard.appendChild(skillIcon);

    // Spawn a header
    var skillHeader = document.createElement('p');
    skillHeader.className = 'skill-card-header';
    skillHeader.innerHTML = skill.name;
    skillCard.appendChild(skillHeader);

    // Spawn a description
    var skillDescription = document.createElement('p');
    skillDescription.className = 'skill-card-description';
    skillDescription.innerHTML = skill.description;
    skillCard.appendChild(skillDescription);

    return skillCard;
}

// List of skills to display
const skills = [
    new Skill(
        'Golang', 
        'golang.svg', 
        '<b>1.5 years</b> of commerical experience as a Backend developer at <i>Distributed Lab</i>.'
    ),
    new Skill(
        'PostgreSQL', 
        'postgres.svg', 
        'Primary database I used as a backend developer at <i>Distributed Lab</i>.'
    ),
    new Skill(
        'Python', 
        'python.svg', 
        '<b>2 years</b> of experience for AI/ML researches and mathematical computations/analysis.'
    ),
    new Skill(
        'LaTeX', 
        'latex.svg', 
        'Constantly use for homework assignments and writing research papers.'
    ),
    new Skill(
        'Wolfram Mathematica', 
        'wolfram.svg', 
        '<b>4 years</b> of experience while preparing for Olympiads, conducting the research and creating projects.'
    ),
    new Skill(
        'C#', 
        'cs.svg', 
        '<b>6 years</b> of <b>uncommerical</b> experience (as a hobby) in <i>Unity</i>, <i>Windows Forms</i> and <i>XNA</i> using this language.'
    ),
    new Skill(
        'C++', 
        'cpp.svg', 
        '<b>4 years</b> of using for competitive programming competitions, learned <i>OpenGL</i> on C++.'
    ),
    new Skill(
        'HTML and CSS', 
        'html.svg', 
        'Used it just for creating this website, but I\'m looking forward to exploring it further. &#128579'
    ),
    new Skill(
        'Golang', 
        'golang.svg', 
        '<b>1.5 years</b> of commerical experience as a Backend developer at <i>Distributed Lab</i>.'
    ),
    new Skill(
        'Docker', 
        'docker.svg', 
        'Used for local setting up web projects.'
    ),
    new Skill(
        'Unity', 
        'unity.svg', 
        '<b>6 years</b> of uncommercial experience. Made numerous game projects, the most substantial one is <a href="https://www.youtube.com/watch?v=A6j2XfqPh4k&feature=youtu.be" id="link-orange">Inside the dark</a>.'
    ),
    new Skill(
        'XNA', 
        'xna.svg', 
        'Used for small games and computer modelling projects.'
    ),
]

const skillsDivId = 'skills-list';
var skillsDiv = document.getElementById(skillsDivId);

for (const skill of skills) {
    skillsDiv.appendChild(spawnSkillHTML(skill));
}