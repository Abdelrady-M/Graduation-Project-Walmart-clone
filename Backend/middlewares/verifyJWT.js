const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.sendStatus(401);
    }
    const token = authHeader.split(' ')[1];

    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if (err) return res.status(403).json({ 'message': err });

            if (!req.user) {
                req.user = {};
            }

            req.user.user_id = decoded.user_id;
            req.user.user_name = decoded.user_name;
            req.user.user_role = decoded.user_role;
        }
    )
    next();
};
module.exports = verifyJWT;