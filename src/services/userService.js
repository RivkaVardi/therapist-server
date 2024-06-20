const User = require('../models/userModel');

const getAllUsers = async () => {
    return await User.find();
};

const login = async (data) => {
    const res = await User.findOne({ userName: data.userName, password: data.password });
    return res;
};

module.exports = {
    getAllUsers,
    login
};
