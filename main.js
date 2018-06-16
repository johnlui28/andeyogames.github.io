var express = require("express");
var main = express();

main.get("/", function(req, res){
   res.render("homePage.ejs");
});

main.get("/about",function(req, res){
   res.render("aboutPage.ejs"); 
});

main.get("/community", function(req, res){
   res.render("communityPage.ejs"); 
});

main.get("/support", function(req, res){
   res.render("supportPage.ejs"); 
});

main.get("/login", function(req, res){
   res.render("loginPage.ejs");
});

main.get("/gamePage", function(req, res){
   res.render("gamePage.ejs");
});

main.listen(process.env.PORT, process.env.IP,function(){
    console.log("Server Active!");
});
