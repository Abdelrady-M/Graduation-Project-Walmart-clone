const user = require('../models/usersModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require("dotenv").config();

const getAllUsers = async (req, res) => {
    try {
        const usersList = await user.find();
        return res.json(usersList);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const storeNewUser = async (req, res) => {
    try {
        let newUser = req.body;
        const userCount = await user.countDocuments();
        console.log('User Count:', userCount);
        newUser.user_id = userCount + 1;
        newUser = await user.create(newUser);
        res.status(201).json({ data: newUser });
    } catch (err) {
        if (err.name === 'ValidationError') {
            console.error('Validation Errors:', err.errors);
            res.status(400).json({ message: 'Validation failed', errors: err.errors });
        } else {
            console.error('Error:', err);
            res.status(500).json({ message: err.message });
        }
    }
};

const getUserById = async (req, res) => {
    const { user_id } = req.params;

    try {
        const userRecord = await user.findOne(user_id);

        if (!userRecord) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(201).json(userRecord);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const editUser = async (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const update = req.body;

    try {
        const editedUser = await user.findOneAndUpdate(
            { user_id: userId },
            { $set: update },
            { new: true, runValidators: true }
        );
        if (editedUser) {
            res.status(200).json({ message: 'User edited successfully', user: editedUser });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const deleteUser = async (req, res) => {
    const userId = parseInt(req.params.id, 10);

    try {
        const deletedUser = await user.findOneAndDelete({ user_id: userId });

        if (!deletedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json({ message: 'User account deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const login = async function (req, res, next) {
    const { email, password_hash } = req.body;

    if (!email || !password_hash) {
        return res.status(400).json({ message: "You must provide a valid email and password" });
    }

    try {
        const userRecord = await user.findOne({ email });

        if (!userRecord) {
            return res.status(401).json({ message: "Invalid email and password" });
        }
        const isValid = await bcrypt.compare(password_hash, userRecord.password_hash);
        if (!isValid) {
            return res.status(401).json({ message: "Invalid email and password" });
        }

        const token = jwt.sign({
            email: userRecord.email,
            user_id: userRecord.user_id,
        }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1h" });

        res.status(200).json({ token: token });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getAllUsers,
    storeNewUser,
    getUserById,
    editUser,
    deleteUser,
    login
};
