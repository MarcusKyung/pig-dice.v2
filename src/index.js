//Imports
import { rollDice, hold } from './business-logic.js';
import './css/styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

//User Logic
window.addEventListener("load", function (){
  document.querySelector("div#rollOption").addEventListener("click", rollDice);
  document.querySelector("div#holdOption").addEventListener("click", hold);
});