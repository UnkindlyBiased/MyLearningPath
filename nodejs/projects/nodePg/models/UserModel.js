import DataTypes from 'sequelize'
import pgSequelize from '../sequelizeExp.js';

const UserModel = pgSequelize.define('User', {
    UserName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    UserDesc: {
        type: DataTypes.STRING
    }
})

UserModel.sync({alter: true})

export default UserModel