let mongoose = require('mongoose');
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

let Schema = mongoose.Schema;

const Eleve = {
    nom: String,
    prenom: String,
    image: String
}

const Matiere = {
    nom: String,
    image: String
}

const Prof = {
    nom: String,
    prenom: String,
    matiere: Matiere,
    image: String
}

let AssignmentSchema = Schema({
    id: Number,
    nom: String,
    auteur:Eleve,
    prof:Prof,
    note: Number,
    remarques: String,
    dateDeRendu: Date,    
    rendu: Boolean
});

AssignmentSchema.plugin(aggregatePaginate);


// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Assignment', AssignmentSchema);
