const { User, Venta } = require("./models.js");


// ------- User

exports.readUsers = (req, res) =>
    User.find({}, (err, data) => {
        if (err) res.json({ error: err.message });
        else     res.json(data);
    });

exports.readUsersv = (req, res) =>
    User.find({ rol: req.params.rol }, (err, data) => {
        if (err) res.json({ error: err.message });
        else     res.json(data);
    });

exports.readUser = (req, res) =>
    User.findOne({ idvend: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.deleteUser = (req, res) =>
    User.findOneAndRemove({ idvend: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.updateUser = (req, res) =>
    User.findOneAndUpdate(
        { idvend: req.params.id },
        { $set: { nombre: req.body.nombre, correo: req.body.correo,rol:req.body.rol , totalcomision: req.body.totalcomision } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else     res.json(data);
        }
    );


exports.createUser = (req, res) =>
    new User({ idvend: req.body.idvend, nombre: req.body.nombre, correo: req.body.correo,rol:req.body.rol , totalcomision: req.body.totalcomision })
    .save((err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });



// ------ ARTÍCULOS

exports.readVentas = (req, res) =>
    Venta.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.readVenta = (req, res) =>
    Venta.find({ idvend: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.deleteVenta = (req, res) =>
    Venta.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });



exports.updateVenta = (req, res) =>
    Venta.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { idvend: req.body.idvend, zona: req.body.zona , fecha:req.body.fecha,valorventa:req.body.valorventa } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else     res.json(data);
        }
    );


exports.createVenta = (req, res) =>
    new Venta({ idvend: req.body.idvend, zona: req.body.zona , fecha:req.body.fecha,ValorVenta:req.body.ValorVenta,comision: req.body.comision })
    .save((err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });

