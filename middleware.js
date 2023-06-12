const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    if (!req.headers['authorization']) {
        return res.status(400).send({ message: "Token not provided." })
    }

    const tokenDecode = jwt.verify(req.headers['authorization'], 'secretCodingCode')

    if (!tokenDecode) {
        return res.status(401).send({ message: "Token is not valid." })
    }

    next()
};
