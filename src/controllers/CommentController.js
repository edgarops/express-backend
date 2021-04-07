const { validationResult } = require("express-validator");

const Photo = require("../models/Photo");
const Comment = require("../models/Comment");

module.exports = {
    async store(request, response){
        const { body } = request.body;
        const { photo: photo_id } = request.params;

        const errors = validationResult(request);
        if(!errors.isEmpty()) return response.status(400).json({errors: errors.array()});

        const post = await Photo.findByPk(photo_id);
        if(!post) return response.status(400).send({ message: "La publicacion no existe!"});

        const comment = await Comment.create({
            user_id: request.userId,
            photo_id,
            body
        });

        const newComment = await Comment.findByPk(comment.id, {
            attributes: ["id", "photo_id", "user_id", "body", "createdAt"],
            include: {
                association: "postedBy",
                attributes: ["username", "avatar_url"]
            }
        });

        return response.json(newComment);
    },

    async update(request, response){
        const { body } = request.body;
        const { idComment: id } = request.params;

        const errors = validationResult(request);
        if(!errors.isEmpty()) return response.status(400).json({errors: errors.array()});

        const comment = await Comment.findByPk(id);

        if(!comment) return response.status(400).send({ message: "El comentario no existe"});
        if(comment.user_id != request.userId) return response.status(401).send({ message: "No autorizado"});

        const newComment = await comment.update({ body });

        return response.json( newComment );
    },

    async destroy(request, response){

        const { idComment: id} = request.params;

        const comment = await Comment.findByPk(id);

        if(!comment) return response.status(400).send({ message: "El comentario no existe"});
        if(comment.user_id != request.userId) return response.status(401).send({ message: "No autorizado"});

        await comment.destroy();

        return response.send();
    }
}