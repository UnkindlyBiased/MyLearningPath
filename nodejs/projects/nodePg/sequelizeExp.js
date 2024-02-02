import { Sequelize } from "sequelize"

const pgSequelize = new Sequelize('TestDB', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
    define: {
        timestamps: false
    }
})

export default pgSequelize