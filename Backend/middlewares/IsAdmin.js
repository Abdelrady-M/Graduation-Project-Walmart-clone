
const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const dotenv = require('dotenv');
const userModel = require('../models/usersModel');

dotenv.config();

const isAdmin = async (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Access denied. Token is missing.' });
    }

    try {
        const decoded = await promisify(jwt.verify)(token, process.env.ACCESS_TOKEN_SECRET);

        if (decoded) {
            // Query based on _id
            const user = await userModel.findById(decoded._id);

            if (user && user.role === 'admin') {
                req.userId = decoded._id
                next();
            } else {
                return res.status(403).json({ message: 'Permission denied. Admin role required.' });
            }
        }
    } catch (error) {
        return res.status(403).json({ message: 'Invalid token.' });
    }
};

module.exports = isAdmin;
