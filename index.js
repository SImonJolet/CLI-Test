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


let aimezvousoui = gradient.rainbow(boxen('Haaaaaaaa, parfait !! \n Et préférez-vous les dates ou les chiffres ?', {
    padding: 1,
    borderStyle: 'double',
    align: 'center'
}));


let jourOuAnnée = gradient.instagram(boxen('Maintentant le plus dur !! \n Choisissez entre un jour et une année <(^_^)>', {
    padding: 1,
    borderStyle: 'double',
    align: 'center'
}));


let entrezUneDate = gradient.retro(boxen('Presque fini, maintenant entrez une date et apprenez quelque chose.', {
    padding: 1,
    borderStyle: 'double',
    align: 'center'
}));

//Définition des choix
prompt.start();
let aimezvous = {
    name: 'aimezvous',
    validator: /oui*|non*|bof?/, //entrées valides... NB: on en met aurant qu'on veut
    warning: 'Vous devez répondre oui, non ou bof !!', //message si l'user n'entre pas une réponse valide, cf ligne "validator"
    default: 'oui'
};

let choixAprèsAimezVousOui = { //création d'un QCM
    type: 'list',
    name: "choixAprèsAimezVousOui",
    choices: ['Les dates', 'Les chiffres'],
};

let choixJourAnnée = { //création d'un nouveau QCM
    type: 'list',
    name: 'choixJourAnnée',
    choices: ["Go for les jours !!! Les années c'est beaucoup trop long",
        "Les jours ça passe trop vite, moi je suis team année !! (ง •̀_•́)ง "
    ] //création des choix, nombres illimités
};



//Sortie dans le terminal
log(boxquestion1);

//Première question

prompt.start();




prompt.get(aimezvous, function (err, result) { //affichage de la ligne d'encodage pour l'user et fonction pour la réception de la réponse.
    log("Texte reçu");
    log("résultat: " + result.aimezvous);

    if (result.aimezvous === "oui") {
        console.log(aimezvousoui); //box pour la question en cas de oui


        inquirer.prompt(choixAprèsAimezVousOui).then(answers => { //appel du QCM avec inquirer et fonction de récupération de la réponse de l'user.
            console.log('\nOrder receipt:');
            log(JSON.stringify(answers, null, ' '));

            if (answers.choixAprèsAimezVousOui == 'Les dates') {

                console.log(jourOuAnnée); //box pour la question en cas de choix=dates

                inquirer.prompt(choixJourAnnée).then(answers => {
                    log(entrezUneDate);
                    prompt.get(['date'], function (err, result) {
                        log(process.argv)

                    })
                })
            };

        })
    }
});