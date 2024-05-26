let CountNumber = 0;
const decreasebtn = document.querySelector('.btn-js-start')
const increasebtn = document.querySelector('.btn-js-increase')
const resetbtn = document.querySelector('.btn-js-reset')
const countText = document.querySelector('.js-count')


decreasebtn.addEventListener("click", decreaseFunc);
resetbtn.addEventListener("click", resetFunc);
increasebtn.addEventListener("click", increaseFunc);

function colorChanger(CountNumber){

if (CountNumber < 0) {
    countText.style.color = 'red'
}
else if (CountNumber >= 1) {
    countText.style.color = 'green'
}
else {
    countText.style.color = 'black'

}
}

document.querySelector('.js-count').innerHTML = CountNumber;

function decreaseFunc() {
    CountNumber -= 1
    document.querySelector('.js-count').innerHTML = CountNumber;

    colorChanger(CountNumber)
}


function resetFunc() {
    CountNumber = 0
    document.querySelector('.js-count').innerHTML = CountNumber;
    colorChanger(CountNumber)

}


function increaseFunc() {
    CountNumber += 1
    document.querySelector('.js-count').innerHTML = CountNumber;
    colorChanger(CountNumber)

}