const user = require('../models/usersModel')
const bcrypt = require('bcrypt');

const getAllUsers = async (req, res) => {
    try {
        const usersList = await user.findAll();
        return res.json(usersList);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const storeNewUser = async (req, res) => {
    const { username, password_hash, email, } = req.body;

    try {
        const encryptedPassword = await bcrypt.hash(password_hash, 10);

        const newUser = await user.create(
            {
                user_name: username,
                user_password: encryptedPassword,
                email: email
            }
        )
        return res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getUserById = async (req, res) => {
    const { user_id } = req.params;

    try {
        const user = await user.findAll({
            where: { user_id: user_id }
        });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        };

        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const editUser = async (req, res) => {
    const { user_id } = req.params;
    const { username, password_hash } = req.body;

    try {
        const updatedUser = await user.update(
            {
                user_name: username,
                user_password: password_hash
            },
            { where: { user_id: user_id } }
        );

        return res.status(200).json(updatedUser);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteUser = async (req, res) => {
    const { user_id } = req.params;

    try {
        const account = await user.findByPk(user_id);

        if (!account) {
            return res.status(404).json({ error: 'User not found' });
        }

        await user.destroy({
            where: { user_id: user_id }
        });

        res.json({ message: 'User account deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getAllUsers, getUserById, editUser, storeNewUser, deleteUser };