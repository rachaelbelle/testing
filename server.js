// DEPENDENCIES
var express = require('express');
var exphbs = require('express-handlebars');
var routes = require("./routes/routes");
var PORT = process.env.PORT || 8080;
var db = require('./models')

// START EXPRESS
var app = express();

//Public Folders
app.use(express.static('public'));
// name=Rachael;
// var subject = {
//   "name" : Rachael
// }

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Template Engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//Routes
//pass routes in express
app.use(routes);

//START PROJECT CALLING PORT IN LINSTENING EXPRESS
// app.listen(PORT, function() {
//   console.log('Server listening' + PORT);
// });

db.sequelize.sync({
  force : true
}).then(function(){
  app.listen(PORT, function() {
    console.log('Server listening' + PORT);
  });
})
