import { definePqrs } from './pqrSchema.js'



export function defineModels(sequelize){
    definePqrs(sequelize)
}