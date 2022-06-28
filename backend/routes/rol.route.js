const rolCtrl = require('./../controllers/rol.controller');

const express = require('express');
const router = express.Router();

router.get('/',rolCtrl.getRoles);
router.post('/', rolCtrl.createRol);
router.get('/getRol', rolCtrl.getRol);
router.put('/update', rolCtrl.editRol);
router.delete('/delete', rolCtrl.deleteRol);
router.get('/filtro/nombre',rolCtrl.getRolByNombre);

module.exports = router;