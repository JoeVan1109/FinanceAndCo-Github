import { Model, DataTypes } from 'sequelize';
import { client } from './client.js';



export class Categories extends Model {}

Categories.init({
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING(10),
        allowNull: false,
        validate: {
            isIn: [['income', 'expense']]
        }
    },
    }, {
    sequelize: client,
    tableName: 'users',
});