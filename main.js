
/*const data = [1, 2, 3, 4, 5, 6, 2,7,8]
let x = data.indexOf(8)
let t = data.lastIndexOf(8);

const button = document.querySelector('#btn')

button.onclick = alertFunction;

const click = document.querySelector(".click")

function alertFunction(){
    alert("yes finally you earned the front-end job");
}

click.addEventListener('click', function(e){
    e.target.style.background = 'blue';
});
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');
//use forEach to iterate through each button

buttons.forEach((button)=> {
    //for each one we add a click listener
    button.addEventListener('click', () =>{
        console.log(buttton.id);
    });
});

function displayDate() {
    document.getElementById("demo").textContent = Date();
  }

  function reomoveDemo(){
    const demo = document.getElementById('demo');
    demo.removeAttribute('id'); 
  }

    // 
  // program to check if the number is even or odd
// take input from the user
const number = prompt("Enter a number: ");

//check if the number is even
if(number % 2 == 0) {
    console.log("The number is even.");
}

// if the number is odd
else {
    console.log("The number is odd.");
}
*/

//tip-calculator

//let bill = document.querySelector(".number-of-persons");
//console.log(bill.textContent/100);



// const percantageBtn = document.querySelectorAll("percantage-btn");
// percantageBtn.forEach(btn =>{
//     btn.addEventListener("click", ()=>{
//         btn.textCon
//     })
// })

const billInput = document.querySelector('.bill-input') 
const peopleInput = document.querySelector('.people-input')
const tipPerPerson = document.getElementById('tip-cash-amount')
const totalPerPerson = document.getElementById('total-amount-cash')
const tipButton = document.querySelectorAll('.percantage-btn');
const tipCustom = document.getElementById("tip-custom");
const resetBtn = document.querySelector(".reset");
const error = document.querySelector('.error')


billInput.addEventListener('input', billInputFunc);
peopleInput.addEventListener('input', peopleInputFunc);
tipCustom.addEventListener('input', tipInputFunc);
resetBtn.addEventListener("click", reset)


billInput.value = "0.00";
peopleInput.value = '1';
tipPerPerson.innerHTML = '$' + (0.0).toFixed(2);
totalPerPerson.innerHTML = '$' + (0.0).toFixed(2);



let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.15;

function billInputFunc(){
    billValue = parseFloat(billInput.value);
    console.log(billValue);
    calculateTip();
}

function peopleInputFunc(){
    peopleValue = parseFloat(peopleInput.value);
    console.log(peopleValue);
    calculateTip();
    if(peopleValue<1){
        error.style.cssText = "display: flex; color: red;"
        peopleInput.style.border = "thick solid red"
    } else{
        error.style = "none"
        peopleInput.style.border = 'none';
    }
}

tipButton.forEach(function(val){
    val.addEventListener('click', handleClick)
})

function handleClick(event){
    tipButton.forEach(function(val){
        val.classList.remove('active-tip');
        if(event.target.innerHTML == val.innerHTML){
            val.classList.add("active-tip")
            tipValue = parseFloat(val.innerHTML)/100;
        }
    });
    calculateTip();
}

function calculateTip(){
    if(peopleValue >= 1){
        let tipAmount = (billValue * tipValue)/peopleValue;
        let total = (billValue * tipAmount)/peopleValue;
        tipPerPerson.innerHTML = "$" + tipAmount.toFixed(2);
        totalPerPerson.innerHTML = "$" + total.toFixed(2);
    }
}

function tipInputFunc(){
    tipValue = parseFloat(tipCustom.value/100);

    tipButton.forEach(function(val){
        val.classList.remove("active-tip")
    });
    calculateTip();
}

function reset(){
    billInput.value = "0.0";
    billInputFunc();
    peopleInput.value = "1";
    peopleInputFunc();
    tipCustom.value = "";
}