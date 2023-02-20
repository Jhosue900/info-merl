const pool = require("../db/db")





const InfoNone = async (req, res, next) => {
    try {
    
        const dateResult = await pool.query("SELECT TO_CHAR(LOCALTIMESTAMP, 'YYYY/MM/DD HH:MI AM') AS fecha")
        const date = dateResult.rows[0].fecha
        const { title, description, grupo, info } = req.body;

        const result = await pool.query("INSERT INTO infoNone (title, description, grupo, fecha, infoType) VALUES ($1, $2, $3, $4, $5)", [title, description, grupo, date, info])
        if (result) {
            res.status(200).json({status:200});
        }else{
            res.status(500).json({status:500});
        }
    } catch (error) {
        console.log(error.message);
    }
}


const InfoLink = async (req, res, next) => {
    try {
    
        const dateResult = await pool.query("SELECT TO_CHAR(LOCALTIMESTAMP, 'YYYY/MM/DD HH:MI AM') AS fecha")
        const date = dateResult.rows[0].fecha
        const { title, description, grupo, link, info } = req.body;

        const result = await pool.query("INSERT INTO infoLink (title, description, link, grupo, fecha, infoType) VALUES ($1, $2, $3, $4, $5, $6)", [title, description, link, grupo, date, info])
        

        if (result) {
            res.status(200).json({status:200});
        }else{
            res.status(500).json({status:500});
        }

    } catch (error) {
        console.log(error.message);
    }
}

const DeleteInfo = async (req, res) => {
    try {
        
        const { id, infoType } = req.body;
        
        if (infoType === "Texto") {
            const query = await pool.query("DELETE FROM infoNone WHERE id = $1 ", [id]);
            console.log("Se borro Texto");
            res.status(200).send("OK");
          } else if (infoType === "Imagen") {
            const query = await pool.query("DELETE FROM infoImage WHERE id = $1 ", [id]);
            console.log("Se borro Imagen");
            res.status(200).send("OK");
          } else if (infoType === "Video") {
            const query = await pool.query("DELETE FROM infoVideo WHERE id = $1 ", [id]);
            console.log("Se borro Video");
            res.status(200).send("OK");
          } else if (infoType === "Link") {
            const query = await pool.query("DELETE FROM infoLink WHERE id = $1 ", [id]);
            console.log("Se borro Link");
            res.status(200).send("OK");
          } else if (infoType === "PDF") {
            const query = await pool.query("DELETE FROM infoPDF WHERE id = $1 ", [id]);
            console.log("Se borro PDF");
            res.status(200).send("OK");
          } else if (infoType === "Audio") {
            const query = await pool.query("DELETE FROM infoAudio WHERE id = $1 ", [id]);
            console.log("Se borro Audio");
            res.status(200).send("OK");
          } else {
            console.log("No se encontro");
            
          }
        
       
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    InfoNone,
    InfoLink,
    DeleteInfo
}