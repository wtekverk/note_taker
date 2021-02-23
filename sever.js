const express = require("express");
const app = express();

//so either it is listening on a server OR the local host
const PORT = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));


require("./routes/api")(app);
require("./routes/html")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});