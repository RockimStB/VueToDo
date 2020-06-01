<template>
  <div id="app" >
    <link rel="stylesheet" href="/CSS/tailwind.css"> <!--Using this link allows tailwind css to be used simular to linking a css style sheet-->
  <div class=container>
    <AddTodo/>
    <Todos/>
    </div>
  </div>
</template>

<script>
import Todos from './components/Todos.vue'
import AddTodo from './components/AddTodo.vue'

export default {
  name: 'App',
  components: {
    Todos,
    AddTodo
  }
}
</script>

<style>

body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}

form{
  display:flex;
}

input[type="text"]{
  flex:10;
  padding: 10px;
  border: 1px solid #41b883;
  outline:0;
}

input[type= "submit"]{
  flex:2;
  background:#41b883;
  color:#41b883;
  border: 1px #41b883 solid ;
  cursor: pointer;
}
</style>
