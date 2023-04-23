const router = require("express").Router();
const {
  formGetCtrl,
  formPostCtrl,
  getUploadPage,
  getUploadData,
} = require("./controller");
const { upload } = require("../../config/multer");

router.get("/cloud-upload-form", formGetCtrl);
router.post("/cloud-upload-data", upload.single('image'), formPostCtrl);

router.get("/get-data", getUploadData); 
router.get("/get-data-page", getUploadPage);

module.exports = router;
