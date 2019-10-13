const { searchCategories, searchDescription } = require("../services/items");

const author = {
  name: "Diego",
  lastname: "Lopes"
};

module.exports = {
  many: async data => {
    const { category_id } = data.results[0];
    const categories = await searchCategories(category_id);

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
  single: async data => {
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
