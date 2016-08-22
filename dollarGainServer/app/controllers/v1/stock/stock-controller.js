
function StockController() {
}

function get(req, res, next) {
  res.status(200).json({ hello: 'world' });
}

StockController.prototype = {
  get: get
};

var stockController = new StockController();

module.exports = stockController;
