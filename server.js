const express = require("express");
const sequelize = require('./database');
const User = require('./User')

sequelize.sync().then(() => console.log('Database is running!'));

const app = express();

app.use(express.json());

app.post('/users', (req, res) => {
    User.create(req.body).then(() => { 
        res.send('User is created');
    })
})

app.listen(3000, () => {
    console.log("App is running!");
});