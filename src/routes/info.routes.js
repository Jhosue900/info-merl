const { Router } = require("express");
const {
  InfoNone,
  validarInfoType,
  InfoLink,
  DeleteInfo
} = require("../controllers/info.controller");
const {
  uploadImage,
  uploadVideo,
  uploadPDF,
  uploadAudio,
} = require("../controllers/storage");
const pool = require("../db/db");

const router = Router();

router.post("/InfoNone", InfoNone);

router.get('/', async (req, res) => {

  

  const query = await pool.query("SELECT NOW()")
  res.send("Este es el server" + query.rows[0])
})

router.post("/image", (req, res, next) => {
  uploadImage.array("imagen", 15)(req, res, async (err) => {
    const files = req.files;

    const arrayFiles = JSON.stringify(files);

    const dateResult = await pool.query(
      "SELECT TO_CHAR(LOCALTIMESTAMP, 'YYYY/MM/DD HH:MI AM') AS fecha"
    );
    const date = dateResult.rows[0].fecha;

    const { title, description, grupo, info } = req.body;

    const result = await pool.query(
      "INSERT INTO infoImage (title, description, images, grupo, fecha, infotype) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [title, description, arrayFiles, grupo, date, info]
    );

    if (result) {
      res.status(200).json({ status: 200 });
    } else {
      res.status(500).json({ status: 500 });
    }
  });
});

router.post("/video", (req, res) => {
  uploadVideo.array("video", 5)(req, res, async (err) => {
    if (err) {
      res.json({ msg: err.message });
    } else {
      const files = req.files;

      const arrayFiles = JSON.stringify(files);

      const dateResult = await pool.query(
        "SELECT TO_CHAR(LOCALTIMESTAMP, 'YYYY/MM/DD HH:MI AM') AS fecha"
      );
      const date = dateResult.rows[0].fecha;

      const { title, description, grupo, info } = req.body;

      const result = await pool.query(
        "INSERT INTO infoVideo (title, description, video, grupo, fecha, infoType) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
        [title, description, arrayFiles, grupo, date, info]
      );

      if (result) {
        res.status(200).json({ status: 200 });
      } else {
        res.status(500).json({ status: 500 });
      }
    }
  });
});

router.post("/pdf", (req, res) => {
  uploadPDF.array("pdf", 2)(req, res, async (err) => {
    if (err) {
      res.json({ msg: err.message });
    } else {
      const files = req.files;

      const arrayFiles = JSON.stringify(files);

      const dateResult = await pool.query(
        "SELECT TO_CHAR(LOCALTIMESTAMP, 'YYYY/MM/DD HH:MI AM') AS fecha"
      );
      const date = dateResult.rows[0].fecha;

      const { title, description, grupo, info } = req.body;

      const result = await pool.query(
        "INSERT INTO infoPDF (title, description, pdf, grupo, fecha, infoType) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
        [title, description, arrayFiles, grupo, date, info]
      );

      if (result) {
        res.status(200).json({ status: 200 });
      } else {
        res.status(500).json({ status: 500 });
      }
    }
  });
});

router.post("/audio", (req, res) => {
  uploadAudio.array("audio", 10)(req, res, async (err) => {
    if (err) {
      res.json({ msg: err.message });
    } else {
      const files = req.files;

      const arrayFiles = JSON.stringify(files);

      const dateResult = await pool.query(
        "SELECT TO_CHAR(LOCALTIMESTAMP, 'YYYY/MM/DD HH:MI AM') AS fecha"
      );
      const date = dateResult.rows[0].fecha;

      const { title, description, grupo, info } = req.body;

      const result = await pool.query(
        "INSERT INTO infoAudio (title, description, audio, grupo, fecha, infotype) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
        [title, description, arrayFiles, grupo, date, info]
      );

      if (result) {
        res.status(200).json({ status: 200 });
      } else {
        res.status(500).json({ status: 500 });
      }
    }
  });
});

router.post("/link", InfoLink);

router.get("/showall", async (req, res) => {
  try {
    //Hacer todas las consultas y los objetos meterlos en un solo array y ordenar en base a la fecha con sort

    const text = await pool.query("SELECT * FROM infoNone");

    const image = await pool.query("SELECT * FROM infoImage");

    const video = await pool.query("SELECT * FROM infoVideo");

    const link = await pool.query("SELECT * FROM infoLink");

    const pdf = await pool.query("SELECT * FROM infoPDF");

    const audio = await pool.query("SELECT * FROM infoAudio");


    // Arrays

    const textResult = text.rows;
    const imageResult = image.rows;
    const videoResult = video.rows;
    const linkResult = link.rows;
    const pdfResult = pdf.rows;
    const audioResult = audio.rows;

    const JsonImageResult = imageResult
    const JsonVideoResult = videoResult
    const JsonPDFResult = pdfResult
    const JsonAudioResult = audioResult


    // Concat

    const All = [
      ...textResult,
      ...JsonImageResult,
      ...JsonVideoResult,
      ...linkResult,
      ...JsonPDFResult,
      ...JsonAudioResult,
    ];

    
    
    res.json(All)
  } catch (error) {
    console.log(error.message);
  }
});

router.delete("/delete", DeleteInfo);


module.exports = router;
