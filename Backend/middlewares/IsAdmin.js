const isAdmin = (req, res, next) => {
    const { user_role } = req.user;

    if (user_role === 'admin') {
        next();
    } else {
        return res.status(403).json({ message: 'Permission denied' });
    }
};

module.exports = isAdmin;