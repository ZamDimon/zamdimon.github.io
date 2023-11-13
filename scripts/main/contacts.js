
// Adding event listeners to contacts buttons
const contactsDictionary = {
    'contact-gmail': 'mailto:zamdmytro@gmail.com',
    'contact-linkedin': 'https://www.linkedin.com/in/zamdimon/',
    'contact-github': 'https://github.com/ZamDimon',
    'contact-telegram': 'https://t.me/ZamDimon',
}

for (const [objectId, contactUrl] of Object.entries(contactsDictionary)) {
    document
        .getElementById(objectId)
        .addEventListener('click', function (_event) {
            window.open(contactUrl);
        });
}

document.getElementsByClassName('description-resume-box')[0].
    addEventListener('click', function(_event) {
        window.open("https://github.com/ZamDimon/ZamDimon/blob/main/resume.pdf");
    })