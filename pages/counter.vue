<!-- Please remove this file from your project -->
<template>
  <div>
      <p>nuxt component tutorial counter (component): {{ counter }}</p>
      <p>nuxt component tutorial counter (store): {{ counterStore }}</p>
      <br>
      <button @click="increment">increment()</button>
      <button @click="incrementStore">mutation - incrementStore()</button>
      <button @click="setCounterStore">actions - setCounterStore()</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Counter',
  data () {
    return {
      counter: 0,
    };
  },
  computed: {
    ...mapGetters({
      counterStore: 'counter/getCounter'
    })
  },
  methods: {
    increment () {
      this.counter += 1;
    },
    ...mapMutations({
        incrementStore: 'counter/increment'
    }),
    ...mapActions({
        setCounterStore: 'counter/fetchCounter'
    })
  }
}
</script>
