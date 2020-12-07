<template>
  <h1>{{ title }}</h1>
  <div class="center-container">
  　<div class="todo-list">
　    <div class="todo-row" v-for="item in todoList">
        <div class="todo-tick">
          <input type=checkbox v-model="item.done" />
        </div>
        <div class="todo-title">{{ item.title }}</div>
      </div>
  　</div>
  　<hr />
  　<div class="done-list">
　    <div class="done-row" v-for="item in doneList">
        <div class="todo-title">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'TodoList',
  props: {
    title: String
  },
  data() {
    return {
      allList: [
        { "title": "sa devops assignment", "done": false },
        { "title": "keakaka tickets", "done": false },
        { "title": "infra provisioning", "done": true },
        { "title": "first round", "done": true }
      ]
    }
  },
  mounted() {
    console.log(this.todoList)
    /*
    axios.get('/api/todo-list.json')
      .then(resp => {
        this.todoList = [...resp.data].slice(0, 10)
      })
  */
  },
  computed: {
    todoList() {
      return this.allList.filter(item => !item.done)
    },
    doneList() {
      return this.allList.filter(item => !!item.done)
    }
  }
}
</script>

<style>
.center-container {
  position: relative;
  border: 1px solid grey;
  width: 600px;
  left: 50%;
  margin-left: -300px;
}
.todo-list, done-list {
  position: relative;
  text-align: left;
}
.todo-row, .done-row {
  position: relative;
  display: flex;
  padding: 10px;
  margin: 10px 20px 10px 20px;
}
.todo-row {
  font-weight: bold;
  background-color: #eee;
}
.todo-row .todo-tick {
  width: 10%;
  min-width: 30px;
}
.todo-row .todo-title {
  width: 90%;
}
.done-list {
  margin-top: -20px;
  margin-bottom: 30px;
}
.done-row {
  background-color: palegreen;
  color: darkgrey;
}
</style>
