import 'dotenv/config';
import { Sequelize } from 'sequelize';

const client = new Sequelize(process.env.PG_URL);

try {
    await client.authenticate();
    console.log(`🚀 database connected`);
} catch (error) {
    console.error(`❌ unable to connect to database: ${error.message}`);
}

export default client;
