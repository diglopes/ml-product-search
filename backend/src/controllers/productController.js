const { searchItems, searchItemByid } = require("../services/items");
const normalizeString = require("../helpers/normalizeString");
const sumirizeItems = require("../helpers/sumirizeItems");

const search = async (req, res) => {
  const { q } = req.query;

  if (!q) {
    return res
      .status(400)
      .json({ error: "You have to set a query on your request" });
  }

  const query = normalizeString(q);

  try {
    const items = await searchItems(query);
    const sumirizedItems = await sumirizeItems.many(items);

    return res.json(sumirizedItems);
  } catch (error) {
    console.log(error);
  }
};

const searchById = async (req, res) => {
  const { id } = req.params;

  try {
    const item = await searchItemByid(id);
    const sumirizedItem = await sumirizeItems.single(item);

    return res.json(sumirizedItem);
  } catch (error) {
    const { status } = error.response;
    if (status === 404) {
      return res.status(status).json({ error: "the id doesn't exist" });
    }
  }
};

module.exports = { search, searchById };
