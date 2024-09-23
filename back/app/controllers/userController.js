import  { Users } from '../models/index-model.js';

export const userController = {
    getUser: async (req, res) => {
        const user = await Users.findAll();

        res.json(user);
    }
}