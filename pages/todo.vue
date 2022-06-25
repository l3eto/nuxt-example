<template>
  <ul>
    <li v-for="todo in todos" :key="todo.text">
      <input :checked="todo.done" @change="toggle(todo)" type="checkbox">
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
    </li>
    <li><input @keyup.enter="addTodo" placeholder="What needs to be done?"></li>
  </ul>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Todo',
  head() {
    return {
      title: this.title,
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
      title: 'TITLE FROM DATA'
    }
  },
  computed: {
    ...mapGetters({
      todos: 'todo/getList'
    })
  },
  methods: {
    addTodo (e) {
      this.$store.commit('todo/add', e.target.value)
      e.target.value = ''
    },
    ...mapMutations({
      toggle: 'todo/toggle'
    })
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>