var windowControls = (function() {
    var remote = require('electron').remote,
        elements = {
            minimize: document.getElementById('minimize'),
            maximize: document.getElementById('maximize'),
            close: document.getElementById('close')
        };

    function minimize() {
        remote.getCurrentWindow().minimize();
    }

    function maximize() {
        remote.getCurrentWindow().maximize();
    }

    function close() {
        remote.getCurrentWindow().close();
    }

    elements.minimize.addEventListener('click', minimize);
    elements.maximize.addEventListener('click', maximize);
    elements.close.addEventListener('click', close);

    return {
        elements: elements,
        minimize: minimize,
        maximize: maximize,
        close: close
    };
})();
