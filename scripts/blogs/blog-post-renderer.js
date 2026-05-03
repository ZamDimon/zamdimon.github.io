// 1. MathJax Configuration
window.MathJax = {
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']],
        processEscapes: true
    },
    chtml: {
        matchFontHeight: true,
        displayAlign: 'center'
    },
    startup: {
        typeset: false // We will trigger it manually
    }
};

// 2. Icon Dictionary
const ALERTS = {
    'NOTE': {
        icon: '<svg viewBox="0 0 16 16"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>',
        defaultTitle: 'Note'
    },
    'WARNING': {
        icon: '<svg viewBox="0 0 16 16"><path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.39A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.563ZM8 2.81 2.353 13.5h11.294ZM7.25 6.25a.75.75 0 0 1 1.5 0v3.5a.75.75 0 0 1-1.5 0Zm.75 7.25a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>',
        defaultTitle: 'Warning'
    },
    'DEFINITION': {
        icon: '<svg viewBox="0 0 16 16"><path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0 1 11.003 1h4.247a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.618l-.666.621a.25.25 0 0 1-.336 0l-.666-.621a2.25 2.25 0 0 0-1.591-.618H.75a.75.75 0 0 1-.75-.75Zm7.25 11.455c.677.382 1.353.645 2.25.645h4V2.5h-4.247a2.25 2.25 0 0 0-2.25 2.25v8.455ZM1.5 13.5h4.253c.897 0 1.573-.263 2.247-.645V4.75a2.25 2.25 0 0 0-2.25-2.25H1.5Z"></path></svg>',
        defaultTitle: 'Definition'
    },
    'REMARK': {
        icon: '<svg viewBox="0 0 16 16"><path d="M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 0 1-1.484.211c-.04-.282-.163-.547-.37-.847a8.456 8.456 0 0 0-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.751.751 0 0 1-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75ZM5.75 12h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5ZM6 15.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z"></path></svg>',
        defaultTitle: 'Remark'
    }
};

// 3. Render Pipeline
document.addEventListener('DOMContentLoaded', () => {
    const sourceEl = document.getElementById('markdown-source');
    const mainContent = document.getElementById('blog-content');
    
    if (!sourceEl || !mainContent) return;

    // Step A: Parse markdown securely
    mainContent.innerHTML = marked.parse(sourceEl.value);

    // Step B: Format blockquotes (DOM approach, no broken HTML regex)
    const blockquotes = mainContent.querySelectorAll('blockquote');
    
    blockquotes.forEach(bq => {
        // Look at the first paragraph inside the blockquote
        const firstParagraph = bq.querySelector('p');
        if (!firstParagraph) return;

        // Check if the text content starts with our special tags
        const textContent = firstParagraph.textContent;
        const match = textContent.match(/^\[!(NOTE|WARNING|DEFINITION|REMARK)\](.*)/i);

        if (match) {
            const type = match[1].toUpperCase();
            const customTitleText = match[2].trim();
            const config = ALERTS[type];

            // Change the blockquote into a styled div
            const alertBox = document.createElement('div');
            alertBox.className = `markdown-alert markdown-alert-${type.toLowerCase()}`;

            // Create the beautiful title header
            const titleEl = document.createElement('div');
            titleEl.className = 'markdown-alert-title';
            
            let finalTitle = config.defaultTitle;
            if (customTitleText) {
                finalTitle = `${config.defaultTitle}: ${customTitleText}`;
            }
            
            titleEl.innerHTML = `${config.icon} <span>${finalTitle}</span>`;
            alertBox.appendChild(titleEl);

            // Strip the "[!TAG] Custom Title" part from the original HTML safely
            // We use a regex on innerHTML just to remove the prefix tag, up to the first line break.
            firstParagraph.innerHTML = firstParagraph.innerHTML.replace(/^\[!(NOTE|WARNING|DEFINITION|REMARK)\].*?(<br>|\n)?/i, '');

            // Move all the contents from the blockquote into our new alert box
            while (bq.firstChild) {
                alertBox.appendChild(bq.firstChild);
            }

            // Replace the blockquote in the DOM
            bq.replaceWith(alertBox);
        }
    });

    // Step C: Trigger MathJax and Unhide
    function finalizeRender() {
        if (!window.MathJax || typeof window.MathJax.typesetPromise !== 'function') {
            setTimeout(finalizeRender, 50);
            return;
        }

        window.MathJax.typesetPromise([mainContent]).then(() => {
            // Once everything is parsed and beautiful, reveal it smoothly
            mainContent.style.visibility = 'visible';
            mainContent.style.opacity = '1';
            mainContent.style.transition = 'opacity 0.3s ease-in-out';
        }).catch((err) => {
            console.error('MathJax formatting error: ', err);
            mainContent.style.visibility = 'visible';
            mainContent.style.opacity = '1';
        });
    }

    finalizeRender();
});