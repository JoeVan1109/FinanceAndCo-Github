// user-settings-model.js
import { Model, DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

export class UserSettings extends Model {}

UserSettings.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    settingId: {
        type: DataTypes.INTEGER,
        field: 'setting_id',
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
    sequelize,
    tableName: 'user_settings',
    timestamps: false
});