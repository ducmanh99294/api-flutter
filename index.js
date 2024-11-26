import express from 'express'
import { connectDB } from "./config/connectDB.mjs";
import bodyParser from 'body-parser';
import userRouters from './routes/userRoutes.mjs';

connectDB();
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine","ejs");
app.set("views","./views");
app.use(express.static("public"));

app.use('/', userRouters);

app.listen(port, ()=>{
  console.log(`Server starting on ${port}`)
})