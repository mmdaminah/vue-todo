<template>
    <div class="container">
        <header class="header">
            <h4>Todo {{ $route.params.id }}</h4>
            <div style="cursor: pointer" @click="this.$router.push('/')">
                back
            </div>
        </header>
        <h1>
            {{ todo.title }}
            <span v-if="todo.isDone">🟢</span>
            <span v-else>🔴</span>
        </h1>
    </div>
</template>

<script>
import instance from '../api/todo';

export default {
    data() {
        return {
            todo: {},
        };
    },
    created() {
        const { id } = this.$route.params;
        console.log(id);
        instance.get(`/todos/${id}.json`).then((res) => {
            this.todo = { id, ...res.data };
        });
    },
};
</script>

<style scoped></style>
