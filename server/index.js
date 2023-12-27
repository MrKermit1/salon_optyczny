const { log } = require('console');
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const crypto = require('crypto');
require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    connectionLimit: 10,
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});

app.post('/create', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const hash = crypto.createHash('sha256').update(password).digest('hex');
    db.query(
        "SELECT * FROM user WHERE email LIKE ?",
        [email],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send("Błąd serwera");
            }else{
                if (result.length === 0) {
                    
                    db.query(
                        "INSERT INTO user (email, pass) VALUES (?, ?)",
                        [email, hash],
                        (err, result) => {
                            err ? console.log(err) : res.status(200).send("rejestracja pomyślna")
                        }
                    )
                }else{
                    //document.getElementById("error").innerHTML = "Podany email już istniej w bazie danych"
                    res.status(409).send("Email istnieje w bazie")
                }
            }
        }
    )
})

app.post('/log', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const hash = crypto.createHash('sha256').update(password).digest('hex');

    db.query(
        "SELECT * FROM user WHERE email = ? AND pass = ? ",
        [email, hash],
        (err, result) => {
            if (err) {
                console.log(err)
            }

            if (result.length === 1) {
                res.status(200).send("Zalogowano")
            }else{
                //console.log(email)
                res.status(409).send("Nie znaleziono takiego użytkownika")
            }
        }
    )
})

app.post('/getUser', (req, res) => {
    const email = req.body.email

    db.query(
        "SELECT email, portfel, id FROM user WHERE email = ?",
        [email],
        (err, result) => {
            if (err) {
                console.log(err);
            }

            if (result.length > 1 || result.length == 0) {
                res.status(409).send("Błąd wczytywania danych");
                
            }else{
                res.status(200).json(result[0]);
            }
        }
    )
})

app.post('/getProduct', (req, res) => {


    db.query(
        "SELECT nazwa, cena, opis FROM produkt",
        [],
        (err, result) => {
            if (err) {
                console.log(err);
            }

            if (result.length <= 0) {
                res.status(409).send("Nie wczytano danych");
            }else{
                res.status(200).json(result)
            }
        }
    )
})

app.listen(3001, () => {
    console.log("serwer działa na porcie 3001");
})
