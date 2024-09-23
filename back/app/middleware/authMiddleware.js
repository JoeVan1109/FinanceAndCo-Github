// Vérifie si l'utilisateur est connecté

const authMiddleware = (req, res, next) => {
    if (req.session && req.session.userId) {
        next();
    } else {
        res.redirect('/login');
    }
};

module.exports = authMiddleware;