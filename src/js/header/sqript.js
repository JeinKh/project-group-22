document.getElementById('open').onclick = function() {
    document.getElementById('modal-menu').classList.remove('is-close');
    document.getElementById('modal-menu').classList.add('is-open');
    }

    document.getElementById('close').onclick = function() {
    document.getElementById('modal-menu').classList.remove('is-open');    
    document.getElementById('modal-menu').classList.add('is-close');
    }