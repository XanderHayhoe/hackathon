const exp = require("express");
const app = exp();
const cor = require("cors");
require("dotenv").config({path: "./config.env"});

const servPort = process.env.PORT || 5000;

app.use(cor());
app.use(exp.json());
app.use(require("./routes/login"));

const driver = require("./db/conn");

app.listen(servPort, () => {
    driver.connectToServer(function(err) {
        if (err) console.error(err);
    });

    console.log(`Server up on port: ${servPort}`)
});