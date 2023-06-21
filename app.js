const express = require ('express');
const app = express();
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('caminho da database')
const body-parser = 

app.use(express.static('./'))

app.get('/', (req,res)=> {
    res.sendFile("index.html")
});

app.listen(3000, ()=> {
    console.log("teste");
});
