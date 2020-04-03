const products = require('./../products.json');

exports.productsGetAll = async (req, res) => {
  res.json(products);
};
