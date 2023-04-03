<script>
export default {
    methods: {
        handleChange(e) {
            this.$emit('filterTodos', e.target.value);
        },
        changeDone(e) {
            this.$emit('changeDone', e.target.checked);
        },
    },
};
</script>
<template>
    <div class="flex">
        <div>
            <label style="margin-right: 1rem" for="">Search : </label>
            <input
                class="input"
                type="text"
                placeholder="Search in Todos"
                @input="handleChange"
            />
        </div>
        <div style="display: flex; gap: 0.5rem">
            <label for="">Filter By Done</label>
            <input type="checkbox" @change="changeDone" />
        </div>
    </div>
</template>
<style>
.flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
