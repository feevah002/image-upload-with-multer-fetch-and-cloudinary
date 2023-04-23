const { createUpload, getUploads } = require("./repository");
const cloudinary = require("../../config/cloudinary");
const { upload } = require("../../config/multer");

/**
 * @author Ikenna Emmanuel <eikenna58@gmail.com>
 * @description get upload form
 * @route `/cloud-upload-form/`
 * @access Public
 * @type GET
 */
exports.formGetCtrl = async (req, res) => {
  res.render("uploadForm");
};

/**
 * @author Ikenna Emmanuel <eikenna58@gmail.com>
 * @description post data
 * @route `/cloud-upload-data/`
 * @access Public
 * @type POST
 */
exports.formPostCtrl = async (req, res) => {
  try {
    let imagePath = "";
    let cloudImgUrl = "";
    const text = req.body.text;
    if (req.file) {
      imagePath = req.file.path;
       cloudImgUrl = cloudinary.uploader
         .upload(imagePath)
         .then((data) => {
           return data;
         })
         .catch((err) => {
           return err;
         });
      cloudImgUrl = await cloudImgUrl;
      if(!cloudImgUrl.secure_url){
        cloudImgUrl = ''
      }
    }
    const data = await createUpload({
      imageUrl: cloudImgUrl.secure_url,
      text,
    });

    return res.status(200).json({
      data,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      error,
    });
  }
};

/**
 * @author Ikenna Emmanuel <eikenna58@gmail.com>
 * @description get data page
 * @route `/get-data-page/`
 * @access Public
 * @type GET
 */
exports.getUploadPage = async (req, res) => {
  res.render("dataPage");
};

/**
 * @author Ikenna Emmanuel <eikenna58@gmail.com>
 * @description get data API
 * @route `/get-data/`
 * @access Public
 * @type GET
 */
exports.getUploadData = async (req, res) => {
  try {
    const data = await getUploads();
    return res.status(200).json({
      data,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      error,
    });
  }
};
