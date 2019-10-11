const { searchItems, searchItemByid } = require("../services/items");

const search = async (req, res) => {
  const { q } = req.query;
  const result = await searchItems(q);

  res.json(result);
};

const searchById = async (req, res) => {
  const { id } = req.params;
  const result = await searchItemByid(id);

  res.json(result);
};

module.exports = { search, searchById };
