<template>
  <div>
    INDEX PAGE JS//
    <p>isAuthenticated: {{ isAuthenticated }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'IndexPage',
  computed: {
    ...mapGetters({
      isAuthenticated: 'user/isAuthenticated'
    })
  },
}
</script>
