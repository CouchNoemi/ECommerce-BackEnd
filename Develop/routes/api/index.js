const router = require("express").Router();
const categoryRoutes = require("./category-routes");
const productRoutes = require("./product-routes");
const tagRoutes = require("./tag-routes");

router.use("/categories", categoryRoutes); // /api/categories
router.use("/products", productRoutes); // /api/products
router.use("/tags", tagRoutes); // /api/tags

module.exports = router;
