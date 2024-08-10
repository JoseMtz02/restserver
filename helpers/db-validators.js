const { Usuario, Categoria, Producto } = require('../models');
const Role = require('../models/role');



const esRoleValido = async(role = '') => {
    const existeRol = await Role.findOne({role});
    if(!existeRol) {
      throw new Error(`El rol ${role} no esta registrado en la BD`);
    }
  }

const emailExiste = async(correo = '') => {
    // Verificar si el correo existe
    const existeEmail = await Usuario.findOne({correo});
    if (existeEmail){
        throw new Error(`El correo ${correo} ya esta registrado`);
    }
}

const existeUsuarioPorId = async(id) => {
  // Verificar si el id existe
  const existeUsuario = await Usuario.findById(id);
  if (!existeUsuario){
      throw new Error(`El id no existe ${id}`);
  }
}

const existeCategoriaPorId = async(id) => {
  // Verificar si el id existe
  const existeCategoria = await Categoria.findById(id);
  if (!existeCategoria){
      throw new Error(`El id no existe ${id}`);
  }
}

const existeProductoPorId = async(id) => {
  // Verificar si el id existe
  const existeProducto = await Producto.findById(id);
  if (!existeProducto){
      throw new Error(`El id no existe ${id}`);
  }
}

module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorId,
    existeCategoriaPorId,
    existeProductoPorId
}