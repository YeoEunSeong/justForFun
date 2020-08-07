const COUNT = document.getElementById('number');

function add(){
    COUNT.innerText = Number(COUNT.innerText)+1;
}

function minus(){
    COUNT.innerText = Number(COUNT.innerText)-1;
}
function reset(){
    COUNT.innerText = 0;
}

function init(){
    const ADD = document.querySelector('.add');
    const MINUS = document.querySelector('.minus');
    const RESET = document.querySelector('.reset');

    ADD.addEventListener('click', add);
    MINUS.addEventListener('click', minus);
    RESET.addEventListener('click', reset);

}

init();