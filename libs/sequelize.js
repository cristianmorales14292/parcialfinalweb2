import { Sequelize } from 'sequelize';
import { defineModels } from '../db/models/index.js';


//option 2: passing parameters 
export const sequelize = new Sequelize({
    host: '127.0.0.1',
    port: '5432',
    username: 'postgres',
    'password': '123456',
    'database': 'pqrs',
    'dialect': 'postgres'
});


defineModels(sequelize)
sequelize.sync() //ojo utilizar en desarrollo, no en producción


try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  