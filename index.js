#!/usr/bin/env node

// définition des constantes/require de mes packages

const axios = require('axios');
const boxen = require('boxen');
const chalk = require('chalk');
const gradient = require('gradient-string');
const prompt = require('prompt');
const inquirer = require('inquirer');
const log = console.log;


//Définition des textes de question
let boxquestion1 = gradient.rainbow(boxen(`Aimez-vous les "Fun Facts " ??`, {
    padding: 1,
    borderStyle: 'double',
    align: 'center'
}));
let aimezvousoui = gradient.rainbow(boxen('      Haaaaaaaa, parfait !! \n Et préférez-vous les dates ou les chiffres ?', {
    padding: 1,
    borderStyle: 'double',
    align: 'center'
}))


//Sortie dans le terminal
log(boxquestion1);

//essai prompt

prompt.start();

let aimezvous = {
    name: 'aimezvous',
    validator: /oui*|non*|bof?/,
    warning: 'Vous devez répondre oui, non ou bof !!',
    //    default: 'oui'
};


prompt.get(aimezvous, function (err, result) {
    log("Texte reçu");
    log("résultat: " + result.aimezvous);
    if (result.aimezvous === "oui") {
        console.log(aimezvousoui);


    }
});