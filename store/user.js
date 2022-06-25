export const state = () => ({
    authenticated: false
  })
  
  export const getters = {
    isAuthenticated (state) {
        return state.authenticated
    }
  }

  export const mutations = {
    toggle (state) {
      state.authenticated = !state.authenticated
    },
    setAuthenticated (state, value) {
      state.authenticated = value
    }
  }