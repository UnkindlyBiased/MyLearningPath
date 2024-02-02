import DataTypes from 'sequelize'
import pgSequelize from '../sequelizeExp.js'

const ProductModel = pgSequelize.define('Product', {
    ProductName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    ProductDesc: {
        type: DataTypes.STRING
    },
    Price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    Seller: {
        type: DataTypes.INTEGER
    }
})

ProductModel.sync({alter: true})

export default ProductModel