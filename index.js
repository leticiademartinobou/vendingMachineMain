console.log("JS cargado");

const vendingMachine = {
  11: { name: "Cocacola", quantity: 2, price: 1.25 },
  12: { name: "Fanta Naranja", quantity: 2, price: 1 },
  13: { name: "Fanta Limón", quantity: 2, price: 1.5 },
  14: { name: "Agua 500ml", quantity: 2, price: 1 },
  15: { name: "Sprite", quantity: 2, price: 1.25 },
  16: { name: "Cocacola Light", quantity: 2, price: 2 },
  17: { name: "Chocolate", quantity: 2, price: 2.5 },
  18: { name: "Kinder Bueno", quantity: 2, price: 1.25 },
  19: { name: "Kikos", quantity: 2, price: 1 },
};

// console.log(vendingMachine['11'].name);

let writtenNumbersOnScreen = "";
writtenCashOnScreen = [];

const screenElement = document.querySelector(".screen");
const selectButton = document.querySelector(".select-button");
const productLight = document.querySelector(".ball");
const machineHatch = document.querySelector(".machine-hatch");
const picOfTheProduct = document.querySelector(".product-pic");
const hatchOfTheProducts = document.querySelector(".hatch");
const pictureOfTheProductsInHatch = document.querySelector(".product-pic-in-hatch");

const productLight11 = document.querySelector("#ball-11");
const productLight12 = document.querySelector("#ball-12");
const productLight13 = document.querySelector("#ball-13");
const productLight14 = document.querySelector("#ball-14");
const productLight15 = document.querySelector("#ball-15");
const productLight16 = document.querySelector("#ball-16");
const productLight17 = document.querySelector("#ball-17");
const productLight18 = document.querySelector("#ball-18");
const productLight19 = document.querySelector("#ball-19");

const picProduct1 = document.querySelector("#product-1");
const picProduct2 = document.querySelector("#product-2");
const picProduct3 = document.querySelector("#product-3");
const picProduct4 = document.querySelector("#product-4");
const picProduct5 = document.querySelector("#product-5");
const picProduct6 = document.querySelector("#product-6");
const picProduct7 = document.querySelector("#product-7");
const picProduct8 = document.querySelector("#product-8");
const picProduct9 = document.querySelector("#product-9");


selectButton.addEventListener("click", triggerActionSelectButton); 

function triggerActionSelectButton() {
  console.log("I´ve been clicked");

  // pictureOfTheProductsInHatch.classList.toggle('inactive'); 

  for(let i=0; i<vendingMachine.length; i++) {

    if(vendingMachine[i].quantity > 1) {

      pictureOfTheProductsInHatch.classList.add('active'); 

    setTimeout(() => {
    pictureOfTheProductsInHatch.classList.remove('active'); 
    }, 4000);

    } else {
      screenElement.textContent = "No disponible";
    }
  }
}



let y = 0;
let moveProductToHatch = setInterval(moveProduct,5);

function moveProduct() {

  if(y == 100) { // suponiendo que 100 es la posición de la foto del producto

    clearInterval(moveProductToHatch); // posición del hatch
    
  } else {

    y++;

    picProduct1.style.top = y;
    picProduct1.style.left = y;

  }

};

function writeCashNumberOnScreen(event) {
  console.log("Llamando función de cash");
  console.log("EVENT INFO", event);

  console.log(event.target.parent);

  let clickedElement = event.target;

  if (event.target.nodeName === "P") {
  
    clickedElement = event.target.parentElement;
  }

  const clickedElementCashValue = clickedElement.textContent;

  // writtenCashsOnScreen += clickedElementCashValue;

  writtenCashOnScreen.push(clickedElementCashValue);

  let writtenCashsOnScreenNumber = writtenCashOnScreen.map(Number); // array convertido a number

  let totalCashAmount = 0;

  for(let i=0; i < writtenCashsOnScreenNumber.length; i++) {

    totalCashAmount+=writtenCashsOnScreenNumber[i]

  }

  screenElement.textContent = totalCashAmount.toFixed(2) + " €";


  console.log(clickedElementCashValue);
  console.log(writtenCashOnScreen);
  console.log(writtenCashsOnScreenNumber);
  console.log(totalCashAmount);

}


