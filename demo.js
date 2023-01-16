import Tetris from './lib/tetris.js';

function init() {
    const canvas = document.getElementById('board');
    const parent = canvas.parentElement;
    const dim = Math.min(parent.clientWidth, parent.clientHeight);
    const tetris = new Tetris({
        dim,
        canvas,
        debug: true,
    });
    tetris.init().then(() => {

    });

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