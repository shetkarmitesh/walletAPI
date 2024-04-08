'use strict';
const {
  Model,
  DATE
} = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   User.init({
//     id: DataTypes.INTEGER,
//     name: DataTypes.STRING,
//     email: DataTypes.STRING,
//     password: DataTypes.STRING
//     // status: DataTypes.ENUM,
//     // balance: DataTypes.INTEGER,
//     // logincount: DataTypes.INTEGER,
//     // lastlogin: DataTypes.DATE,

//     //manual
//     // id:{
//     //   type:Sequelize.INTEGER,
//     //   allowNull:false,
//     //   primaryKey:true,
//     //   autoIncrement:true
//     //  },
//     // name: {
//     //   allowNull:false,
//     //   type:Sequelize.STRING(255),
//     // },
//     // email: {
//     //   allowNull:false,
//     //   type:Sequelize.STRING(255),
//     //   unique:true

//     // },
//     // password: {
//     //   type:Sequelize.STRING(255),
//     // allowNull:false
// // 

//     // },
//     // status: {
//     //   allowNull:false,
//     //   type:Sequelize.ENUM('0','1'),
//     //   defaultValue:1
//     // },
//     // balance: {
//     //   allowNull:false,
//     //   type:Sequelize.INTEGER,
//     //   defaultValue:0


//     // },
//     // logincount: {
//     //   allowNull:false,
//     //   type:Sequelize.INTEGER,

//     // },
//     // lastlogin: {
//     //   allowNull:false,
//     //   type:Sequelize.DATE
//     // }
//   }, {
//     sequelize,
//     modelName: 'User',
//   });
//   return User;
// };
const Sequelize= require("sequelize");
module.exports=(sequelize,Sequelize)=>{
  const User = sequelize.define("Users",{
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
    },balance:{
      type:Sequelize.INTEGER,
      defaultValue:0 
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
  })
  return User;
}