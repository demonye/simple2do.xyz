<template>
  <v-content>
    <v-row align="center">
      <v-col
        sm="8" offset-sm="2"
        md="6" offset-md="3"
        lg="4" offset-lg="4"
      >
        <v-card outlined>
          <v-card-title>{{ title }}</v-card-title>

          <v-form @submit.prevent="addTask">
            <v-container>
              <v-row>
                <v-col cols="8" sm="9">
                  <v-text-field label="New task" v-model="newTask"></v-text-field>
                </v-col>
                <v-col cols="4" sm="3">
                  <div class="mt-4" style="min-width: 76px">
                    <v-btn x-small fab elevation="0" @click="addTask" color="teal" :disabled="!newTask">
                      <v-icon color="white">mdi-check</v-icon>
                    </v-btn>
                    <v-btn x-small fab elevation="0" class="ml-2" @click="newTask=null" :disabled="!newTask">
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-form>

          <v-card-text>
            <v-list tow-line>
              <v-subheader>To Do</v-subheader>

              <v-list-item-group>
                <template v-for="item in todoList">
                  <v-list-item :key="item.id" v-if="!item.deleted">
                    <v-list-item-action>
                      <v-checkbox v-model="item.done"></v-checkbox>
                    </v-list-item-action>

                    <v-list-item-content>
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-action>
                      <v-btn small icon color="warning" @click="item.deleted = true">
                        <v-icon>mdi-trash-can-outline</v-icon>
                      </v-btn>
                    </v-list-item-action>
                  </v-list-item>
                </template>
              </v-list-item-group>
            </v-list>

            <v-divider></v-divider>

            <v-list>
              <v-subheader>Done</v-subheader>

              <v-list-item-group>
                <template v-for="item in doneList">
                  <v-list-item :key="item.id" v-if="!item.deleted">
                    <v-list-item-action>
                      <v-checkbox v-model="item.done"></v-checkbox>
                    </v-list-item-action>

                    <v-list-item-content>
                      <v-list-item-title>
                        <span style="text-decoration: line-through">
                          {{ item.title }}
                        </span>
                      </v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-action>
                      <v-btn small icon color="warning" @click="item.deleted = true">
                        <v-icon>mdi-trash-can-outline</v-icon>
                      </v-btn>
                    </v-list-item-action>
                  </v-list-item>
                </template>
              </v-list-item-group>
            </v-list>
          </v-card-text>

        </v-card>
      </v-col>
    </v-row>
  </v-content>
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
      newTask: null,
      allList: [
        { id: 1, title: "sa devops assignment", done: false, deleted: false },
        { id: 2, title: "keakaka tickets", done: false, deleted: false },
        { id: 3, title: "infra provisioning", done: true, deleted: false },
        { id: 4, title: "first round", done: true, deleted: false }
      ]
    }
  },
  computed: {
    todoList() {
      return this.allList.filter(item => !item.done)
    },
    doneList() {
      return this.allList.filter(item => !!item.done)
    }
  },
  methods: {
    addTask() {
      if (this.newTask) {
        const newId = this.allList.length + 1
        this.allList.push({
          id: newId, title: this.newTask, done: false, deleted: false
        })
        this.newTask = null
      }
    }
  }
}
</script>

<style lang="scss">

</style>
