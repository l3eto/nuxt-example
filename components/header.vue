<!-- Please remove this file from your project -->
<template>
    <div>
        HEADER COMPONENT
        <hr>
        <ul>
        <li><nuxt-link to="/custom-layout">CustomLayout</nuxt-link></li>
        <li><nuxt-link to="/page/A">page NAME fix A</nuxt-link></li>
        <li><nuxt-link to="/page/xqnweqwe">page variable name :xqnweqwe</nuxt-link></li>
        <li><hr></li>
        <li><nuxt-link to="/login">LOGGIN MiddlewarE</nuxt-link></li>
        <li v-if="isAuthenticated"><nuxt-link to="/profile">PROFILE (ONLY LOGGED) MiddlewarE</nuxt-link></li>
        <li><hr></li>
        <li><nuxt-link to="/counter">counter</nuxt-link></li>
        <li><nuxt-link to="/todo">todo</nuxt-link></li>
        <li><hr></li>
        <li><nuxt-link to="/plugin">PLUGIN</nuxt-link></li>
        <li><hr></li>
        <li><nuxt-link to="/static">STATIC</nuxt-link></li>
        <li><hr></li>
        <li><nuxt-link to="/asdqweqweasd">page not found (ERROR LAYOUT)</nuxt-link></li>
        <li><a target="_blank" href="https://nuxtjs.org">external link</a></li>
      </ul>
    </div>
</template>

<script>

import { mapGetters } from 'vuex'
export default {
  name: 'Header',
  computed: {
        ...mapGetters({
            isAuthenticated: 'user/isAuthenticated'
        })
    },
}
</script>
