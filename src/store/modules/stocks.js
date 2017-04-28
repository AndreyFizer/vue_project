import stocksData from '../../dummy/stocks';

const state = {
  stocks: [],
};

const mutations = {
  'FETCH_STOCKS'(state, stocks) {
    state.stocks = stocks;
  },
  'RND_STOCKS'(state) {
    state.stocks.forEach(stock => {
      stock.price = Math.round(stock.price * (1 + Math.random() - 0.5))
    })
  }
};

const actions = {
  buyStocks: (store, order) => {
    store.commit('BUY_STOCK', order);
  },
  fetchStocks: (store) => {
    store.commit('FETCH_STOCKS', stocksData);
  },
  randomStocks: (store) => {
    store.commit('RND_STOCKS');
  }
};

const getters = {
  stocks: state => state.stocks,
};

export default {
  state,
  mutations,
  actions,
  getters,
}