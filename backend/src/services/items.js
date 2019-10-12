const api = require("./api");

const searchItems = async (query, limit = 8) => {
  const searchItemsUrl = `/sites/MLB/search?q=${query}&limit=${limit}`;

  try {
    const { data } = await api.get(searchItemsUrl);
    return data;
  } catch (error) {
    return { error: "Couldn't make the search" };
  }
};

const searchItemByid = async itemID => {
  const searchByIdUrl = `/items/${itemID}`;
  try {
    const { data } = await api.get(searchByIdUrl);

    return data;
  } catch (error) {
    return error;
  }
};

const searchCategories = async data => {
  const { category_id } = data.results[0];
  const categoriesUrl = `/categories/${category_id}`;
  try {
    const { data: categoriesData } = await api.get(categoriesUrl);

    return categoriesData.path_from_root.map(path => path.name);
  } catch (error) {
    return { error: "Couldn't make the search" };
  }
};

const searchDescription = async itemID => {
  const searchDescriptionUrl = `/items/${itemID}/description`;
  const { data } = await api.get(searchDescriptionUrl);

  return data.plain_text;
};

module.exports = {
  searchItems,
  searchItemByid,
  searchDescription,
  searchCategories
};
