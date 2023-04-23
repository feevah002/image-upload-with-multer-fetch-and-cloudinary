const mongoose = require("mongoose");

const CloudUploadSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
  },
  text: {
    type: String,
  },
});

module.exports = mongoose.model("CloudUpload", CloudUploadSchema);
