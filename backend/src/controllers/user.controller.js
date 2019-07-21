const usersCtrl = {};
const User = require('../models/User')

usersCtrl.getUsers = async (req, res) => {
    const users = await User.find()
    res.json(users);
};

usersCtrl.createUser = async (req, res) => {
    const { userName } = req.body
    const newUser = new User({userName})
    await newUser.save()
    res.json("User created");
};

usersCtrl.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
    res.json("User deleted")
};

module.exports = usersCtrl;