import Tetris from './src/tetris.js';

function init() {
    const canvas = document.getElementById('board');
    const parent = canvas.parentElement;
    const dim = Math.min(parent.clientWidth, parent.clientHeight);
    const tetris = new Tetris(canvas,{
        dim,
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