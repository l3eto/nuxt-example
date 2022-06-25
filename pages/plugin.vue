<template>
    <div>
        <h1>PLUGIN MAGIC</h1>
        <button @click="hello">$hello SERVER/CLIENT</button>
        <button @click="alert">$alert ONLY CLIENT</button>
    </div>
</template>

<script>
  export default {
    name: 'Plugin',
    created () {
        this.$hello('HELLO FROM CREATED process.server:'+process.server);
    },
    methods: {
        hello() {
            this.$hello('HELLO FROM METHOD');
        },
        alert() {
            this.$alert('ALERT FROM METHOD');
        }
    }
  }
</script>