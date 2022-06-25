export default ({ app }, inject) => {
    // Inject $hello(msg) in Vue, context and store.
    inject('hello', msg => console.log(`MY CONSOLE FROM PLUGIN- Hello ${msg}!`))
  }
  
  