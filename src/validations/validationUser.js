const {check} = require("express-validator")

const ValidationsUser = {
    withPassword: [
        check("name", "Ingrese su nombre completo").not().isEmpty(),
        check("username", "Ingrese su usuario").not().isEmpty(),
        check("email", "Agrega un email valido").isEmail(),
        check("password", "El password debe ser minimo de 6 caracteres").isLength({min: 6}),

    ],
    withoutPassword: [
        check("name", "Ingrese su nombre completo").not().isEmpty(),
        check("email", "Agrega un email valido").isEmail()
    ],
    password:[
        check("password", "El password debe ser minimo de 6 caracteres").isLength({min: 6}),
        check("password_confirm", "El password debe ser minimo de 6 caracteres").isLength({min: 6})
    ]
};

module.exports = ValidationsUser;