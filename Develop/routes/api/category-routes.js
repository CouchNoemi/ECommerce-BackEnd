const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  Category.findAll({ include: Product })
    .then((categories) => {
      res.json(categories);
    })
    .catch((err) => res.json(err));
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Category.findOne({ include: Product, where: { id } })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

router.post("/", (req, res) => {
  const { category_name } = req.body;
  Category.create({ category_name })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.json(err));
});

router.put("/:id", (req, res) => {
  const { category_name } = req.body;
  const id = req.params.id;
  Category.update({ category_name }, { where: { id } })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

router.delete("/:id", (req, res) => {
  const id= req.params.id;
  Category.destroy({where:{id}})
  .then(data => res.json(data))
  .catch(err => res.json(err))
});

module.exports = router;
