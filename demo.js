function init() {
    const canvas = document.querySelector('#board');
    const parent = canvas.parentElement;
    const dim = Math.min(parent.clientWidth, parent.clientHeight);
}

function onReady() {
    window.removeEventListener('DOMContentLoaded', onReady);
    init();
}

if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', onReady);
} else {
    onReady();
}