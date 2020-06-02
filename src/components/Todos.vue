
<template>
    <div>
        <h3 >Todos to do</h3>
        <div class="todos">
            <!--I am going to be looping through the div below using the v-for and calling the allTodos getter-->
            <div v-for="todos in allTodos" v-bind:key="todos.id" class="todo">
                 {{todos.title}}
                 <i class="fas fa-trash"></i>
            </div>
        </div>
    </div>
</template>


<script>
import {mapGetters,mapActions } from "vuex";
    export default {
        name:"Todos",
        methods:{
             ...mapActions(['fetchTodos'])
        },

        computed: mapGetters(['allTodos']),
        created(){
            this.fetchTodos();
        }
    }
</script>

<style scoped>
.todos{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #1a8fda;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
</style>
