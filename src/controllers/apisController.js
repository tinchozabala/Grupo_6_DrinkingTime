const db = require("../database/models");

const apisController = {
  products: async (req, res, next) => {
    let resultado = await db.Products.findAll({
      include: ["category", "brand"],
    });
    return res.send(JSON.stringify(resultado));
  },

  productDetail: (req, res, next) => {
    db.Products.findOne({
      where: {
        id: req.params.id,
      },
      include: ["category"],
    })
      .then((resultado) => {
        res.send(JSON.stringify(resultado));
      })
      .catch((e) => {
        console.log(e);
      });
  },

  users: (req, res, next) => {
    db.Customers.findAll()
      .then((resultado) => {
        res.send(JSON.stringify(resultado));
      })
      .catch((e) => {
        console.log(e);
      });
  },

  userDetail: (req, res, next) => {
    db.Customers.findOne({
      where: {
        id: req.params.id,
      },
    })
      .then((resultado) => {
        res.send(JSON.stringify(resultado));
      })
      .catch((e) => {
        console.log(e);
      });
  },

  categories: (req, res, next) => {
    db.Categories.findAll()
      .then((resultado) => {
        res.send(JSON.stringify(resultado));
      })
      .catch((e) => {
        console.log(e);
      });
  },
};

module.exports = apisController;
