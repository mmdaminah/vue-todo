<script>
export default {
    props: ['todo', 'index'],
    data() {
        return {
            isUpdating: false,
            title: this.todo.title,
            isDone: this.todo.isDone,
        };
    },
    methods: {
        deleteTodo(index) {
            this.$emit('deleteTodo', index);
        },
        updateTitle() {
            this.isUpdating = !this.isUpdating;
            this.$emit('updateTitle', this.index, this.title);
        },
        changeStatus(event) {
            this.isDone = event.target.checked;
            this.$emit('changeStatus', this.index, this.isDone);
        },
    },
};
</script>
<template>
    <div class="card" v-if="isUpdating">
        <form style="flex: 1" @submit.prevent action="">
            <input class="input" type="text" v-model="title" />
            <button
                class="button"
                @click="updateTitle"
                style="background-color: #5cb85c"
            >
                Save
            </button>
            <button
                class="button"
                @click="isUpdating = !isUpdating"
                style="background-color: #f0ad4e"
            >
                Cancel
            </button>
        </form>
    </div>
    <div class="card" v-else>
        <div style="flex: 1" :class="{ done: todo.isDone }">
            {{ todo.title }}
        </div>
        <button
            class="button"
            @click="deleteTodo(index)"
            style="background-color: #d9534f"
        >
            Delete
        </button>
        <button
            class="button"
            style="background-color: #5bc0de"
            @click="isUpdating = !isUpdating"
        >
            Update
        </button>
        <label :for="`done${index}`">Done</label>
        <input
            type="checkbox"
            name="done"
            :checked="todo.isDone"
            :id="`done${index}`"
            @change="changeStatus"
        />
    </div>
</template>
<style scoped>
.card {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    border: 1px solid var(--main-color);
    padding: 1rem 2rem;
    border-radius: 8px;
}
.done {
    text-decoration: line-through;
}
</style>
