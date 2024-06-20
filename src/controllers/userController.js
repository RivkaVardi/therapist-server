const userService = require('../services/userService');

const getUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const login = async (req, res) => {

    const { userName, password } = req.body;

    if (!/^[a-zA-Z0-9א-ת_]+$/.test(userName) || userName.length < 4 || userName.length > 20)
        return res.status(400).json({ error: 'Username is not valid.' });
    if (password.length < 6 || password.length > 20)
        return res.status(400).json({ error: 'Password is not valid.' });

    try {
        const isUserExist = await userService.login(req.body);
        res.status(201).json(isUserExist);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = {
    getUsers,
    login
};
