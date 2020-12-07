<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <TodoList title="Simple To-Do List" />
</template>

<script>
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>
