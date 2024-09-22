import { Model, DataTypes } from 'sequelize';
import { client } from './client.js';



export class Categories extends Model {}

Categories.init({
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    type: {
        type: DataTypes.TEXT,
        allowNull: false,
    }, {
    sequelize: client,
    tableName: 'users',
});