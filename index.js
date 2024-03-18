var express= require("express");
var app= express();
const mongoose= require("mongoose");


//this command is to tell which view engine we are using for our project 
app.set("view engine", "ejs");

const myStudent= require("./Models/StudentModel")

const myFees=require("./Models/FeesModel")

app.get("/student",(req, res)=>{
    res.send("This is my first express program")
});


app.get("/Home",(req,res)=>{
    res.render("Home")
})

app.get("/Services",(req,res)=>{
    res.render("Services")
})

app.get("/About",(req,res)=>{
    res.render("About")
})

app.get("/Contact",(req,res)=>{
    res.render("Contact")
})

app.get("/Blog",(req,res)=>{
    res.render("Blog")
})



mongoose.connect("mongodb://127.0.0.1:27017/cybStudent");

app.listen(8000,()=>{
    console.log("App running on Port :8000");
})


//EJS is embedded javascript