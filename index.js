const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const catagories = require("./data/catagories.json");
const news = require("./data/news.json");

app.use(cors());

app.get("/", (req, res) => res.send("Dragon is running"));
app.get("/catagories", (req, res) => res.send(catagories));
app.get("/catagories/:id", (req, res) => {
  const givenID = req.params.id;
  if (givenID == 0) res.send(news);
  else {
    const catagorySpecificNews = news.filter(
      ({ category_id }) => category_id === givenID
    );
    res.send(catagorySpecificNews);
  }
});

app.get("/news", (req, res) => res.send(news));
app.get("/news/:id", (req, res) => {
  const givenID = req.params.id;
  const foundNews = news.find(({ _id }) => _id === givenID);
  res.send(foundNews);
});

app.listen(port, () => {
  console.log("App is listening for requests");
});
