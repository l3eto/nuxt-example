<template>
  <h1>PAGE VARIABLE _NAME : {{ name }}</h1>
</template>

<script>
  export default {
    name: 'Page',
    head() {
      return {
        title: this.name,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Home page description'
          }
        ]
      }
    },
    data () {
      return {
        name: 'loading'
      }
    },
    async asyncData({ params }) {
      const name = params.name // When calling /abc the name will be "abc"
      return { name }
    }
  }
</script>