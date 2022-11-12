import { User, Venta } from "./models.js";


// ------- User

export function readUsers(req, res)    {     return User.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });     }


export function readUser(req, res)    {     return User.findOne({ idvend: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });     }


export function deleteUser(req, res)    {     return User.findOneAndRemove({ idvend: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });     }


export function updateUser(req, res)    {     return User.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { nombre: req.body.nombre, correo: req.body.correo,rol:req.body.rol , totalcomision: req.body.totalcomision } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else     res.json(data);
        }
    );     }


export function createUser(req, res)    {     return new User({ idvend: req.body.idvend, nombre: req.body.nombre, correo: req.body.correo,rol:req.body.rol , totalcomision: req.body.totalcomision })
    .save((err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });     }



// ------ ARTÍCULOS

export function readVentas(req, res)    {     return Venta.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });     }


export function readVenta(req, res)    {     return Venta.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });     }


export function deleteVenta(req, res)    {     return Venta.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });     }



export function updateVenta(req, res)    {     return Venta.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { idvend: req.body.idvend, zona: req.body.zona , fecha:req.body.fecha,valorventa:req.body.valorventa } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else     res.json(data);
        }
    );     }


export function createVenta(req, res)    {     return new Venta({ idvend: req.body.idvend, zona: req.body.zona , fecha:req.body.fecha,valorventa:req.body.valorventa })
    .save((err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });     }

