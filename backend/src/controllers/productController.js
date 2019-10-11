const { searchItems } = require("../services/items");

const searchProduct = async (req, res) => {
  const { q } = req.query;
  const result = await searchItems(q);

  res.json(result);
};

module.exports = { searchProduct };
