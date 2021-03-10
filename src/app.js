const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const mysqlConnection = require("./db/connection");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/data", (req, res) => {
    
    mysqlConnection.query("SELECT * FROM apidata", (err, result) => {
      if (err) throw err;
  
      if (result == 0) {
        res.send("Data not found");
      } else {
        res.send(result);
      }
    });
  });

  app.post("/register", (req, res) => {

    const name = req.body.name;
    const phone = req.body.phone;
    const message = req.body.message;


    mysqlConnection.query("INSERT INTO apidata (name,phone,message) VALUES(?,?,?)",[name,phone,message], (err, result) => {
      if (err) throw err;
  
      if (result == 0) {
        res.send("Data not found");
      } else {
        res.send("data insert");
      }
    });
  });


app.listen(port, () => {
  console.log("your server is running on port 8000");
});