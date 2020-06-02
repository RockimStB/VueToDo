<template>
    <div>
        <h1> Add Todo</h1>
        <div class="add">
            <form @submit= "onSubmit">
                <input type="text" v-model= "title" placeholder="Add Todo">
                <input type="submit" value= "Submit">
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddTodo",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit(e) {
      e.preventDefault();
      this.addTodo(this.title);
    }
  }
};
</script>

<style scoped>

form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #1a8fda;
  outline: 0;
}
input[type="submit"] {
  flex: 2;
  background: #0f409b;
  color: #fff;
  border: 1px #0f409b solid;
  cursor: pointer;
}

</style>