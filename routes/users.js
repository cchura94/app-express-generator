var express = require('express');
var router = express.Router();
var usuarioController = require("./../controllers/UsuarioController")


var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
 

/* GET users listing. */
router.get('/', usuarioController.listar);
router.get("/nuevo", usuarioController.crear);
router.post("/", upload.single('foto'), usuarioController.guardar);
router.post("/:id", usuarioController.eliminar);
router.post("/:id/modificar", usuarioController.modificar);

module.exports = router;
