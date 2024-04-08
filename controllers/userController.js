const express = require("express");
const Sequelize= require("sequelize");
const User=require("../models").User;
const bcrypt = require("bcrypt");

exports.userSignup=(req,res)=>{
    // let name="abc";
    res.status(200).json({
        status:1,
        message:"signup"
    })
}


