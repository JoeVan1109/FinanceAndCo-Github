import 'dotenv/config';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('financeandco', 'financeadmin', 'hondarae108', {
    host: 'localhost',
    dialect: 'postgres',
    define: {
        timestamps: false, // Désactivez les timestamps par défaut pour tous les modèles
        underscored: true
    }
});

export default sequelize;