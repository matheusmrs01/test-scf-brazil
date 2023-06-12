var data =  require("./fakeData");

module.exports =  function(req, res) {
    const { id } = req.query;
    let { name, job } =  req.body;
    let user = data.find(user => user.id === parseInt(id));

    if(!user){
        return res.status(402).send({ message: `User with id ${id} not found.` });
    }

    let updatedUser = {
        ...user, 
        name, 
        job
    };

    data[data.indexOf(user)] = updatedUser

    return res.status(200).send(updatedUser);
};