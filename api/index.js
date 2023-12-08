require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const Port = process.env.PORT || 3080;
const mongoose = require("mongoose");
const fileRoute = require("./routes/fileRoute");
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("DB is connected"))
  .catch((error) => {
    console.log(error.meaage);
    process(exit);
  });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/file", fileRoute);

app.listen(Port, () => {
  console.log(`Server running at http://localhost:${Port}`);
});
