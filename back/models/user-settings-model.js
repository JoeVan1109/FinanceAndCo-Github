import { Model, DataTypes } from 'sequelize';
import { client } from './client.js';

export class UserSettings extends Model {}

UserSettings.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        references: {
            model: 'users',
            key: 'id'
        }
    },
    theme: {
        type: DataTypes.STRING(20),
        defaultValue: 'light'
    },
    currency: {
        type: DataTypes.STRING(3),
        defaultValue: 'USD'
    },
    language: {
        type: DataTypes.STRING(5),
        defaultValue: 'en-US'
    }
}, {
    sequelize: client,
    tableName: 'user_settings',
    timestamps: false
});