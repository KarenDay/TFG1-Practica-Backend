const Rol = require('../models/rol');
const Persona = require('../models/persona');
const rolCtrl = {}

rolCtrl.getRoles = async (req, res) => {
    var roles = await Rol.find().populate('personas');
    res.json(roles);
}

rolCtrl.createRol = async (req, res) => {
    var rol = new Rol(req.body);
    try {
        await rol.save();
        res.json({
        'status': '1',
        'msg': 'Rol guardado.'})
    } catch (error) {
        res.status(400).json({
        'status': '0',
        'msg': 'Error procesando operacion.'})
    }
}
rolCtrl.getRol = async (req, res) => {
    const rol = await Rol.findById(req.query.id).populate('personas');
    res.json(rol);
}

rolCtrl.getRolByNombre = async (req, res) => {
    const criteria = {nombreRol: req.query.nombreRol}
    Rol.findOne(criteria, function(err, rol) {
        if (err) {
            res.json({
            status: 0,
            msg: 'error'})
            };
        if (!rol) {
            res.json({
            status: 0,
            msg: "not found" })
        } else {
            console.log(rol);
            res.json(rol)
        }        
        })
}

rolCtrl.editRol = async (req, res) => {
    //al actualizar se tiene que cargar de nuevo el array de personas en el rol, sino se perderán
    const rol = new Rol(req.body);
    const personas= Persona(req.body.personas);
    try {
        rol.personas.push(personas);
        await Rol.updateOne({_id: req.body._id}, rol);
        res.json({
        'status': '1',
        'msg': 'Rol updated'
    }) 
    } catch (error) {
        res.status(400).json({
        'status': '0',
        'msg': 'Error procesando la operacion'
        }) 
    }
}

rolCtrl.deleteRol = async (req, res)=>{
    try {
        await Rol.deleteOne({_id: req.query.id});
        res.json({
        status: '1',
        msg: 'Rol removed'
        }) 
    } catch (error) {
        res.status(400).json({
        'status': '0',
        'msg': 'Error procesando la operacion'
        }) 
    }
}

module.exports = rolCtrl;