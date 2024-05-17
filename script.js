/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/*
 * instellingen om foutcontrole van je code beter te maken 
 */
///<reference path="p5.global-mode.d.ts" />
"use strict"

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
const SPELEN = 1;
const GAMEOVER = 2;
const UITLEG = 3;
var spelStatus = SPELEN;

var spelerX = 100; // x-positie van speler
var spelerY = 100; // y-positie van speler
var health = 100;  // health van speler

/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */
var vijandX = 800; // x-positie van speler
var vijandY = 650; // y-positie van speler
/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function() {
  // speler
  if (keyIsDown(68)) {
    spelerX = spelerX + 3
  }
  if (keyIsDown(65)) {
    spelerX = spelerX - 3
  }
  if (keyIsDown(83)) {
    spelerY = spelerY + 3
  }
  if (keyIsDown(87)) {
    spelerY = spelerY - 3
  }
  // border 
  spelerX = constrain(spelerX, 25, 1475);
  spelerY = constrain(spelerY, 25, 975);
  // vijand
  if (keyIsDown(39)) {
    vijandX = vijandX + 3
  }
  if (keyIsDown(37)) {
    vijandX = vijandX - 3
  }
  if (keyIsDown(40)) {
    vijandY = vijandY + 3
  }
  if (keyIsDown(38)) {
    vijandY = vijandY - 3
  }
  // kogel
};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function() {
  // botsing speler tegen vijand
  if (spelerX - vijandX < 50 &&
    spelerX - vijandX > -50 &&
    spelerY - vijandY < 50 &&
    spelerY - vijandY > -50) {
    console.log("Botsing");
    health = health - 1;
  }

  // botsing kogel tegen vijand

  // update punten en health

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function() {
  // achtergrond
  fill("green");
  rect(0, 0, 1500, 1000);
  // vijand
  fill("red");
  rect(vijandX - 25, vijandY - 25, 50, 50);
  fill("blue");
  ellipse(vijandX, vijandY, 20, 20);
  // kogel

  // speler
  fill("white");
  rect(spelerX - 25, spelerY - 25, 50, 50);
  fill("black");
  ellipse(spelerX, spelerY, 10, 10);
  // border 


}

// punten en health




/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1500, 1000);
  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();

    if (health <= 0) {
      spelStatus = GAMEOVER;
    }


  }

  if (spelStatus === GAMEOVER) {
    //teken GAMEOVER scherm
    console.log("game-over")
    // achtergrond
    background("brown")
    fill("red")
    rect(0, 0, 1500, 1000);
    textSize(50);
    fill("red ");
    text("GAME OVER", 500, 200);
    fill("black")
    text("1. Druk ENTER om opnieuw te spelen", 250, 300)
    text("2. Druk Q om naar het hoofdmenu te gaan", 200, 400)

    if (keyIsDown(13)) {
      spelStatus = SPELEN;
      spelerX = 400, spelerY = 600, spelerX = 800, spelerY = 600;
      health = 100;
    }
    if (keyIsDown(81)) {
      spelStatus = UITLEG;
    }
  }


  if (spelStatus === UITLEG) {
    background("brown");
    fill("white");
    textSize(50);
    fill("red ");
    text("Uitleg", 600, 200);
    fill("black")
    text("1. Pak de sleutel en ga naar de deur", 325, 300)
    text("2. Ontwijk de vijand", 500, 400)
    text("Druk '1' voor Level 1", 500, 500)
    text("Druk '2' voor Level 2", 500, 600)
    text("Druk '3' voor Level 3", 500, 700)

    
    if (keyIsDown(49)) {
      spelStatus = SPELEN
      health = 100
      spelerX = 100
      spelerY = 100
    }
  }
}  