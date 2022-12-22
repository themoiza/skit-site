window.ToogleDisabled = (id) => {

    var f = document.getElementById(id);

    if(f.getAttribute('disabled')){
        f.removeAttribute('disabled', 'disabled');
        f.parentElement.classList.remove('disabled');
    }else{
        f.setAttribute('disabled', 'disabled');
        f.parentElement.classList.add('disabled');
    }
};

window.TooglerReadonly = (id) => {

    var f = document.getElementById(id);

    if(f.getAttribute('readonly')){
        f.removeAttribute('readonly', 'readonly');
        f.parentElement.classList.remove('readonly');
    }else{
        f.setAttribute('readonly', 'readonly');
        f.parentElement.classList.add('readonly');
    }
};