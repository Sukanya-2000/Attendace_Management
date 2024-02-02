const User = require('../models/user');
//const Attendance = require('../models/user'); // Make sure the path is correct
const sequelize = require('../util/database');

exports.markAttendance = async (req, res, next) => {
    const{
        ram, shyam, jadu, madhu, hari, oishi, titli, date} = 
        req.body;

    
    const body = {
        ram,
        shyam,
        jadu,
        madhu,
        hari,
        oishi,
        titli,
        nobita,
        date,
    };
    console.log(body);
    User.create(body)
    .then((result) => {
      console.log("Attendance Added");
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res
        .sendStatus(500)
        .json({ Error: "Error occured while adding the attendance" });
    });
};

    
exports.fetchAttendanceReport = (req, res, next) => {
    User.findAll()
      .then((result) => {
        let dates = result.length;
        let ramPresents = 0;
        let shyamPresents = 0;
        let jaduPresents = 0;
        let madhuPresents = 0;
        let hariPresents = 0;
        let oishiPresents = 0;
        let titliPresents = 0;
        let nobitaPresents = 0;
        result.forEach((element) => {
          if (element.dataValues.ram === "present") {
            ramPresents = ramPresents + 1;
          }
          if (element.dataValues.shyam === "present") {
            shyamPresents = shyamPresents + 1;
          }
          if (element.dataValues.jadu === "present") {
            jaduPresents = jaduPresents + 1;
          }
          if (element.dataValues.madhu === "present") {
            madhuPresents = madhuPresents + 1;
          }
          if (element.dataValues.hari === "present") {
            hariPresents = hariPresents + 1;
          }
          if (element.dataValues.oishi === "present") {
            oishiPresents = oishiPresents + 1;
          }
          if (element.dataValues.titli === "present") {
            titliPresents = titliPresents + 1;
          }
          if (element.dataValues.nobita === "present") {
            nobitaPresents = nobitaPresents + 1;
          }
        });
        const presentReport = {
          ramPresents: ramPresents,
          shyamPresents: shyamPresents,
          jaduPresents: jaduPresents,
          madhuPresents: madhuPresents,
          hariPresents: hariPresents,
          oishiPresents: oishiPresents,
          titliPresents: titliPresents,
          nobitaPresents: nobitaPresents,
        };
        const response = {
          ram: `${presentReport.ramPresents} / ${dates}`,
          shyam: `${presentReport.shyamPresents} /${dates}`,
          jadu: `${presentReport.jaduPresents} / ${dates}`,
          madhu: `${presentReport.madhuPresents} / ${dates}`,
          hari: `${presentReport.hariPresents} / ${dates}`,
          oishi: `${presentReport.oishiPresents} / ${dates}`,
          titli: `${presentReport.titliPresents} / ${dates}`,
          nobita: `${presentReport.nobitaPresents} / ${dates}`,
        };
        res.json(response);
      })
      .catch((err) => {
        console.log(err);
        res
          .sendStatus(500)
          .json({ Error: "Error occured while fetching the attendance report" });
      });
  };
  
  exports.fetchAttendanceByDate = (req, res, next) => {
    let targetDate = req.params.date;
    console.log(targetDate);
  
    User.sequelize
      //Writing own sql query in order to avoid the timezone difference between stored record in db and findOne methods default query for this operation
      .query(
        `SELECT id, ram, shyam, jadu, madhu, hari, oishi, titli, nobita, date, createdAt, updatedAt
        FROM attendances
        WHERE date = :targetDate
        LIMIT 0, 1000`,
        {
          replacements: { targetDate }, // Parameter binding
          type: Sequelize.QueryTypes.SELECT, // Specify the query type
        }
      )
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
        res
          .sendStatus(500)
          .json({ Error: "Error occured while fetching the attendance" });
      });
  };
  
  exports.errorHandeler = (err, req, res, next) => {
    console.log(err);
    res.status(500).json({ Error: "An error occured" });
  };