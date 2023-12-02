import db from "../models";

export const priscription = (req, res) => {
  const { title = "", priscription = "", patient_id ="", doctor_id = ""} = req.body;

  db.sequelize
    .query(
      `INSERT INTO priscription(title, priscription, patient_id, doctor_id ) 
    VALUES (:title,:priscription,:patient_id,:doctor_id)`,
      {
        replacements: {
          title,
          priscription,
          patient_id: 0, 
          doctor_id: 0
        },
      }
    )
    .then((resp) => res.json({ success: true }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, msg: "ann erro occured" });
    });
};

export const getPriscription = (req, res) => {
  db.sequelize
    .query(`SELECT * FROM priscription`)
    .then((resp) => res.json({ success: true, resp }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, msg: "ann erro occured" });
    });
};
