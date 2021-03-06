var usuario = require("./../models/index").Usuario

const listar = (req, res) => {
    // listar
    usuario.findAll().then(datos => {
        res.render('usuarios', { title: 'Lista de Usuarios', usuarios: datos });
      }).catch(error => {
        res.send("Error de la consulta");
      })
}

const crear = (req, res) => {
    // cargar el formulario de creacion de usuario
    res.render('usuario/nuevo_usuario', { title: 'Nuevo Usuario' });
}

const guardar = async (req, res) => {
    // guardar en la base de datos
    try{
        console.log(req.body)
        const dato = await usuario.create(req.body);
        res.redirect("/users");
    }catch(error){
        console.log("*****: ",error.errors)
        res.redirect("/users/nuevo");     
    }
  
}

const editar = (req, res) => {
    // cargar el formulario de edicion de un usuario
}

const modificar = async (req, res) => {
    // modificar un usuario en la base de datos
    console.log(req.body)
    console.log("*************",req.body)
    var id_u = req.params.id
    await usuario.update(req.body, {
        where: {
          id: id_u
        }
      });

    res.redirect("/users");

}

const eliminar = async (req, res) => {
    // eliminar un usuario
    var id_u = req.params.id
    console.log("eliminando...")
    await usuario.destroy({
        where: {
          id: id_u
        }
      });
      res.redirect("/users");
}

module.exports = {
    listar,
    crear,
    guardar,
    editar,
    modificar,
    eliminar
}
