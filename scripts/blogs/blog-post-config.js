// MathJax configuration
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
        // Prevent MathJax from running until we manually call it
        typeset: false 
    }
};