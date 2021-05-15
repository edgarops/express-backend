require("dotenv").config();

module.exports={
    dialect:"postgres",
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE_URL,
    //use_env_variable: process.env.DATABASE_URL,
    define: {
        timestamps: true,
        underscored: true
    }
}
