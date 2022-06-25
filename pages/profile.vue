<template>
    <div>
        <h1>YOU ARE LOGGED</h1>
        <button @click="disconnect">disconnect()</button>
    </div>
</template>

<script>
  export default {
    name: 'Profile',
    middleware: 'auth',
    methods: {
        disconnect() {
            this.$store.commit('user/setAuthenticated', false);
            this.$router.push('/');
        }
    }
  }
</script>