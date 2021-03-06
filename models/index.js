const Sequelize = require("sequelize")
const bd = require("./bd");


const Usuario = bd.define("Usuario", {
    nombres: {
        type: Sequelize.STRING(50),
        unique:  true
    },
    apellidos: {
        type: Sequelize.STRING(50),
        unique:  true
    },
    correo: {
        type: Sequelize.STRING(50),
        unique:  true
    },
    clave: Sequelize.STRING(30),
    estado: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
});

module.exports = {
    Usuario

}