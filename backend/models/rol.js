const mongoose = require ('mongoose');
const {Schema} = mongoose;
//const Persona = require ('./persona');

const RolSchema = new Schema({
    nombreRol: {type: String, required: true},
    personas: [{type: mongoose.Types.ObjectId, ref: 'Persona'}]
    })
module.exports = mongoose.models.Rol || mongoose.model('Rol', RolSchema);