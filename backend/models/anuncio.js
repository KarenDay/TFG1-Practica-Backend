const mongoose = require ('mongoose');
const {Schema} = mongoose;

const AnuncioSchema = new Schema({
    textoAnuncio: {type: String, required: true},
    tipoContenido: [{type: String, required: true}],
    medio: [{type: mongoose.Types.ObjectId, ref: 'Medio'}],
    fechaEntrega: {type: Date, required: true}, 
    estado: {type: String, required: true},
    destinatarios: {type: mongoose.Types.ObjectId, ref: 'Rol'},
    tiempoLectura: {type: String, required: true},
    redactor:{type: mongoose.Types.ObjectId, ref: 'Persona'},
    area:{type: mongoose.Types.ObjectId, ref: 'Area'}
    })
module.exports = mongoose.models.Anuncio || mongoose.model('Anuncio', AnuncioSchema);