function writeNumberOnScreen(event) {
  console.log("Llamando función");
  console.log("EVENT INFO", event);

  console.log(event.target.parent);

  let clickedElement = event.target;

  // Comprobamos si estamos haciendo click sobre el p y seleccionamos siempre el div (su padre)
  if (event.target.nodeName === "P") {
    // no se podría poner directamente event.target.parentElement === "div"   ??
    clickedElement = event.target.parentElement;
  }

  const clickedElementValue = clickedElement.textContent;

  writtenNumbersOnScreen += clickedElementValue;

  screenElement.textContent = writtenNumbersOnScreen;



  // Falta poner select button - quiero que salgan bien las opciones antes

  if (writtenNumbersOnScreen.length === 2) {
    switch (writtenNumbersOnScreen) {

      case "11":
        if (vendingMachine["11"].quantity >= 1) 

          screenElement.textContent = "Gracias";

          vendingMachine["11"].quantity--;

        console.log(vendingMachine["11"]);

        if (vendingMachine["11"].quantity >= 1) {
          productLight11.style.backgroundColor = "green";
          setTimeout(() => {
            productLight11.style.backgroundColor = "rgb(27, 194, 27)";
          }, 300);
          setTimeout(() => {
            productLight11.style.backgroundColor = "green";
          }, 600);
          setTimeout(() => {
            productLight11.style.backgroundColor = "rgb(27, 194, 27)";
          }, 900);
          setTimeout(() => {
            productLight11.style.backgroundColor = "green";
          }, 1200);
          setTimeout(() => {
            productLight11.style.backgroundColor = "rgb(27, 194, 27)";
          }, 1500);
        }

        // moveProductToHatch;

        if (vendingMachine["11"].quantity === 0) {
          productLight11.style.backgroundColor = "red";

          screenElement.textContent = "No disponible";
        }

        setTimeout(deleteNumberOnScreen, 3000);

      break;

      case "12":

        screenElement.textContent = "Gracias";

        if (vendingMachine["12"].quantity >= 1) {
          vendingMachine["12"].quantity--;
        }

        console.log(vendingMachine["12"]);

        if (vendingMachine["12"].quantity >= 1) {
          productLight12.style.backgroundColor = "green";
          setTimeout(() => {
            productLight12.style.backgroundColor = "rgb(27, 194, 27)";
          }, 300);
          setTimeout(() => {
            productLight12.style.backgroundColor = "green";
          }, 600);
          setTimeout(() => {
            productLight12.style.backgroundColor = "rgb(27, 194, 27)";
          }, 900);
          setTimeout(() => {
            productLight12.style.backgroundColor = "green";
          }, 1200);
          setTimeout(() => {
            productLight12.style.backgroundColor = "rgb(27, 194, 27)";
          }, 1500);
        }

        if (vendingMachine["12"].quantity === 0) {
          productLight12.style.backgroundColor = "red";
        }
        setTimeout(deleteNumberOnScreen, 3000);

        break;

      case "13":
        screenElement.textContent = "Gracias";

        if (vendingMachine["13"].quantity >= 1) {
          vendingMachine["13"].quantity--;
        }

        console.log(vendingMachine["13"]);

        if (vendingMachine["13"].quantity >= 1) {
          productLight13.style.backgroundColor = "green";
          setTimeout(() => {
            productLight13.style.backgroundColor = "rgb(27, 194, 27)";
          }, 300);
          setTimeout(() => {
            productLight13.style.backgroundColor = "green";
          }, 600);
          setTimeout(() => {
            productLight13.style.backgroundColor = "rgb(27, 194, 27)";
          }, 900);
          setTimeout(() => {
            productLight13.style.backgroundColor = "green";
          }, 1200);
          setTimeout(() => {
            productLight13.style.backgroundColor = "rgb(27, 194, 27)";
          }, 1500);
        }

        if (vendingMachine["13"].quantity === 0) {
          productLight13.style.backgroundColor = "red";
        }

        setTimeout(deleteNumberOnScreen, 3000);

        break;

      case "14":
        screenElement.textContent = "Gracias";

        if (vendingMachine["14"].quantity >= 1) {
          vendingMachine["14"].quantity--;
        }

        console.log(vendingMachine["14"]);

        if (vendingMachine["14"].quantity >= 1) {
          productLight14.style.backgroundColor = "green";
          setTimeout(() => {
            productLight14.style.backgroundColor = "rgb(27, 194, 27)";
          }, 300);
          setTimeout(() => {
            productLight14.style.backgroundColor = "green";
          }, 600);
          setTimeout(() => {
            productLight14.style.backgroundColor = "rgb(27, 194, 27)";
          }, 900);
          setTimeout(() => {
            productLight14.style.backgroundColor = "green";
          }, 1200);
          setTimeout(() => {
            productLight14.style.backgroundColor = "rgb(27, 194, 27)";
          }, 1500);
        }

        if (vendingMachine["14"].quantity === 0) {
          productLight14.style.backgroundColor = "red";
        }

        setTimeout(deleteNumberOnScreen, 3000);

        break;

      case "15":
        // screenElement.textContent = 'Gracias';

        if (vendingMachine["15"].quantity >= 1) {
          screenElement.textContent = "Gracias";
          vendingMachine["15"].quantity--;
        }

        console.log(vendingMachine["15"]);

        if (vendingMachine["15"].quantity >= 1) {
          productLight15.style.backgroundColor = "green";
          setTimeout(() => {
            productLight15.style.backgroundColor = "rgb(27, 194, 27)";
          }, 300);
          setTimeout(() => {
            productLight15.style.backgroundColor = "green";
          }, 600);
          setTimeout(() => {
            productLight15.style.backgroundColor = "rgb(27, 194, 27)";
          }, 900);
          setTimeout(() => {
            productLight15.style.backgroundColor = "green";
          }, 1200);
          setTimeout(() => {
            productLight15.style.backgroundColor = "rgb(27, 194, 27)";
          }, 1500);
        }

        if (vendingMachine["15"].quantity === 0) {
          productLight15.style.backgroundColor = "red";
        }

        setTimeout(deleteNumberOnScreen, 3000);

        break;

      case "16":
        screenElement.textContent = "Gracias";

        if (vendingMachine["16"].quantity >= 1) {
          vendingMachine["16"].quantity--;
        }

        console.log(vendingMachine["16"]);

        if (vendingMachine["16"].quantity >= 1) {
          productLight16.style.backgroundColor = "green";
          setTimeout(() => {
            productLight16.style.backgroundColor = "rgb(27, 194, 27)";
          }, 300);
          setTimeout(() => {
            productLight16.style.backgroundColor = "green";
          }, 600);
          setTimeout(() => {
            productLight16.style.backgroundColor = "rgb(27, 194, 27)";
          }, 900);
          setTimeout(() => {
            productLight16.style.backgroundColor = "green";
          }, 1200);
          setTimeout(() => {
            productLight16.style.backgroundColor = "rgb(27, 194, 27)";
          }, 1500);
        }

        if (vendingMachine["16"].quantity === 0) {
          productLight16.style.backgroundColor = "red";
        }

        setTimeout(deleteNumberOnScreen, 3000);

        break;

      case "17":
        screenElement.textContent = "Gracias";

        if (vendingMachine["17"].quantity >= 1) {
          vendingMachine["17"].quantity--;
        }

        console.log(vendingMachine["17"]);

        if (vendingMachine["17"].quantity >= 1) {
          productLight17.style.backgroundColor = "green";
          setTimeout(() => {
            productLight17.style.backgroundColor = "rgb(27, 194, 27)";
          }, 300);
          setTimeout(() => {
            productLight17.style.backgroundColor = "green";
          }, 600);
          setTimeout(() => {
            productLight17.style.backgroundColor = "rgb(27, 194, 27)";
          }, 900);
          setTimeout(() => {
            productLight17.style.backgroundColor = "green";
          }, 1200);
          setTimeout(() => {
            productLight17.style.backgroundColor = "rgb(27, 194, 27)";
          }, 1500);
        }

        if (vendingMachine["17"].quantity === 0) {
          productLight17.style.backgroundColor = "red";
        }

        setTimeout(deleteNumberOnScreen, 3000);

        break;

      case "18":
        screenElement.textContent = "Gracias";

        if (vendingMachine["18"].quantity >= 1) {
          vendingMachine["18"].quantity--;
        }

        console.log(vendingMachine["18"]);

        if (vendingMachine["18"].quantity >= 1) {
          productLight18.style.backgroundColor = "green";
          setTimeout(() => {
            productLight18.style.backgroundColor = "rgb(27, 194, 27)";
          }, 300);
          setTimeout(() => {
            productLight18.style.backgroundColor = "green";
          }, 600);
          setTimeout(() => {
            productLight18.style.backgroundColor = "rgb(27, 194, 27)";
          }, 900);
          setTimeout(() => {
            productLight18.style.backgroundColor = "green";
          }, 1200);
          setTimeout(() => {
            productLight18.style.backgroundColor = "rgb(27, 194, 27)";
          }, 1500);
        }

        if (vendingMachine["18"].quantity === 0) {
          productLight18.style.backgroundColor = "red";
        }

        setTimeout(deleteNumberOnScreen, 3000);

        break;

      case "19":
        screenElement.textContent = "Gracias";

        if (vendingMachine["19"].quantity >= 1) {
          vendingMachine["19"].quantity--;
        }

        console.log(vendingMachine["18"]);

        if (vendingMachine["19"].quantity >= 1) {
          productLight19.style.backgroundColor = "green";
          setTimeout(() => {
            productLight19.style.backgroundColor = "rgb(27, 194, 27)";
          }, 300);
          setTimeout(() => {
            productLight19.style.backgroundColor = "green";
          }, 600);
          setTimeout(() => {
            productLight19.style.backgroundColor = "rgb(27, 194, 27)";
          }, 900);
          setTimeout(() => {
            productLight19.style.backgroundColor = "green";
          }, 1200);
          setTimeout(() => {
            productLight19.style.backgroundColor = "rgb(27, 194, 27)";
          }, 1500);
        }

        if (vendingMachine["19"].quantity === 0) {
          productLight19.style.backgroundColor = "red";
        }

        setTimeout(deleteNumberOnScreen, 3000);

        break;

      default:
        screenElement.textContent = "Error";
        console.log("este número no");
        setTimeout(deleteNumberOnScreen, 3000);

        break;
    }
  } else if (writtenNumbersOnScreen.length > 2) {
    screenElement.textContent = "Código Erróneo";
    setTimeout(deleteNumberOnScreen, 3000);
  }

  console.log(clickedElementValue);
  console.log(writtenNumbersOnScreen);
  console.log(typeof writtenNumbersOnScreen);
}

