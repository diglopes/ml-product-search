const routes = require("express").Router();
const productController = require("./controllers/productController");

routes.get("/products", productController.search);
routes.get("/product/:id", productController.searchById);

module.exports = routes;
