import path from 'path';
import express from 'express';

const app = express()
const port = 3000
const __dirName = path.resolve()

app.use(express.static(path.join(__dirName, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirName, "views", "home.html"))
});

app.get("/views/descicao", (req, res) => {
    res.sendFile(path.join(__dirName, "views", "descicao.html"))
});

app.listen(port, ( ) => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})