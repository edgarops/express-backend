const {Model, DataTypes} = require("sequelize");

class Follow extends Model {
    static init(sequelize){
        super.init(
            {
                user_from: DataTypes.INTEGER,
                user_to: DataTypes.INTEGER
            }, 
            {
                sequelize,
                tableName: "follows" //forzamos el llamado a esta tabla
            }
        );
    }

    static associate(models){
        this.belongsTo(models.User, {
            foreignKey: "user_from", as: "fromFollows"
        });
        this.belongsTo(models.User, {
            foreignKey: "user_to", as: "getUserFollows"
        });
    }
}

module.exports = Follow;