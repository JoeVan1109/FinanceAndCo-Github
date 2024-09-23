// financial-goals-model.js
import { Model, DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

export class FinancialGoals extends Model {}

FinancialGoals.init({
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
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    targetAmount: {
        type: DataTypes.DECIMAL(10, 2),
        field: 'target_amount',
        allowNull: false
    },
    currentAmount: {
        type: DataTypes.DECIMAL(10, 2),
        field: 'current_amount',
        defaultValue: 0
    },
    deadline: {
        type: DataTypes.DATEONLY
    },
    createdAt: {
        type: DataTypes.DATE,
        field: 'created_at'
    }
}, {
    sequelize,
    tableName: 'financial_goals',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: false // Il n'y a pas de colonne updated_at dans votre table
});