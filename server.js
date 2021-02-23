
//requiring express to connect the front and back end 
const express = require("express");

//creates a new instance of express
const app = express();

//listen on server or localhost
const PORT = process.env.PORT || 8080;

//needed to work with express 
//parses through the URL (how you get html pages to be read and processed)
app.use(express.urlencoded({ extended: true }));
//middle ware gets info in JSON so look at the requests as a JSON 
app.use(express.json());
//showing where the web pages are going 
app.use(express.static(__dirname + '/public'));

//attaching routs 
require("./routes/api")(app);
require("./routes/html")(app);

app.listen(PORT, function() {
  console.log(`App listening on PORT: ${PORT}`);
});