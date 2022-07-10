const express = require('express');
const {check} = require('express-validator');
const router = express.Router();

const {crearUsuario, loginUsuario, revalidarToken} = require('../controllers/auth.controller');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

router.post(
    '/new', 
    [ 
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 8 caracteres minimo').isLength({min: 8}),
        validarCampos
    ], 
    crearUsuario);

router.post('/', 
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 8 caracteres minimo').isLength({min: 8}),
        validarCampos
    ], 
    loginUsuario);

router.get('/renew', validarJWT, revalidarToken);

module.exports = router;