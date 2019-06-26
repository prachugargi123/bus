
var express = require('express');
var app=express();

var DetailsController=function(req,res){

console.log("Business Entity");
var details=
[
{businessId:1,Department:"HR",Name:"shruti", description:"Hr Deparment ",salary:"above 400000", Account:"Saving"},
{businessId:2,Department:"Employee", Name:"Sayali", description:"Employee Department",salary:"below 400000",Account:"Current"},
{businessId:3,Department:"Manager", Name:"Megha", description:"Manager Department",salary:"400000" ,Account:"Saving"},
{businessId:4,Department:"Worker",Name:"prachi", description:"Worker section",salary:"below 200000", Account:"Current"},
{businessId:5,Department:"other staff", Name:"pooja", description:"other work",salary:"below 10000", Account:"Current"},
];
res.send(details);
};

app.get('/details',DetailsController);

var server=app.listen(4000,function(req,res)
{
	
console.log("details are provided by http://localhost:4000");	
}
)




