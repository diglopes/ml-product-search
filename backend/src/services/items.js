const api = require("./api");
const author = {
  name: "Diego",
  lastname: "Lopes"
};

const searchItems = async (query, limit = 8) => {
  const searchItemsUrl = `/sites/MLB/search?q=${query}&limit=${limit}`;

  try {
    const { data } = await api.get(searchItemsUrl);

    return filterData(data, query);
  } catch (error) {
    return { error: "Couldn't make the search" };
  }
};

const searchItemByid = async itemID => {
  const searchByIdUrl = `/items/${itemID}`;
  const promises = [api.get(searchByIdUrl), searchDescription(itemID)];
  const [itemByID, description] = await Promise.all(promises).catch(error => {
    return { error: "Couldn't make the search" };
  });

  const item = {
    author,
    id: itemByID.data.id,
    title: itemByID.data.title,
    price: {
      currency: itemByID.data.currency_id,
      amount: itemByID.data.price,
      decimals: 2
    },
    picture: itemByID.data.pictures[0].url,
    condition: itemByID.data.condition,
    free_shipping: itemByID.data.shipping.free_shipping,
    sold_quantity: itemByID.data.sold_quantity,
    description
  };

  return item;
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

const filterData = async data => {
  const newData = {};

  const categories = await searchCategories(data);

  newData.items = data.results.map(item => {
    const filteredItem = {
      author,
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

module.exports = { searchItems, searchItemByid };
