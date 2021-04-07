const { request, response } = require("express");
const jwt = require("jsonwebtoken");

module.exports = (request, response, next) => {
    const authHeader = request.headers.authorization;

    if (!authHeader) return response.status(401).send({error: "No autorizado"});

    const parts = authHeader.split(" ");

    if(parts.length !==  2) 
        return response.status(401).send({error: "Token error"});

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) 
        return response.status(401).send({error: "Token mal formateado"});

    jwt.verify(token, process.env.SIGNATURE_TOKEN, (error, decode) => {
        if(error) return response.status(401).send({error: "Token invalido"});

        request.userId = decode.id;
        return next();
    })
}