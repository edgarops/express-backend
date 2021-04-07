'use strict';
//npx npx sequelize -h
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('photos', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference:{
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      body: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      key: {
        type: Sequelize.STRING,
        allowNull: false
      },
      photo_url: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
     });
     
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('photos');
    
  }
};
