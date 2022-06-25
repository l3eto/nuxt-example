export const state = () => ({
    counter: 0
  })
  
  export const getters = {
    getCounter(state) {
      return state.counter
    }
  }
  
  export const mutations = {
    increment(state) {
      state.counter++
    },
    setvalue(state, value) {
      state.counter = value;
    }
  }
  
  export const actions = {
    fetchCounter({ commit, state }) {
      // make request
      const res = { data: 10 };
      commit('setvalue', res.data);
    }
  }
