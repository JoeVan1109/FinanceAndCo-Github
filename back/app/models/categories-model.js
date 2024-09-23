// categories-model.js
import { Model, DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

export class Categories extends Model {}

Categories.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    type: {
        type: DataTypes.ENUM('income', 'expense'),
        allowNull: false
    },
    iconPath: {
        type: DataTypes.STRING(255),
        field: 'icon_path'
    }
}, {
    sequelize,
    tableName: 'categories',
    timestamps: false
});