import { Users } from '../models/index-model.js';

export const loginController = {

    loginAccount: (req, res) => {
        try {

            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).json({ message: 'Les champs sont obligatoires' });
            }
            if (email === Users.email && password === Users.password) {
                res.status(200).json({ message: 'Connexion réussie' });
                res.redirect('/home');
            }

        } catch (error) {
            console.log(error);
        }
    }
}
