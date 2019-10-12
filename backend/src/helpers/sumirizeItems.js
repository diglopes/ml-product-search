const { searchCategories, searchDescription } = require("../services/items");

const author = {
  name: "Diego",
  lastname: "Lopes"
};

module.exports = {
  querySearch: async data => {
    const categories = await searchCategories(data);

    const items = data.results.map(item => {
      const filteredItem = {
        id: item.id,
        title: item.title,
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

    return { author, categories, items };
  },
  idSearch: async data => {
    const description = await searchDescription(data.id);

    const item = {
      author,
      id: data.id,
      title: data.title,
      price: {
        currency: data.currency_id,
        amount: data.price,
        decimals: 2
      },
      picture: data.pictures[0].url,
      condition: data.condition,
      free_shipping: data.shipping.free_shipping,
      sold_quantity: data.sold_quantity,
      description
    };

    return item;
  }
};
