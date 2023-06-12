var data =  require("./fakeData");

module.exports = function(req, res){
    let { name } =  req.query;
    let users = data.filter(user => user.name.includes(name));

    res.send({ message: `Usuário ${name} foi lido ${users.length} vezes.` });
};