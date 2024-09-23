// users-model.js
import { Model, DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

export class Users extends Model {}

Users.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        field: 'created_at'
    }
}, {
    sequelize,
    tableName: 'users',
    timestamps: false, // Désactivez complètement les timestamps
    createdAt: 'created_at',
    updatedAt: false // Il n'y a pas de colonne updated_at dans votre table
});