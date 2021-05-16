require("dotenv").config();

module.exports={
    
        //use_env_variable: "DATABASE_URL",
        sqlConnectionUrl: process.env.DATABASE_URL,
        //dialect: "postgres",
        sqlDialect: 'postgres',
        storageMethod: 'sql',
        sqlConnectionSsl: true,
        /*dialectOptions: {
            ssl: true,
            rejectUnauthorized: false,
        }*/
        sqlDialectOptions: {ssl: true},
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
