let express = require("express");

let PORT = process.env.PORT || 8020;

let app = new express();

app.get("/hello", function (req, res) {
  let name = req.query.name;
  if (name) {
    res.send(`Hello there ${name}, how are you?`);
  } else {
    res.json("Hello There Stranger, how are you?");
  }
});

app.listen(PORT, function () {
  console.log("App started on port", PORT);
});
