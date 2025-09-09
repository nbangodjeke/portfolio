const formulaire = document.getElementById("contactForm");

// Récupération des champs
const prenom = document.getElementById("prenom");
const nom = document.getElementById("nom");
const sujet = document.getElementById("sujet");
const message = document.getElementById("message");

// Récupération des éléments d'erreur
const erreurPrenom = document.getElementById("erreurPrenom");
const erreurNom = document.getElementById("erreurNom");
const erreurSujet = document.getElementById("erreurSujet");
const erreurMessage = document.getElementById("erreurMessage");

// Fonction pour valider un champ
function validerChamp(champ, erreurElement, messageErreur, conditionValidation) {
    if (!conditionValidation(champ.value.trim())) {
        erreurElement.textContent = messageErreur;
        champ.style.border = "2px solid red";
        return false;
    } else {
        erreurElement.textContent = "";
        champ.style.border = "2px solid green";
        return true;
    }
}

// Validation individuelle
function validerPrenom() {
    return validerChamp(prenom, erreurPrenom, "Le prénom doit contenir au moins 2 caractères.", val => val.length >= 2);
}

function validerNom() {
    return validerChamp(nom, erreurNom, "Le nom doit contenir au moins 2 caractères.", val => val.length >= 2);
}

function validerSujet() {
    return validerChamp(sujet, erreurSujet, "Le sujet doit contenir au moins 2 caractères.", val => val.length >= 2);
}

function validerMessage() {
    return validerChamp(message, erreurMessage, "Le message doit contenir au moins 10 caractères.", val => val.length >= 10);
}

// Vérification globale
formulaire.onsubmit = function(event) {
    event.preventDefault();

    const prenomValide = validerPrenom();
    const nomValide = validerNom();
    const sujetValide = validerSujet();
    const messageValide = validerMessage();

    if (prenomValide && nomValide && sujetValide && messageValide) {
        alert("Formulaire valide et prêt à être soumis !");
        formulaire.reset(); // Réinitialise les champs
    } else {
        alert("Veuillez corriger les erreurs avant de soumettre.");
    }
};
