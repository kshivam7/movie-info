const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("react-app"))

app.get("*", (req, res) => {
  const html = path.resolve(__dirname, "./react-app/index.html");
  return res.sendFile(html);
});

app.listen(process.env.PORT, () => console.log("Server started on port 3000!"));
