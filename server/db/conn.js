const { MongoClient } = require("mongodb");
const atlas = process.env.ATLAS_URI;
const cli = new MongoClient(atlas, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var _Db;

module.exports = {
    connectToServer: function (callback) {
        cli.connect(function (err, db) {
            if (db) {
                _Db = db.db("Credentials");
                console.log("Connected to MongoDB, Credentials database");
            }
        });
    },
    getDb: function () {
        return _Db;
    },
};