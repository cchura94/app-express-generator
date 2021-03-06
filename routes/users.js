var express = require('express');
var router = express.Router();
var usuario = require("./../models/index").Usuario

var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
 

/* GET users listing. */
router.get('/', function(req, res, next) {
  usuario.findAll().then(datos => {
    res.render('usuarios', { title: 'Lista de Usuarios', usuarios: datos });
  }).catch(error => {
    res.send("Error de la consulta");
  })
  
});

router.get("/nuevo", function(req, res){
  res.render('usuario/nuevo_usuario', { title: 'Nuevo Usuario' });
});

router.post("/", upload.single('foto'), async function(req, res){
  const dato = await usuario.create(req.body);
  res.redirect("/users");
});

module.exports = router;
