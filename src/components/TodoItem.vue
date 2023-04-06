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
        deleteTodo(id) {
            this.$emit('deleteTodo', id);
        },
        updateTitle() {
            this.isUpdating = !this.isUpdating;
            this.$emit('updateTitle', this.todo.id, this.title);
        },
        changeStatus(event) {
            this.isDone = event.target.checked;
            this.$emit('changeStatus', this.todo.id, this.isDone);
        },
    },
};
</script>
<template>
    <div class="card" v-if="isUpdating">
        <form style="flex: 1; margin: 0" @submit.prevent action="">
            <input @click.stop class="input" type="text" v-model="title" />
            <button
                class="button"
                @click.stop="updateTitle"
                style="background-color: #5cb85c"
            >
                Save
            </button>
            <button
                class="button"
                @click.stop="isUpdating = !isUpdating"
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
            @click.stop="deleteTodo(todo.id)"
            style="background-color: #d9534f"
        >
            Delete
        </button>
        <button
            class="button"
            style="background-color: #5bc0de"
            @click.stop="isUpdating = !isUpdating"
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
            @click.stop
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
