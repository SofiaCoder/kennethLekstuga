/*
// Bibliotek //

const prompt = require('prompt-sync')() // problem med prompt-sync biblioteket, stödjer inte /n newline därför den kopierar text hela tiden när man trycker en siffra


///////////////////////////////////
//                               //
//            input              //
//                               //
///////////////////////////////////

let loop = 1;

function kokstart(){
const q1 = "\n\n\nVälkommen till kokboken välj ett alternativ med siffrorna:\n\n";
const q2 = "1. Koka Snabbmakroner\n";
const q3 = "2. Måttkonverterare\n";
const q4 = "3. Sneakpeak Array\n\n";
const q5 = "0. för att avbryta";

console.log(q1 + q2 + q3 + q4 + q5)
}

function kokaMaks(){
  portioner = prompt("Hur många portioner snabbmakaroner vill du göra? --> ")
  let liter = portioner * 0.5;
  let pasta = portioner * 2;
  let salt = portioner * 0.5; 
  console.log(`
  ***************************************************************************
  Du har valt att göra ${portioner} portioner med pasta,
  
  du behöver fylla en kastrull med ca: ${liter} l vatten, 
  tillsätt ${salt} tsk salt, vänta tills vattnet kokar och häll sedan
  i ${pasta} dl pasta och vänta ca 3 min, häll av i ett durkslag och servera,
  bon apitit!
  
  ***************************************************************************`);
                   }

function conVolym(){
  let volym = prompt("skriv antal i liter --> ");
  let choose = prompt("Vilken prefix vill du veta? (D)eci- / (C)enti- / (M)ililiter --> ").toUpperCase();

    if (choose == "D") {
      volym = volym * 10;
      console.log(volym + " dl");
      } else if (choose == "C") {
        volym = volym * 100;
        console.log(volym + " cl");
        } else if (choose == "M") {
          volym = volym * 1000;
          console.log(volym + " ml");
          } else {
            console.log("wrong input")
            }

}

function firstArray(){
  let test = ["audi ", "volvo ", "ford ", "MCB ", "ferrari ", 5];
  console.log(test);                                                         //för att skriva ut alla data från array
  console.log(test[0] +"& "+ test[4]);                                       // för att skriva ut första och 5e värdet från array test  
}


///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//                            Program                                        //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////


do{
  kokstart()
    kokboken = prompt()
    switch(parseInt(kokboken)){
      case 1 : 
        kokaMaks();
        break;

      case 2 : 
        conVolym();
        break;

      case 3 :
        firstArray();
        break;

      case 0 : 
        loop = 0, console.log("Avbryter");
        break;

      default: console.log("fel knapp prova igen")
    }; 
} while(loop > 0)

*/