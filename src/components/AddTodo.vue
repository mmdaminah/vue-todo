<script>
export default {
    data() {
        return {
            todo: '',
        };
    },
    methods: {
        handleAddTodo() {
            this.$emit('addTodo', this.todo);
            this.todo = '';
        },
    },
};
</script>
<template>
    <form @submit.prevent>
        <label for="">Todo : </label>
        <input
            v-model="todo"
            class="input"
            type="text"
            placeholder="Add New Todo"
        />
        <button
            style="background-color: #0275d8"
            class="button"
            @click="handleAddTodo"
        >
            Add
        </button>
    </form>
</template>
<style>
form {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
}
.input {
    background: var(--main-bg);
    color: var(--main-color);
    border: 1px solid var(--main-color);
    border-radius: 8px;
    padding: 0.5rem 1rem;
    flex: 1;
    font-size: larger;
}
.button {
    border-radius: 8px;
    padding: 0.5rem 1rem;
    border: none;
    background-color: var(--main-color);
    color: var(--main-bg);
    cursor: pointer;
    color: white;
}
</style>
