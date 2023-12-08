const File = require("../models/fileModel");

const route = require("express").Router();

route.post("/", (req, res) => {
  const newFiles = new File({
    file: req.body.file,
  });
  const fileD = newFiles.save();
  res.status(200).json(fileD);
});

module.exports = route;
