<template>
    <div>
        <h1> Add Todo</h1>
        <div class="add">
            <form>
                <input type="text" v-model= "title" placeholder="Add Todo">
                <input type="submit" value= "submit">
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name:"AddTodo"
}
</script>

<style scoped>

</style>