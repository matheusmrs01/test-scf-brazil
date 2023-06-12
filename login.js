const jwt = require('jsonwebtoken');
var data =  require("./fakeData");

module.exports = (req, res) => {
    const { id } = req.body;

    if (!id){
        return res.status(400).send({message: "Identifier not provided."});
    }

    const user = data.find(user => user.id === id);

    if (!user){
        return res.status(400).send({message: "User not found."});
    }

    const token = jwt.sign(user, 'secretCodingCode');

    res.status(200).send({ token });
};
