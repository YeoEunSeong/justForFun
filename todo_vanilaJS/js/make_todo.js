const SUBMIT_CLICK = document.querySelector('.todoSubmit');
const CLEAR_CLICK = document.querySelector('.clearAll');
const TODO = document.querySelector('.todoList');
const INPUT = document.querySelector('.todo_text');
const NOTHING = document.querySelector('.hidden');
const LOCAL_STORAGE = window.localStorage;

let index = LOCAL_STORAGE.length;

function saveToDo(){
    if(INPUT.value==="")
        alert("입력을 해주세요.");
    else{
        LOCAL_STORAGE.setItem(index++, INPUT.value);
        loadToDo();
    } 
}

function clearLocalStorage() {
    LOCAL_STORAGE.clear();
    index = 0;
    location.reload();
}

function loadToDo() {
 
    for(let i =0; i<LOCAL_STORAGE.length; i++){
        const NEW_TODO = document.createElement("li");
        const TODO_TEXT = document.createTextNode(i+1 +" "+ LOCAL_STORAGE[i]);
        NEW_TODO.appendChild(TODO_TEXT);
        TODO.appendChild(NEW_TODO);
    }
    toggleHidden();
    initInput();
}

function initInput(){
    INPUT.value = "";
}

function toggleHidden(){
    if(index===0)
        NOTHING.classList.remove("hidden");
    else
        NOTHING.classList.add("hidden");
}

function init(){
    loadToDo();
    SUBMIT_CLICK.addEventListener('click', saveToDo);
    CLEAR_CLICK.addEventListener('click', clearLocalStorage);    
}

init();
