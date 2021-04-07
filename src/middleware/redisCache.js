module.exports = (request, response, next) =>{
    const {userId} = request;

    request.redis.get(userId, (err, data) => {
        if(err) throw err;

        if(data != null) {
            response.send(data);
        } else {
            next();
        }
    })
}