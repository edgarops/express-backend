const { validationResult } = require("express-validator"); 
const User = require("../models/User");

const passwordCompare = require("./utils/passwordCompare");
const generateToken = require("./utils/generateToken");

//const { login } = require("../validations/validationAuth");

module.exports = {
    
    async me(request, response){
        //console.log('Llego a me');
        const user = await User.findByPk(request.userId, {
            attributes: ['id', 'username', 'name', 'avatar_url']
        });

        //request.redis.setex(request.userId, 3600, JSON.stringify(user));

        return response.json(user);
    },
    
    async login(request, response){
        const { username, password } = request.body;

        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }

        let user = await User.findOne({where: {username}});
        if(!user) 
        return response.status(400).send({ message: "Verifique sus credenciales"});

        if(!(await passwordCompare(password, user.password))) 
        return response.status(400).send({ message: "Verifique sus credenciales"});

        const payload = {id: user.id, username: user.username};
        const token = generateToken(payload);

        return response.json({ token });
    }
};