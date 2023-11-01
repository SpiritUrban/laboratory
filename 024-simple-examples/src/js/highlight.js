// highlight.js

document.addEventListener('DOMContentLoaded', function() {
    const keywords = ['var', 'function', 'alert'];

    const codeElements = document.querySelectorAll('pre');

    codeElements.forEach((codeElement)=>{

    let codeContent = codeElement.innerHTML;

    keywords.forEach(keyword => {
        const regex = new RegExp(`\\b${keyword}\\b`, 'g');
        codeContent = codeContent.replace(regex, `<span class="keyword">${keyword}</span>`);
    });

    // Подсветка строк
    codeContent = codeContent.replace(/('.*?')/g, '<span class="string">$1</span>');

    codeElement.innerHTML = codeContent;
});

});
