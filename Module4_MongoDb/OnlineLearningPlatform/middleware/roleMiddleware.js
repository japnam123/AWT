const roleMiddleware = (role) => {
    return (req, res, next) => {
        if (req.user.role !== role) {
            return res.status(403).send('Forbidden: You do not have the right role');
        }
        next();
    };
};

module.exports = roleMiddleware;
