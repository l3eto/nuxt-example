export default ({ app }, inject) => {
    // Inject $hello(msg) in Vue, context and store.
    inject('alert', msg => alert(`ALERT CALL ONLY CLIEN:\n${msg}`))
  }
  
  