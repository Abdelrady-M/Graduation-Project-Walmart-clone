const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const dotenv = require('dotenv');

dotenv.config();

const verifyToken = async (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Access denied. Token is missing.' });
    }

    try {
        const decoded = await promisify(jwt.verify)(token, process.env.ACCESS_TOKEN_SECRET);
        req.userId = decoded._id; // Change to _id
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Invalid token.' });
    }
};

module.exports = verifyToken;
