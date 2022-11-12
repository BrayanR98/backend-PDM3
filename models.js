const mongoose = require('mongoose');

const User = mongoose.model('User',
  new mongoose.Schema({ idvend: String, nombre: String,correo:String,rol: Boolean,totalcomision: Number})
);

const Venta = mongoose.model('Venta',
  new mongoose.Schema({ idvend: String, zona: String , fecha:Date ,ValorVenta:Number,comision:Number})
);

module.exports = {
  User: User,
  Venta: Venta
}

