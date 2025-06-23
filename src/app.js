import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

//inicio aqui 
let pronouns = ['the', 'our'];
let adjs = ['great', 'big'];
let nouns = ['jogger', 'racoon'];

console.log("Generando nombres de dominio (versión moderna):");

for (const pronoun of pronouns) {
  for (const adj of adjs) {
    for (const noun of nouns) {
     
      console.log(`${pronoun}${adj}${noun}.com`);
    }
  }
}