import { Users, Categories, Transactions, Budgets, FinancialGoals, Notifications, } from '../models/index-model.js';

export const homeController = {
    getHome: async (req, res) => {
        const users = await Users.findAll({
            attributes: ['id', 'username', 'email']
        });
        const categories = await Categories.findAll({
            attributes: ['id', 'name', 'type']
        });
        const transaction = await Transactions.findAll();
        const budget = await Budgets.findAll();
        const financialGoal = await FinancialGoals.findAll();
        const notification = await Notifications.findAll();

        res.json({
            users,
            categories,
            transaction,
            budget,
            financialGoal,
            notification
        });
    }
}

