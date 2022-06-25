<template>
  <div>
    <h1>Component CustomLayout</h1>
    <p>return to other page</p>
    <button @click="back">back</button>
  </div>
</template>

<script>
export default {
  name: 'CustomLayout',
  layout: 'custom',
  /*layout (context) {
    return 'blog'
  },*/
  methods: {
    back () {
        this.$router.back();
    }
  }
}
</script>