function deleteNumberOnScreen() {

  let dotMessage = (screenElement.textContent = ".");
  dotMessage;

}

function deleteCashOnScreen() {

  let dotMessage = (screenElement.textContent = ".");
  dotMessage;
  writtenCashOnScreen.length = 0;
  
}

function changeMessageWhenIsEmpty() {
  if (vendingMachine["15"].quantity == 0) {
    productLight15.style.backgroundColor = "red";
    screenElement.textContent = "No disponible";
  }
}

function changeColorOfTheBall() {
  div.style.backgroundColor = originalColor;
}

// setTimeout(function(){
//   div.style.backgroundColor = originalColor;
// }, 1000);

function showProductInTheHatch() {
  picOfTheProduct.appendChild(picOfTheProduct);
}

// function selectButton() {
//   console.log("Hello!!!!!!!")
// }

// for (let i = 0; i < vendingMachine.length; i++) {

//   if (writtenNumbersOnScreen.join('') !== vendingMachine[i].numberToSelectIt) {

//     screenElement.textContent = 'Código Erróneo';
//     setTimeout(deleteNumberOnScreen,3000);

//    } else if (writtenNumbersOnScreen.join('') === vendingMachine[i].numberToSelectIt /*&& vendingMachine[i].quantity <= 0*/) { //he quitado esta opción sólo por el momento para ver si funciona y ya ñado la cantidad

//     screenElement.textContent = 'No Disponible';
//     setTimeout(deleteNumberOnScreen,3000);

//   } else if (writtenNumbersOnScreen.join('') === vendingMachine[i].numberToSelectIt && vendingMachine[i].quantity > 0 ) {
//     screenElement.textContent = 'Código correcto!';
//     // aquí tendría que poner un loop para decrecer la cantidad
//     setTimeout(deleteNumberOnScreen,3000);

//   }
// }
// } else if(writtenNumbersOnScreen.length>2) {

//   writtenNumbersOnScreen.length = 0;
//   screenElement.textContent = 'Error';
//   setTimeout(deleteNumberOnScreen,3000);

// }
