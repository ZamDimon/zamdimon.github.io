
// Adding event listeners to contacts buttons
const contactsDictionary = {
    'contact-linkedin': 'https://www.linkedin.com/in/zamdimon/',
    'contact-github': 'https://github.com/ZamDimon',
    'contact-google-scholar': 'https://scholar.google.com/citations?user=WL-8aoAAAAAJ&hl=en',
    'contact-x': 'https://x.com/ZamDmytro',
}

for (const [objectId, contactUrl] of Object.entries(contactsDictionary)) {
    document
        .getElementById(objectId)
        .addEventListener('click', function (_event) {
            window.open(contactUrl);
        });
}
