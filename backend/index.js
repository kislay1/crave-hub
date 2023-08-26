require('dotenv').config();
const express = require('express')
const cors = require('cors');

const app = express()
const port = process.env.PORT || 5000

const mongoDB=require("./db")
mongoDB();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://sprightly-stardust-09f88e.netlify.app/");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})

app.use(express.json())
app.use('/api/', require("./Routes/CreateUser"));
app.use('/api/', require("./Routes/DisplayData"));
app.use('/api/', require("./Routes/OrderData"));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})