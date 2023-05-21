const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  Tag.findAll({ include: Product })
    .then((tags) => {
      res.json(tags);
    })
    .catch((err) => res.json(err));
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Tag.findOne({ include: Product, where: { id } })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

router.post("/", (req, res) => {
  const { tag_name } = req.body;
  Tag.create({ tag_name })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.json(err));
});

router.put("/:id", (req, res) => {
  const { tag_name } = req.body;
  const id = req.params.id;
  Tag.update({ tag_name }, { where: { id } })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Tag.destroy({ where: { id } })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

module.exports = router;
