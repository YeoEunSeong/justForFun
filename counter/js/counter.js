const COUNT = document.getElementById('number');
const ADD = document.querySelector('.add');
const MINUS = document.querySelector('.minus');

function add(){
    COUNT.innerText = Number(COUNT.innerText)+1;
}

function minus(){
    COUNT.innerText = Number(COUNT.innerText)-1;
}


function init(){
    ADD.addEventListener('click', add);
    MINUS.addEventListener('click', minus);
}

init();