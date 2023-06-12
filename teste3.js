var data =  require("./fakeData");

module.exports = function(req, res) {
    let { id } =  req.query;
    let user = data.find(user => user.id === parseInt(id));

    if (user){
        data.splice(data.indexOf(user), 1)
    }

    res.status(user ? 200 : 404).send(user ? { message: 'User removed successfully.' } : { message: 'User not found.' })
};