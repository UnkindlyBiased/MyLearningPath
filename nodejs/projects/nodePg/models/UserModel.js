import DataTypes from 'sequelize'
import pgSequelize from '../sequelizeExp.js';

const UserModel = pgSequelize.define('User', {
    UserName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    UserDesc: {
        type: DataTypes.STRING
    }
})

const UserDto = (userName, description) => {
    return {
        userName,
        description
    }
}

UserModel.sync({alter: true})

export default UserModel