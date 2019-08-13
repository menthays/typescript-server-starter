import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';

require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.json({
    'foo': 'a'
  })
})

app.listen(process.env.SERVER_PORT, () =>
  console.log(`Example app listening on port ${process.env.SERVER_PORT}!`)
);





