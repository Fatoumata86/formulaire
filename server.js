const express = require("express")
const app = express();

const port = 8000;

const exphbs = require("express-handlebars")

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }))

app.get("/" , (req, res) => {
    res.render('form')
})

app.get("/home" , (req, res) => {
    res.render('home')
})

app.post("/" , (req, res) => {
    res.redirect('/home')
    console.log(req.body)
})

app.listen(port , () => {
    console.log(`The server is listening on port ${port}`)
})