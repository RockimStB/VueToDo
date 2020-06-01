//This JS file is basically an entry point for vuex where we combine all of our modules 

import vuex from 'vuex';
import vue from 'vue';
import todos from './modules/todos';

//load vuex
Vue.use(Vuex);

//create store
//We have an object within an object which passes the todo
export default new Vuex.store({
    modules:{
        todos
    } 
});