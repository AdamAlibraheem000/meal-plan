const btnMealOne = document.getElementById('btn-meal-1')
const btnMealTwo = document.getElementById('btn-meal-2')
const btnMealThree = document.getElementById('btn-meal-3')
const btnSmoothOne = document.getElementById('btn-smooth-1')
const btnSmoothTwo = document.getElementById('btn-smooth-2')
const btnSmoothThree = document.getElementById('btn-smooth-3')

const calsInput = document.getElementById("calories");
const proInput = document.getElementById('protein')


function updateCals() {
    let temp = parseInt(calsInput.value);
    temp += 50;
    calsInput.value = temp;
}

function updateProtein(){
    let temp = parseInt(proInput.value)
    temp += 75;
    proInput.value = temp;
}




btnMealOne.addEventListener('click', updateCals)
btnMealTwo.addEventListener('click', updateProtein)
btnMealThree.addEventListener('click', displayMessage)
btnSmoothOne.addEventListener('click', displayMessage)
btnSmoothTwo.addEventListener('click', displayMessage)
btnSmoothThree.addEventListener('click', displayMessage)
