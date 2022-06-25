<template>
  <div>
    <h1>PAGE FIX NAME A</h1>
    <p>return to other page</p>
    <button @click="back">back</button>
  </div>
</template>

<script>
export default {
  name: 'PageA',
  methods: {
    back () {
        this.$router.back();
    }
  }
}
</script>
