#!/usr/bin/env node

// définition des constantes/require de mes packages

const axios = require('axios');
const boxen = require('boxen');
const chalk = require('chalk');
const gradient = require('gradient-string');
const prompt = require('prompt');
const log = console.log;


//Définition des variables
//let textearcenciel = gradient.rainbow("Essai de texte en arc en ciel");
let boxtextrainbow = gradient.rainbow(boxen("Aimez-vous les chiffres ??"));


//Sortie dans le terminal
log(boxtextrainbow);

//essai prompt

prompt.start();

let aimezvous = {
    name: 'yesno',
    message: 'are you sure ?',
    validator: /y[yes]*|n[o]?/,
    warning: 'Must respond yes or no',
    default: 'no'
};


prompt.get(aimezvous, function (err, result) {
    log("Texte reçu");
    log("résultat: " + result.yesno);
})