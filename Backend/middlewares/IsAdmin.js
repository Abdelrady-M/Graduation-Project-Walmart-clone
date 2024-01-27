const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const dotenv = require('dotenv');
const userModel = require('../models/usersModel'); // Import your user model

dotenv.config();

const isAdmin = async (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Access denied. Token is missing.' });
    }

    try {
        const decoded = await promisify(jwt.verify)(token, process.env.ACCESS_TOKEN_SECRET);

        if (decoded) {
            // Query based on user_id as a number
            const user = await userModel.findOne({ user_id: parseInt(decoded.user_id) });
            console.log(user);

            if (user && user.role === 'admin') {
                req.user_id = Number(decoded.user_id);
                next();
            } else {
                // User doesn't have 'admin' role or user not found, send forbidden status
                return res.status(403).json({ message: 'Permission denied. Admin role required.' });
            }
        }
    } catch (error) {
        return res.status(403).json({ message: 'Invalid token.' });
    }
};

module.exports = isAdmin;
