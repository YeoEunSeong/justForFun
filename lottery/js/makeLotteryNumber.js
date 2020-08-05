/* 확인할 사항
    1. 중복 있으면 안 됨 -> bool array로 구현/ set 클래스 써서 할까...
    2. 원하는 번호 포함 기능
    3. 원하는 번호 미 포함 기능
    4. 숫자가 하나씩 딱딱딱 나오면 재미있을듯
*/

const MAX_NUMBER = 45;
const CHOICE_NUMBER = 6;
const START = document.querySelector('.start');
const NUMBER_LIST = document.querySelector('.numberList');

let lotteryNumber = [];
let numberArray = [];

function initArray(){
    lotteryNumber = [];
    numberArray = [];
    lotteryNumber.fill(0,44,false);
}

function initList(){
    while (NUMBER_LIST.firstChild) {
        NUMBER_LIST.removeChild(NUMBER_LIST.firstChild);
     }
}


function makeNumber(){
    initArray();
    initList();
    let count = 0;
    while(count<CHOICE_NUMBER){
        let temp = Math.floor(Math.random()*MAX_NUMBER);
        if(!lotteryNumber[temp]){
            lotteryNumber[temp] = true;
            count++;
        }
    }
    selectNumber();
}

function selectNumber(){
    for (let index = 0; index < MAX_NUMBER; index++) {
        if(lotteryNumber[index])
            numberArray.push(index+1);   
    }
    loadNumber();
}

function loadNumber(){
    numberArray.forEach(element => {
        const LI_NUMBER = document.createElement("span");
        const NUM = document.createTextNode(element);
        LI_NUMBER.appendChild(NUM);
        NUMBER_LIST.appendChild(LI_NUMBER);
    });

    
}

function init(){
    START.addEventListener('click', makeNumber);

}

init();