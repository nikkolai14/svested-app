const express = require('express');
const app = express();
const cors = require('cors')
const config = require('config');
const port = config.get('port');
const passport = require("passport");
const initIl8n = require('./config/il8n');
const db = require("./models");
const parseUserInJwtToken = require('./middlewares/parseUserInJwtToken');

db.sequelize.sync();

require('./config/authentication')();

app.use(express.json({extended: false}));
app.use(cors());
app.use(parseUserInJwtToken);
app.use(initIl8n());
app.use(passport.initialize());
app.use('/', require('./routes/user'));

const server = app.listen(port, (error) => {
    if (error) {
        console.error('Error while starting server: ', error)
    } else {
        console.log(`Server started on PORT ${port}`)
    }
});

module.exports = server;
