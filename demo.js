requirejs(['tetris'], (tetris) => {
    const Tetris = tetris.default;
    console.log('Tetris', tetris.default, Tetris);
    function init() {
        console.log('init');
        const canvas = document.getElementById('board');
        const parent = canvas.parentElement;
        const dim = Math.min(parent.clientWidth, parent.clientHeight);
        const tetris = new Tetris(canvas,{
            dim,
            debug: true,
        });
        tetris.init().then(() => {
            console.log('Loaded');
        });
    
    }
    
    function onReady() {
        console.log('ready');
        window.removeEventListener('DOMContentLoaded', onReady);
        init();
    }
    
    if (document.readyState === 'loading') {
        window.addEventListener('DOMContentLoaded', onReady);
    } else {
        onReady();
    }
});

