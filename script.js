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
const UITLEG = 1;
const GAMEOVER = 2;
const SPELEN = 3;
const VICTORY = 4;
var spelStatus = SPELEN;



var spelerX = 50; // x-positie van speler
var spelerY = 50; // y-positie van speler
var health = 100;  // health van speler\
var spelerXnieuw = 50;
var spelerYnieuw = 50;


/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */
var vijandX = 650; // x-positie van speler
var vijandY = 50; // y-positie van speler
/**/
var sleutelX = 1350; // x-positie van sleutel
var sleutelY = 50; // y-positie van sleutel

/* Updatet globale variabelen met posities van speler, vijanden en kogels
*/
var beweegAlles = function() {
  // speler
  if (keyIsDown(68)) {
    spelerX = spelerX + 3.5
  }
  if (keyIsDown(65)) {
    spelerX = spelerX - 3.5
  }
  if (keyIsDown(83)) {
    spelerY = spelerY + 3.5
  }
  if (keyIsDown(87)) {
    spelerY = spelerY - 3.5
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
  if (spelerX - sleutelX < 50 &&
    spelerX - sleutelX > -50 &&
    spelerY - sleutelY < 50 &&
    spelerY - sleutelY > -50) {
    console.log("Botsing");
    health = health + 101;
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

  // sleutel
  rect(sleutelX - 25, sleutelY - 25, 50, 50);``
  
  // border 
  rect(100, 10, 200, 650);
  rect(1000, 10, 200, 650);
  rect(100, 800, 600, 100);
  rect(100, 10, 200, 50);

  text(health, 1400, 900);
  textSize(40);

  text(tijd, 1400, 950)
  textSize(40)

  tijd = tijd - 1;
  if (tijd === 0)
    spelStatus = GAMEOVER;
}

// punten en health
var health = 100;

var tijd = 5000;


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

    if (spelStatus === UITLEG) {
      background("brown");
      fill("white");
      textSize(50);
      fill("red ");
      text("Uitleg", 600, 200);
      fill("black")
      text("1. Pak de sleutel en ontsnap uit het doolhof", 325, 300)
      text("2. Ontwijk de vijand", 500, 400)
      text("Druk '1' voor Level 1", 500, 500)
      text("Druk '2' voor Level 2", 500, 600)
      text("Druk '3' voor Level 3", 500, 700)


      if (keyIsDown(49)) {
        spelStatus = SPELEN
        spelerX = 50, spelerY = 50, vijandX = 650, vijandY = 50;
        health = 100;
        tijd = 5000;
      }
    }



    if (health <= 0) {
      spelStatus = GAMEOVER;
    }

    if (health > 101) {
      spelStatus = VICTORY;
    }

  }

  if (spelStatus === GAMEOVER) {
    //teken GAMEOVER scherm
    console.log("game-over")
    // achtergrond
    background("brown")
    fill("red")
    rect(0, 0, 1500, 1000);
    textSize(60);
    fill("red ");
    text("GAME OVER", 500, 200);
    fill("black")
    text("GAMEOVER", 500, 300)
    text("1. Druk 'ENTER' om opnieuw te spelen", 250, 400)
    text("2. Druk 'Q' om naar het hoofdmenu te gaan", 200, 500)

    if (keyIsDown(13)) {
      spelStatus = SPELEN;
      spelerX = 50, spelerY = 50, vijandX = 650, vijandY = 50;
      health = 100;
      tijd = 5000;
    }
    if (keyIsDown(81)) {
      spelStatus = UITLEG;
    }
  }


  if (spelStatus === VICTORY) {
    background("blue");
    fill("white");
    textSize(50);
    fill("white ");
    text("VICTORY!!!", 600, 200);
    fill("black")
    text("Goed gedaan! Je hebt het level voltooid!", 325, 350)
    text("Druk 'ENTER' om opnieuw te spelen", 350, 450)
    text("Druk 'Q' om naar het hoofdmenu te gaan", 300, 550)
    
    if (keyIsDown(13)) {
      spelStatus = SPELEN;
      spelerX = 50, spelerY = 50, vijandX = 650, vijandY = 50;
      health = 100;
      tijd = 5000;
    }
    if (keyIsDown(81)) {
      spelStatus = UITLEG;
    }
  }
}  