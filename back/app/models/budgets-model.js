// budgets-model.js
import { Model, DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

export class Budgets extends Model {}

Budgets.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        field: 'user_id',
        references: {
            model: 'users',
            key: 'id'
        }
    },
    categoryId: {
        type: DataTypes.INTEGER,
        field: 'category_id',
        references: {
            model: 'categories',
            key: 'id'
        }
    },
    amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    startDate: {
        type: DataTypes.DATEONLY,
        field: 'start_date',
        allowNull: false
    },
    endDate: {
        type: DataTypes.DATEONLY,
        field: 'end_date',
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        field: 'created_at'
    }
}, {
    sequelize,
    tableName: 'budgets',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: false // Il n'y a pas de colonne updated_at dans votre table
});