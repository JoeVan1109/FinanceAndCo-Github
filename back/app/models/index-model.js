import { FinancialGoals } from './financialgoals-model.js';
import { Notifications } from './notifications-model.js';
import { UserSettings } from './user-settings-model.js';
import { Users } from './users-model.js';
import { Categories } from './categories-model.js';
import { Transactions } from './transactions-model.js';
import { Budgets } from './budgets-model.js';


Users.hasOne(UserSettings, { 
    as: 'user_setting',
    foreignKey: {
        name: 'user_id',
        allowNull: false,
    },
});

UserSettings.belongsTo(Users, {
    as: 'user',
    foreignKey: {
        name: 'user_id',
        allowNull: false,
    },
});

Users.hasMany(Transactions, {
    as: 'transactions',
    foreignKey: {
        name: 'user_id',
        allowNull: false,
    },
    onDelete: 'CASCADE',
});

Transactions.belongsTo(Users, {
    as: 'user',
    foreignKey: {
        name: 'user_id',
        allowNull: false,
    },
});

Users.hasMany(Budgets, {
    as: 'budgets',
    foreignKey: {
        name: 'user_id',
        allowNull: false,
    },
});

Budgets.belongsTo(Users, {
    as: 'user',
    foreignKey: {
        name: 'user_id',
        allowNull: false,
    },
});

Users.hasMany(FinancialGoals, {
    as: 'financial_goals',
    foreignKey: {
        name: 'user_id',
        allowNull: false,
    },
});

FinancialGoals.belongsTo(Users, {
    as: 'user',
    foreignKey: {
        name: 'user_id',
        allowNull: false,
    },
});

Users.hasMany(Notifications, {
    as: 'notifications',
    foreignKey: {
        name: 'user_id',
        allowNull: false,
    },
});

Notifications.belongsTo(Users, {
    as: 'user',
    foreignKey: {
        name: 'user_id',
        allowNull: false,
    },
});

Categories.hasMany(Transactions, {
    as: 'transactions',
    foreignKey: {
        name: 'category_id',
        allowNull: false,
    },
});

Transactions.belongsTo(Categories, {
    as: 'category',
    foreignKey: {
        name: 'category_id',
        allowNull: false,
    },
});

Categories.hasMany(Budgets, {
    as: 'budgets',
    foreignKey: {
        name: 'category_id',
        allowNull: false,
    },
});

Budgets.belongsTo(Categories, {
    as: 'category',
    foreignKey: {
        name: 'category_id',
        allowNull: false,
    },
});


export {
    Users,
    Categories,
    Transactions,
    Budgets,
    FinancialGoals,
    Notifications,
    UserSettings,
};