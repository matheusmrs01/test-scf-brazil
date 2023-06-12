const jwt = require('jsonwebtoken');
var data =  require("./fakeData");

module.exports =  function(req, res) {
    let tokenDecode = jwt.decode(req.headers['authorization'])

    if (!tokenDecode.permissions.includes('update')){
        return res.status(401).send({ message: 'Not authorized.' })
    }

    const { id } = req.query;
    let { name, job, permissions } =  req.body;
    let user = data.find(user => user.id === parseInt(id));

    if (!user){
        return res.status(402).send({ message: `User with id ${id} not found.` });
    }

    let updatedUser = {
        ...user, 
        name, 
        job,
        permissions
    };

    data[data.indexOf(user)] = updatedUser

    return res.status(200).send(updatedUser);
};