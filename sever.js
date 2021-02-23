const express = require("express");
const app = express();

//so either it is listening on a server OR the local host
const PORT = process.env.PORT || 8080;


//adding requireds for the routs pages
require("./routes/api")(app);
require("./routes/html")(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//directing to public files for html docts and assets
app.use(express.static(__dirname + '/public'));




app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});