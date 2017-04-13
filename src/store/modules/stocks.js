import stocksData from '../../dummy/stocks';

const state = {
  stocks: [],
};

const mutations = {
  'FETCH_STOCKS' (state, stocks) {
    state.stocks = stocks;
  },
  'RND_STOCKS' (state, stocks) {

  }
};

const actions = {
  buyStocks: (store) => {
    store.commit();
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