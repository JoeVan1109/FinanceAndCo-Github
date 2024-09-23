// database.js ou sequelize.js
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config(); // Charge les variables d'environnement depuis .env

const sequelize = new Sequelize('financeandco', 'votre_utilisateur', 'votre_mot_de_passe', {
  host: 'localhost',
  dialect: 'postgres',
  define: {
    underscored: true, // Utilise le snake_case pour les noms de colonnes
    timestamps: true, // Active les timestamps par défaut
    createdAt: 'created_at', // Nom par défaut pour createdAt
    updatedAt: false // Désactive updatedAt par défaut
  }
});

export default sequelize;