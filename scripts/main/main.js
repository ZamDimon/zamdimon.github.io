import { Skill } from './skills.js';

// List of skills to display
const skills = [
    new Skill({
        name: 'Golang',
        icon: 'golang.svg',
        description: '<b>1.5 years</b> of commerical experience as a Backend developer at <i>Distributed Lab</i>.',
    }),
    new Skill({
        name: 'PostgreSQL', 
        icon: 'postgres.svg', 
        description: 'Primary database I used as a backend developer at <i>Distributed Lab</i>.'
    }),
    new Skill({
        name: 'Python', 
        icon: 'python.svg', 
        description: '<b>2 years</b> of experience for AI/ML researches and mathematical computations/analysis.'
    }),
    new Skill({
        name: 'LaTeX', 
        icon: 'latex.svg', 
        description: 'Constantly use for homework assignments and writing research papers.'
    }),
    new Skill({
        name: 'Wolfram Mathematica', 
        icon: 'wolfram.svg', 
        description: '<b>4 years</b> of experience while preparing for Olympiads, conducting the research and creating projects.'
    }),
    new Skill({
        name: 'C#', 
        icon: 'cs.svg', 
        description: '<b>6 years</b> of <b>uncommerical</b> experience (as a hobby) in <i>Unity</i>, <i>Windows Forms</i> and <i>XNA</i> using this language.'
    }),
    new Skill({
        name: 'C++', 
        icon: 'cpp.svg', 
        description: '<b>4 years</b> of using for competitive programming competitions, learned <i>OpenGL</i> on C++.'
    }),
    new Skill({
        name: 'HTML and CSS', 
        icon: 'html.svg', 
        description: 'Used it just for creating this website, but I\'m looking forward to exploring it further. &#128579'
    }),
    new Skill({
        name: 'Golang', 
        icon: 'golang.svg', 
        description: '<b>1.5 years</b> of commerical experience as a Backend developer at <i>Distributed Lab</i>.'
    }),
    new Skill({
        name: 'Docker', 
        icon: 'docker.svg', 
        description: 'Used for local setting up web projects.'
    }),
    new Skill({
        name: 'Unity', 
        icon: 'unity.svg', 
        description: '<b>6 years</b> of uncommercial experience. Made numerous game projects, the most substantial one is <a href="https://www.youtube.com/watch?v=A6j2XfqPh4k&feature=youtu.be" id="link-orange">Inside the dark</a>.'
    }),
    new Skill({
        name: 'XNA', 
        icon: 'xna.svg', 
        description: 'Used for small games and computer modelling projects.'
    }),
]

// Attaching skills to the page
const skillsDivId = 'skills-list';
var skillsDiv = document.getElementById(skillsDivId);

for (const skill of skills) {
    skill.spawnFrom(skillsDiv);
}