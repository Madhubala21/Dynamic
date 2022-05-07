import Sequelize from "sequelize"

const connection=new Sequelize({
    host:'localhost',
    username:'root',
    password:'',
    dialect:"mysql",
    logging:console.log,
    database:'dynamicexcel'
  })

  export{connection}
