const mongoose = require ('mongoose');
const {Schema} = mongoose;
//const Persona = require ('./persona');
//const Persona =require ('./contacto');
const AreaSchema = new Schema({
    nombreArea: {type: String, required: true},
    responsables: [{type: mongoose.Types.ObjectId, ref: 'Persona'}]
    })
module.exports = mongoose.models.Area || mongoose.model('Area', AreaSchema);