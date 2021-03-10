const mysql = require("mysql");
const mysqlConnection = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "queryapi",
  });
  
  // connection
  mysqlConnection.connect((err) =>{
  
      if(!err){
          console.log("conneted");
      }else{
          console.log("faild ");
      }
  });

  module.exports = mysqlConnection;