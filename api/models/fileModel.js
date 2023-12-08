const mongoose = require("mongoose");

const fileSchema = mongoose.Schema(
  {
    files: {
      type: Array,
      default: "",
    },
  },
  { timestamps: true }
);

const File = new mongoose.model("File", fileSchema);
module.exports = File;
