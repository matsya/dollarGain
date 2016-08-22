
function StockService() {
}

function lookupStock(id) {
  return { id: id };
}

StockService.prototype = {
  lookupStock: lookupStock
};

var stockService = new StockService();

module.exports = stockService;
