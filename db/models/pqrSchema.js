import { DataTypes } from "sequelize";

export function definePqrs(sequelize){
    sequelize.define( 'pqrs', {
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title : {
            type: DataTypes.STRING,
            allowNull : false
        },
        description : {
            type: DataTypes.STRING,
            allowNull : false
        },
        category : {
            type: DataTypes.STRING,
            allowNull : false
        },
        email : {
            type: DataTypes.STRING,
            allowNull : false
        },
        name : {
            type: DataTypes.STRING,
            allowNull : false
        },
    
        
    })
}
    