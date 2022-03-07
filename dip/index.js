const express = require('express');
const bodyParser = require('body-parser');
const mainRouter = require('./routes/mainRouter');
const sequelize = require('./helpers/database');
const multer = require('multer');
const app = express();




app.use(express.static('./views'));
app.use(express.static('./images'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.redirect('/main');
})

app.use('/main', mainRouter);

sequelize.sync()
    .then(() => {
        app.listen(3000);
    })
    .catch(err => console.log(err));