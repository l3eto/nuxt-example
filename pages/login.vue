<template>
    <div>
        <h1>LOGGIN PLIS</h1>
        <button @click="loggin">loggin()</button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

  export default {
    name: 'Login',
    head: {
        title: 'Login page',
    },
    computed: {
        ...mapGetters({
            isAuthenticated: 'user/isAuthenticated'
        })
    },
    methods: {
        loggin() {
            this.$store.commit('user/setAuthenticated', true);
            this.$router.push('/profile');
        }
    }
  }
</script>