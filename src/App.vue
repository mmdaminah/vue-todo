<script>
import AddTodo from './components/AddTodo.vue';
import ToggleSwitch from './components/ToggleSwitch.vue';
import TodoList from './components/TodoList.vue';
import SearchTodo from './components/SearchTodo.vue';

export default {
    data() {
        return {
            todos: [],
            id: 0,
            searchKey: '',
            searchDone: false,
        };
    },
    methods: {
        addTodo(todo) {
            if (todo === '') return;
            this.todos.push({ title: todo, id: this.id++, isDone: false });
        },
        deleteTodo(indexToDelete) {
            this.todos = this.todos.filter(
                (item, index) => index !== indexToDelete,
            );
        },
        updateTitle(indexToUpdate, updateTodo) {
            this.todos = this.todos.map((todo, index) => {
                if (index === indexToUpdate)
                    return { ...todo, title: updateTodo };
                else return todo;
            });
        },
        updateStatus(indexToUpdate, status) {
            this.todos = this.todos.map((todo, index) => {
                if (index === indexToUpdate) return { ...todo, isDone: status };
                else return todo;
            });
        },
        filterTodos(searchKey) {
            this.searchKey = searchKey;
        },
        changeDone(status) {
            this.searchDone = status;
        },
    },
    components: {
        AddTodo,
        ToggleSwitch,
        TodoList,
        SearchTodo,
    },
};
</script>

<template>
    <div class="container">
        <header class="header">
            <h2>Todo App</h2>
            <div><ToggleSwitch /></div>
        </header>
        <AddTodo @addTodo="addTodo" />
        <SearchTodo @filterTodos="filterTodos" @changeDone="changeDone" />
        <div
            style="margin-top: 4rem; text-align: center"
            v-if="todos.length === 0"
        >
            There Is No Todos yet
        </div>
        <TodoList
            style="margin-top: 1rem"
            @deleteTodo="deleteTodo"
            @updateTodo="updateTitle"
            @changeStatus="updateStatus"
            :searchKey="searchKey"
            :searchDone="searchDone"
            :todos="todos"
        />
    </div>
</template>

<style scoped>
.container {
    max-width: 768px;
    margin: 0 auto;
}
.header {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
