var data =  require("./fakeData");

const getUser = ( req, res, next ) => {
    let { name } =  req.query;
    let user = data.find(user => user.name === name);

    res.status(user ? 200 : 404).send(user ? user : { message: 'User not found.' })
};

const getUsers = ( req, res, next ) => {
    res.send(data);
};

module.exports = {
    getUser,
    getUsers
};