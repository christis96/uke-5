//MODEL
const app = document.getElementById('app');
let number1 ;
let number2 ;


//VIEW
updateView();
function updateView() {
    app.innerHTML = /*html*/ `
    <button onclick="generateTwoNumbers()">To nummer</button>
    <ul>
        <li>Tall 1: ${number1}</li>
        <li>Tall 2: ${number2}</li>
    </ul>
    
        
    `;
 

}

//CONTROLLER

function generateTwoNumbers() {

    number1 = Math.floor(Math.random() * 10);
    number2 = Math.floor(Math.random() * 10);

    while (number1 === number2) {
        console.log("Equal numbers found! Getting new numbers...");

        number1 = Math.floor(Math.random() * 10);
        number2 = Math.floor(Math.random() * 10);
    }

    updateView();

}