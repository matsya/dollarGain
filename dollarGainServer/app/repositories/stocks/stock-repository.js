
function StockRepository() {
}

function getStockData(id) {
  return { id: id };
}

StockRepository.prototype = {
    getStockData: getStockData
};

var stockRepository = new StockRepository();

module.exports = stockRepository;
