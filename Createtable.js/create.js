import Sequelize, { DataTypes } from "sequelize";
import { array, count } from "../app.js";
import { connection } from "../Models/connection.js";

const userRegister = async (columns, rows) => {
  // console.log(columns);
  var col = [];
  var values = { type: Sequelize.STRING, allowNull: false };
  let i;

  var element;
  // console.log(typeof col);
  for (i = 0; i < columns.length; i++) {
    col.push({
      [columns[i]]: { type: DataTypes.STRING(222), allowNull: false },
    });
  }
  // console.log(col);

  var d = col.reduce((r, c) => Object.assign(r, c), {});
  // console.log(d);

  var dynamicTable = connection.define("insertTable", d);
  var data = [];
  var final = [];

  // for (let i = 0; i < columns.length; i++) {
  //   for (let j = 1; j <= columns.length; j++) {
  //     data.push({ [columns[i]]: rows[j][i] });
  //     dynamicTable.bulkCreate(data);
  //   }
  // }
  // connection.sync({ force: true });
  let j = 0;
  let t;
  for (let i = 1; i < rows.length; i++) {
    for (t = 0; t < columns.length; t++) {
      data.push({ [columns[t]]: rows[i][t] });
    }
    var master = data.reduce((r, c) => Object.assign(r, c), {});
    final.push(master);
    console.log("data values", final);
  }
  console.log(data);
  dynamicTable.bulkCreate(final);
  // var data = columns.map((v) => {
  //   console.log(v);
  //   return {
  //     [v]: {
  //       rows,
  //     },
  //   };
  // });

  //
};

export { userRegister };

//console.log(col);
// console.log(columns);
// var data = columns.map((v) => {
//   console.log(v);
//   return {
//     [v]: {
//       type: DataTypes.STRING(255),
//     },
//   };
// });

// console.log(data);
