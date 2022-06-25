export default function ({ store, redirect }) {
    const isAuthenticated = store.state.user.authenticated;
    if (!isAuthenticated) {
      return redirect('/login')
    }
  }