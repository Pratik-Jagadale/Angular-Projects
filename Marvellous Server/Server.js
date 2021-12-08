
express = require("express");

mongoose = require("mongoose"); /*no need to create object*/

obj = express();


obj.listen(9999, function(){
	console.log("Server Started at port 9999");
});

obj.get('/', function(req,res){
	res.send("Marvellous Server is Connected");
});

mongoose.connect("mongodb://localhost:27017/MarvellousDB",function(err){
	if(err){
		console.log("unable to connect");
	}	
	else{
		console.log("Connection with MongoDB is Successfull");
	}
});