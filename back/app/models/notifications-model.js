// notifications-model.js
import { Model, DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

export class Notifications extends Model {}

Notifications.init({
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
    message: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    isRead: {
        type: DataTypes.BOOLEAN,
        field: 'is_read',
        defaultValue: false
    },
    createdAt: {
        type: DataTypes.DATE,
        field: 'created_at'
    }
}, {
    sequelize,
    tableName: 'notifications',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: false // Il n'y a pas de colonne updated_at dans votre table
});