import { Users } from '../models/users-model.js';

export default {
    loginAccount: async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await Users.findOne({ where: { email } });
            if (user && user.password === password) { // Note: Utilisez un hachage de mot de passe en production
                res.status(200).json({ message: 'La connexion est un succès' });
            } else {
                res.status(401).json({ message: 'Email ou mot de passe incorrect' });
            }
        } catch (error) {
            console.error('Erreur de connexion:', error);
            res.status(500).json({ message: 'Erreur interne du serveur' });
        }
    }
};