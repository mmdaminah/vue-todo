<script>
import TodoItem from './TodoItem.vue';

export default {
    props: ['todos', 'searchKey', 'searchDone'],
    methods: {
        deleteTodo(id) {
            this.$emit('deleteTodo', id);
        },
        updateTitle(id, updateTodo) {
            this.$emit('updateTodo', id, updateTodo);
        },
        updateStatus(id, status) {
            this.$emit('changeStatus', id, status);
        },
        filterTodos() {
            return this.todos.filter((item) => {
                if (this.searchDone && !item.isDone) return;
                return item.title.includes(this.searchKey);
            });
        },
    },
    components: {
        TodoItem,
    },
};
</script>
<template>
    <!-- <div class="container"> -->
    <TransitionGroup tag="div" class="container" name="list" appear>
        <TodoItem
            :todo="todo"
            :index="index"
            :key="index"
            @deleteTodo="deleteTodo"
            @updateTitle="updateTitle"
            @changeStatus="updateStatus"
            @click="this.$router.push(`/todo/${todo.id}`)"
            style="cursor: pointer"
            v-for="(todo, index) in filterTodos()"
        />
    </TransitionGroup>
    <!-- </div> -->
</template>
<style scoped>
.container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
.list-enter-from {
    opacity: 0;
    transform: scale(0.6);
}

.list-enter-active {
    transition: all 400ms ease;
}

.list-leave-to {
    opacity: 0;
    transform: scale(0.6);
}
.list-leave-active {
    transition: all 400ms ease;
}
</style>
