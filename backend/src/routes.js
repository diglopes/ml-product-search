const routes = require("express").Router();
const productController = require("./controllers/productController");

routes.get("/product", productController.searchProduct);

module.exports = routes;
