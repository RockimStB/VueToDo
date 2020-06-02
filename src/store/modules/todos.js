
import axios from 'axios'


const state= {
    todos:[]
}

//to get our todos to display I need to add a getter
const getters= {
    allTodos: state => state.todos
}

const actions= {
    async fetchTodos({commit}){
        const response= await axios.get('https://jsonplaceholder.typicode.com/todos');
        
                //'mutation to call', what to pass in              
        commit('setTodos',response.data);
    },

    async addTodo ({ commit }, title){
        const response= await axios.post('http://jsonplaceholder.typicode.com/todos',{title,
    completed:false});
    //any new todo will not be completed

    commit('newTodo', response.data)
    }
};

const mutations= {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state,todo)=> state.todos.unshift(todo)
}



//This is going to create a boiler plate 
//It will also get the todos form the application level state into the todo components 
export default{
    state,
    getters,
    actions,
    mutations
};