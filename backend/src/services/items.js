const api = require("./api");

const searchItems = async (query, limit = 8) => {
  const searchUrl = `/sites/MLB/search?q=${query}&limit=${limit}`;

  try {
    const { data } = await api.get(searchUrl);

    return filterData(data, query);
  } catch (error) {
    return { error: "Couldn't make the search" };
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

const filterData = async data => {
  const newData = {
    author: {
      name: "Diego",
      lastname: "Lopes"
    }
  };

  const categories = await searchCategories(data);

  newData.items = data.results.map(item => {
    const filteredItem = {
      id: item.id,
      title: item.title,
      categories,
      price: {
        currency: item.currency_id,
        amount: item.price,
        decimals: 2
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping
    };

    return filteredItem;
  });

  return newData;
};

module.exports = { searchItems };
