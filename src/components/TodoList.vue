<script>
import TodoItem from './TodoItem.vue';

export default {
    props: ['todos', 'searchKey', 'searchDone'],
    methods: {
        deleteTodo(index) {
            this.$emit('deleteTodo', index);
        },
        updateTitle(index, updateTodo) {
            this.$emit('updateTodo', index, updateTodo);
        },
        updateStatus(index, status) {
            this.$emit('changeStatus', index, status);
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
    <div class="container">
        <TodoItem
            :todo="todo"
            :index="index"
            :key="index"
            @deleteTodo="deleteTodo"
            @updateTitle="updateTitle"
            @changeStatus="updateStatus"
            v-for="(todo, index) in filterTodos()"
        />
    </div>
</template>
<style scoped>
.container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
</style>
