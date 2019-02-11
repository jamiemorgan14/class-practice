import Character from "./models/character.js";
import Episode from "./models/episode.js";

//CHARACTER
let leo = new Character('Leonardo', 'pizza');
leo.eat('broccoli')
leo.eat('pizza')

let episode1 = new Episode('Pizza Time', 'The team fights pizza through time', '20:53');
episode1.addCharacter(leo);
document.getElementById('episodes').innerHTML = episode1.getHtml()
//GOOD GUYS
  //LEO
  //DONNY
  //MIKEY
  //RAPH

//BAD GUYS
  //SHREDDER
  //RATKING
  //BEEBOP
  //ROCKSTEADY