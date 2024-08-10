const validaCampos = require("../middlewares/validar-jwt");
const validarJWT = require("../middlewares/validar-campos");
const validaRoles = require("../middlewares/validar-roles");

module.exports = {
    ...validaCampos,
    ...validarJWT,
    ...validaRoles
}