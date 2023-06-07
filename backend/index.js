import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";
import mongoose from "mongoose";

const app = express();

const PORT = 5001;


// mongoose.connect(url,{useNewUrlParser:true})
//     .then(()=>app.listen(PORT,()=> consoletrue.log(`data base is connected `)))
//     .catch((error)=>console.log(error.message));

// // mongoose.set('useFindAndModify',false); 

const URL = 'mongodb+srv://habibayed:2023@mern-app.1shcndw.mongodb.net/'

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => PORT, () => console.log(`Database is connected`))
    .catch((error) => console.log(`Error: ${error}`));

app.use(bodyParser.json());


app.use("/users", usersRoutes);

app.get("/", (req, res) => res.send("Welcome to the Users API!"));
app.all("*", (req, res) =>res.send("yezi mil bleda"));

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));



