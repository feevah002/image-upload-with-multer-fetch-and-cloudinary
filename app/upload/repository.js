const CloudUpload = require("./model");


exports.createUpload = async (payload) => {
  const data = await CloudUpload.create(payload);
  return data;
};

exports.getUploads = async () => {
  const data = await CloudUpload.find({});
  return data;
};