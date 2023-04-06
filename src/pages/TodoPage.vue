<script>
import AddTodo from '../components/AddTodo.vue';
import ToggleSwitch from '../components/ToggleSwitch.vue';
import TodoList from '../components/TodoList.vue';
import SearchTodo from '../components/SearchTodo.vue';
import Toast from '../components/ToastComp.vue';
import todoApi from '../api/todo';

export default {
    data() {
        return {
            todos: [],
            id: 0,
            searchKey: '',
            searchDone: false,
            loading: true,
            showToast: false,
        };
    },
    methods: {
        addTodo(todo) {
            if (todo === '') {
                this.showToast = true;
                setTimeout(() => {
                    this.showToast = false;
                }, 1500);
                return;
            }
            let todoItem = { title: todo, isDone: false };
            todoApi
                .post('/todos.json', todoItem)
                .then((res) => {
                    this.todos.push({ ...todoItem, id: res.data.name });
                })
                .catch((err) => console.log(err));
        },
        deleteTodo(id) {
            todoApi
                .delete(`/todos/${id}.json`)
                .then((res) => {
                    console.log(res);
                    this.todos = this.todos.filter((item) => item.id !== id);
                })
                .catch((err) => console.log(err));
        },
        updateTitle(id, newTitle) {
            const todo = this.todos.find((todo) => todo.id === id);
            todo.title = newTitle;
            todoApi
                .patch(`/todos/${id}.json`, todo)
                .then((res) => {
                    console.log(res);
                    this.todos = this.todos.map((todo) => {
                        if (todo.id === id) return { ...todo, title: newTitle };
                        else return todo;
                    });
                })
                .catch((err) => console.log(err));
        },
        updateStatus(id, newStatus) {
            const todo = this.todos.find((todo) => todo.id === id);
            todo.isDone = newStatus;
            todoApi
                .patch(`/todos/${id}.json`, todo)
                .then((res) => {
                    console.log(res);
                    this.todos = this.todos.map((todo) => {
                        if (todo.id === id) return { ...todo, isDone: status };
                        else return todo;
                    });
                })
                .catch((err) => console.log(err));
        },
        filterTodos(searchKey) {
            this.searchKey = searchKey;
        },
        changeDone(status) {
            this.searchDone = status;
        },
    },
    created() {
        todoApi
            .get('/todos.json')
            .then(({ data }) => {
                this.todos = Object.entries(data).map((item) => ({
                    id: item[0],
                    ...item[1],
                }));
                this.loading = false;
                console.log(data);
            })
            .catch((err) => console.log(err));
    },
    components: {
        AddTodo,
        ToggleSwitch,
        TodoList,
        SearchTodo,
        Toast,
    },
};
</script>

<template>
    <div class="container">
        <header class="header">
            <h2>Todo App</h2>
            <div><ToggleSwitch /></div>
        </header>
        <Transition name="toast">
            <Toast v-if="showToast" />
        </Transition>
        <AddTodo @addTodo="addTodo" />
        <SearchTodo @filterTodos="filterTodos" @changeDone="changeDone" />
        <div
            style="margin-top: 4rem; text-align: center"
            v-if="todos.length === 0"
        >
            There Is No Todos yet
        </div>
        <TodoList
            v-if="!loading"
            style="margin-top: 1rem"
            @deleteTodo="deleteTodo"
            @updateTodo="updateTitle"
            @changeStatus="updateStatus"
            :searchKey="searchKey"
            :searchDone="searchDone"
            :todos="todos"
        />
        <div v-else>Loading...</div>
    </div>
</template>

<style>
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

.toast-enter-active {
    animation: wobble 0.4s ease;
}
.toast-leave-to {
    opacity: 0;
    transform: translate(-50%, -60px);
}
.toast-leave-active {
    transition: all 0.3s ease;
}
@keyframes wobble {
    0% {
        position: fixed;
        left: 50%;
        transform: translate(-50%, -100px);
        /* transform: translateY(-100px); */
        opacity: 0;
    }
    50% {
        /* transform: translateY(0px); */
        transform: translate(-50%, 0px);
        opacity: 1;
    }
    60% {
        /* transform: translateX(8px); */
        transform: translateX(calc(-50% + 8px));
        opacity: 1;
    }
    70% {
        /* transform: translateX(-8px); */
        transform: translateX(calc(-50% - 8px));
        opacity: 1;
    }
    80% {
        /* transform: translateX(4px); */
        transform: translateX(calc(-50% + 4px));
        opacity: 1;
    }
    90% {
        /* transform: translateX(-4px); */
        transform: translateX(calc(-50% - 4px));
        opacity: 1;
    }
    100% {
        /* transform: translateX(0px); */
        transform: translate(-50%, 0);
        opacity: 1;
    }
}
</style>
