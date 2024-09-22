import { Users } from './Users.js';
import { Category } from './Category.js';
import { Transaction } from './Transaction.js';
import { Budget } from './Budget.js';
import { FinancialGoal } from './FinancialGoal.js';
import { Notification } from './Notification.js';
import { UserSetting } from './UserSetting.js';
import { Client } from './Client.js';

Users.hasOne(UserSetting, { 
    as: 'user_setting',
    foreignKey: {
        name: 'user_id',
        allowNull: false,
    },
});

UserSetting.belongsTo(Users, {
    as: 'user',
    foreignKey: {
        name: 'user_id',
        allowNull: false,
    },
});

Users.hasMany(Transaction, {
    as: 'transactions',
    foreignKey: {
        name: 'user_id',
        allowNull: false,
    },
});

Transaction.belongsTo(Users, {
    as: 'user',
    foreignKey: {
        name: 'user_id',
        allowNull: false,
    },
});

Users.hasMany(Budget, {
    as: 'budgets',
    foreignKey: {
        name: 'user_id',
        allowNull: false,
    },
});

Budget.belongsTo(Users, {
    as: 'user',
    foreignKey: {
        name: 'user_id',
        allowNull: false,
    },
});

Users.hasMany(FinancialGoal, {
    as: 'financial_goals',
    foreignKey: {
        name: 'user_id',
        allowNull: false,
    },
});

FinancialGoal.belongsTo(Users, {
    as: 'user',
    foreignKey: {
        name: 'user_id',
        allowNull: false,
    },
});

Users.hasMany(Notification, {
    as: 'notifications',
    foreignKey: {
        name: 'user_id',
        allowNull: false,
    },
});: 

Notification.belongsTo(Users, {
    as: 'user',
    foreignKey: {
        name: 'user_id',
        allowNull: false,
    },
});

Category.hasMany(Transaction, {
    as: 'transactions',
    foreignKey: {
        name: 'category_id',
        allowNull: false,
    },
});

Transaction.belongsTo(Category, {
    as: 'category',
    foreignKey: {
        name: 'category_id',
        allowNull: false,
    },
});

Category.hasMany(Budget, {
    as: 'budgets',
    foreignKey: {
        name: 'category_id',
        allowNull: false,
    },
});

Budget.belongsTo(Category, {
    as: 'category',
    foreignKey: {
        name: 'category_id',
        allowNull: false,
    },
});


export {
    Users,
    Category,
    Transaction,
    Budget,
    FinancialGoal,
    Notification,
    UserSetting,
    Client,
};