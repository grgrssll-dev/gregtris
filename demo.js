requirejs(['gregtris'], (gregtris) => {
    const Gregtris = gregtris.default;
    function init() {
        console.log('init');
        const canvas = document.getElementById('board');
        const parent = canvas.parentElement;
        const dim = Math.min(parent.clientWidth, parent.clientHeight);
        const gregtris = new Gregtris(canvas,{
            dim,
            debug: true,
        });
        gregtris.init().then(() => {
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

