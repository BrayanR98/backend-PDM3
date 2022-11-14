const cors       = require('cors')
const express    = require("express");
const controller = require("./controllers.js");


const router = express.Router();


// --------------- API REST CRUD
router.get    ("/usersv/:rol",      cors(), controller.readUsersv);
router.get    ("/users",      cors(), controller.readUsers);   // Read All
router.get    ("/user/:id",  cors(), controller.readUser);    // Read
router.delete ("/user/:id",  cors(), controller.deleteUser);  // Delete
router.put    ("/user/:id",  cors(), controller.updateUser);  // Update
router.post   ("/user",      cors(), controller.createUser);  // Create

router.get    ("/Ventas",     cors(), controller.readVentas);  // Read All
router.get    ("/Venta/:id", cors(), controller.readVenta);   // Read
router.delete ("/Venta/:id", cors(), controller.deleteVenta); // Delete
router.put    ("/Venta/:id", cors(), controller.updateVenta); // Update
router.post   ("/Venta",     cors(), controller.createVenta); // Create


module.exports = router;
