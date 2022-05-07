import express from "express";
import { Sequelize } from "sequelize";
import { connection } from "./Models/connection.js";
import xlsxfile from "read-excel-file/node/index.commonjs.js";
import Excel from "exceljs";
import { userRegister } from "./Createtable.js/create.js";

const wb = new Excel.Workbook();
const ws = wb.addWorksheet("Book.xlsx");

const app = express();
const port = 3030;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connection
  .authenticate()
  .then(() => {
    console.log("");
    console.log(`Database Authenticated`);
    connection.sync({ force: false });
    console.log("");
  })

  .catch((error) => {
    console.log(`Database Authentication Error`);
  });

export var count;
export var array = [];

var master = [];
xlsxfile("./Book.xlsx").then((rows) => {
  // console.log(rows[0]);
  console.log("rows", rows);
  userRegister(rows[0], rows);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
