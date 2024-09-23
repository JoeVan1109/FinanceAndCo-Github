import { Model, DataTypes } from 'sequelize';
import { client } from './client.js';



export class Users extends Model {}

Users.init({
    username: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,  // Cela vérifie que c'est un format d'email valide
        }
    },
    }, {
    sequelize: client,
    modelName: 'Users',
    tableName: 'users',
    timestamps: false, // Désactive createdAt et updatedAt

});