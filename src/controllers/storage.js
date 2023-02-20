const multer = require("multer");
const path = require("path");


// Upload Images
const storageImage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads/images"));
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()} - ${file.originalname}`);
  },
  limits: {
    fileSize: 100 * 1024 * 1024, 
  },
});

const uploadImage = multer({ storage: storageImage });


// Upload Videos
const storageVideo = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads/videos"));
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()} - ${file.originalname}`);
  },
  limits: {
    fileSize: 100 * 1024 * 1024, 
  },
});



const uploadVideo = multer({ storage: storageVideo });

// Upload PDF

const storagePDF = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads/pdf"));
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()} - ${file.originalname}`);
  },
  limits: {
    fileSize: 100 * 1024 * 1024, 
  },
});



const uploadPDF = multer({ storage: storagePDF });


// Upload Audio

const storageAudio = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads/audio"));
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()} - ${file.originalname}`);
  },
  limits: {
    fileSize: 100 * 1024 * 1024, 
  },
});



const uploadAudio = multer({ storage: storageAudio });




module.exports = {
  uploadImage,
  uploadVideo,
  uploadPDF,
  uploadAudio
};
