require("dotenv").config();

module.exports={
    
        use_env_variable: "DATABASE_URL",
        dialect: "postgres",
        
        dialectOptions: {
            ssl: true,
            rejectUnauthorized: false,
        }
        
    //dialect:"postgres"
    /*host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    use_env_variable: process.env.DATABASE_URL
    define: {
        timestamps: true,
        underscored: true
    }*/
    
    
}
