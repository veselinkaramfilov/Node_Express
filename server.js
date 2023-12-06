const express = require("express");
const sequelize = require('./database');
const User = require('./User')

sequelize.sync().then(() => console.log('Database is running!'));

const app = express();

app.use(express.json());

app.post('/users', async (req, res) => {
    await User.create(req.body); 
        res.send('User has been created');
})

app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.send(users);
})

app.get('/users/:id', async (req, res) => {
    const searchedId = req.params.id;
    const user = await User.findOne({where: {id: searchedId}});
    res.send(user);
})

app.put('/users/:id', async (req, res) => {
    const searchedId = req.params.id;
    const user = await User.findOne({where: {id: searchedId}});
    user.username = req.body.username;
    await user.save();
    res.send('Entry has been updated');
})

app.delete('/users/:id', async (req, res) => {
    const searchedId = req.params.id;
    await User.destroy({ where: { id: searchedId}})
    res.send('Entry has been deleted');
})

app.listen(3000, () => {
    console.log("App is running!");
});