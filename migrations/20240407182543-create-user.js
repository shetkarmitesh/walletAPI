'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
     
      name: {
        allowNull:false,
      type:Sequelize.STRING(255),

      },
      email: {
        allowNull:false,
      type:Sequelize.STRING(255),
      unique:true
      },
      password: {
        type:Sequelize.STRING(255),
        allowNull:false
      }
      ,status: {
          allowNull:false,
          type:Sequelize.ENUM('0','1'),
          defaultValue:1
      },logincount: {
          allowNull:false,
          type:Sequelize.INTEGER,
    
        },
        lastlogin: {
          allowNull:false,
          type:Sequelize.DATE
        },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });


  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};