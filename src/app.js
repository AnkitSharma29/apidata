const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const mysqlConnection = require("./db/connection");
const data = require("../file/user.json")

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/data", (req, res) => {
    
  if(data) {

        mysqlConnection.query(`SELECT ${data.operation.show.name},${data.operation.show.phone},${data.operation.show.message} FROM ${data.operation.table}`, (err, result) => {
          if (err) throw err;
      
          if (result == 0) {
            res.send("Data not found");
          } else {
            res.send(result);
          }
        });
    }else{
      res.send("Data not found");
    }
  });

  app.get("/register", (req, res) => {

    if(data) {

        mysqlConnection.query(`INSERT INTO ${data.operation.table} SET ?`,data.operation.data, (err, result) => {
          if (err) throw err;
      
          if (result == 0) {
            res.send("Data not found");
          } else {
            res.send("data insert");
          }
        });
    }else{
      res.send("Data not found");
    }
  });


app.listen(port, () => {
  console.log("your server is running on port 8000");
});