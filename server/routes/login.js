const { response } = require("express");
const exp = require("express");
const { ObjectId } = require("mongodb");
const recRoutes = exp.Router();
const Db = require("../db/conn");
const objID = require("mongodb").ObjectId;

recRoutes.route("/login").get(function (req, res) {
    let dbConn = Db.getDb("Credentials");
    dbConn
        .collection("Login_Col")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

recRoutes.route("/login/:id").get(function (req, res) {
    let dbConn = Db.getDb();
    let myq = { _id: ObjectId(req.params.id) };
    dbConn
        .collection("Login_Col")
        .findOne(myq, function(err, result) {
            if (err) throw err;
            res.json(result);
        });
});

recRoutes.route("/login/add").post(function (req, response) {
    let dbConn = Db.getDb();
    let myObj = {
        Username: req.body.Username,
        Password: req.body.Password,
        Email: req.body.Email,
    };
    dbConn.collection("Login_Col").insertOne(myObj, function (err, res) {
        if (err) throw err;
        response.json(res);
    });
});

recRoutes.route("/update/:id").post(function (req, response) {
    let dbConn = Db.getDb();
    let myq = { _id: ObjectId(req.params.id) };
    let newVals = {
        $set: {
            Username: req.body.Username,
            Password: req.body.Password,
            Email: req.body.Email,
        },
    };
    dbConn
        .collection("Login_Col")
        .updateOne(myq, newVals, function (err, res) {
            if (err) throw err;
            console.log("1 Doc Updated");
            response.json(res);
        });
});

recRoutes.route ("/:id").delete((req, response) => {
    let dbConn = Db.getDb();
    let myq = { _id: ObjectId(req.params.id) };
    dbConn.collection("Login_Col").deleteOne(myq, function (err, obj) {
        if (err) throw err;
        console.log("1 Doc Deleted");
        response.json(obj);
    });
});

module.exports = recRoutes;