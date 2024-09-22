import { render } from 'ejs';
import { Account } from '../models/index-model.js';

export const loginController = {

    renderLoginPage: (req, res) => {
        res.render('login', {
            title: 'Login',
        });
    },

    loginAccount: (req, res) => {
        const { email, password } = req.body;
        const account = await Account.findOne({ email });
        if (account) {
            if (account.password === password) {
                res.redirect('/accueil');
            } else {
                res.redirect('/login');
            }
        } else {
            res.redirect('/login');
        }
    }

    renderRegisterPage: (req, res) => {
        
    },
}
