// script.js

let pages = [];
let currentPage = null;

const pageListElement = document.getElementById('page-list');
const newPageBtn = document.getElementById('new-page-btn');
const editorElement = document.getElementById('editor');
const boldBtn = document.getElementById('bold-btn');
const italicBtn = document.getElementById('italic-btn');
const linkBtn = document.getElementById('link-btn');

newPageBtn.addEventListener('click', newPage);
boldBtn.addEventListener('click', bold);
italicBtn.addEventListener('click', italic);
linkBtn.addEventListener('click', link);

function newPage() {
    const newPage = {
        title: `Page ${pages.length + 1}`,
        content: ''
    };
    pages.push(newPage);
    renderPageList();
    currentPage = newPage;
    renderEditor();
}

function renderPageList() {
    pageListElement.innerHTML = '';
    pages.forEach((page, index) => {
        const pageElement = document.createElement('li');
        pageElement.textContent = page.title;
        pageElement.addEventListener('click', () => {
            currentPage = page;
            renderEditor();
        });
        pageListElement.appendChild(pageElement);
    });
}

function renderEditor() {
    editorElement.innerHTML = currentPage.content;
}

function bold() {
    const selection = window.getSelection();
    const text = selection.toString();
    const boldText = `**${text}**`;
    editorElement.focus();
    document.execCommand('insertText', false, boldText);
}

function italic() {
    const selection = window.getSelection();
    const text = selection.toString();
    const italicText = `*${text}*`;
    editorElement.focus();
    document.execCommand('insertText', false, italicText);
}

function link() {
    const selection = window.getSelection();
    const text = selection.toString();
    const linkText = `[${text}](https://example.com)`;
    editorElement.focus();
    document.execCommand('insertText', false, linkText);
}

renderPageList();