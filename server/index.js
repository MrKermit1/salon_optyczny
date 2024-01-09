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
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});

//rejestracja usera
app.post('/create', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    const surname = req.body.surname;
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
                        "INSERT INTO user (email, pass, imie, nazwisko) VALUES (?, ?, ?, ?)",
                        [email, hash, name, surname],
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

//logowanie usera
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

//wyciąganie danych usera
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

//wyciąganie produktów
app.post('/getProduct', (req, res) => {


    db.query(
        "SELECT id, nazwa, cena, opis FROM produkt",
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

//logowanie pracownika
app.post('/emLog', (req, res) => {

    const kod = req.body.kod;

    db.query(
        "SELECT * FROM pracownik WHERE kod LIKE ?",
        [kod],
        (err, result) => {
            if (err) {
                console.log(err);
            }

            if (result.length == 0) {
                res.status(409).send("Nie znaleziono pracownika");
            }else{
                res.status(200).json(result[0])
            }
        }
    )
})

//tworzenie zamówienia
app.post('/createOrder', (req, res) => {
    const nazwa = req.body.nazwa;
    const email = req.body.email;
    const data = req.body.data;
    const id_salonu = req.body.id_salonu;
    const status = req.body.status
    const id_produktu = req.body.id_produktu
    const id_usera = req.body.id_usera
    db.query(
        "SELECT * FROM salony WHERE id = ?",
        [id_salonu],
        (err, result) => {
            if (err) {
                console.log(err)
            }
            if(result.length < 1){
                res.status(409).send('nie znaleziono salonu');
            }else{
                db.query(
                    "INSERT INTO zamowienia (nazwa, email, data, id_salonu, status, id_produktu, id_usera) VALUES (?, ?, ?, ?, ?, ?, ?)",
                    [nazwa, email, data, id_salonu, status, id_produktu, id_usera],
                    (err, result) => {
                        if (err) {
                            console.log(err)
                        }else{
                            res.status(200).send("dodano zamówienie")
                        }
                    }
                )
            }
        }
    )
})

//wyciąga zamówienia
app.post('/getOrders', (req, res) => {

    const id_salonu = req.body.id_salonu

    db.query(
        "SELECT * FROM zamowienia WHERE id_salonu LIKE ?",
        [id_salonu],
        (err, result) => {
            if(err){
                console.log(err)
            }else{
                res.status(200).json(result)
            }
        }
    )
})
//zapłata
app.post('/cash', (req, res) => {

    const userEmail = req.body.email
    const cash = req.body.cash

    db.query(
        "UPDATE user SET portfel = ? WHERE email LIKE ?",
        [cash, userEmail], 
        (err, result) => {
            if(err){
                console.log(err)
            }else{
                res.status(200).send("transakcja udana")
            }
        }
    )
})
//wpłata
app.post('/addCash', (req, res) => {

    const name = req.body.name;
    const surname = req.body.surname;
    const money = req.body.money;
    const email = req.body.email
    db.query(
        "SELECT * FROM user WHERE email LIKE ? AND imie LIKE ? AND nazwisko LIKE ?",
        [email, name, surname],
        (err, result) => {
            if(err){
                console.log(err)
            }else{
                if (result.length >= 1) {
                    db.query(
                        "UPDATE user SET portfel = ? WHERE imie = ? AND nazwisko = ?",
                        [money, name , surname],
                            (err, result) => {
                                if(err){
                                console.log(err);
                            }else{
                                res.status(200).send("Dodano środki")
                            }
                        }
                    )
                }else{
                    res.status(409).send("nie znaleziono usera")
                }
            }
        }
    )
    

})
//dodawanie produktu
app.post('/addProduct', (req, res) => {
    
    const nazwa = req.body.nazwa
    const cena = req.body.cena
    const opis = req.body.opis

    db.query(
        "INSERT INTO produkt (nazwa, cena, opis) VALUES (?, ?, ?)",
        [nazwa, cena, opis],
        (err, result) => {
            if (err) {
                console.log(err)
            }else{
                res.status(200).send('dodano produkt')
            }
        }
    )
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log("serwer działa na porcie 3001");
})
