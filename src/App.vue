<script>
export default {};
</script>

<template>
    <div class="container">
        <router-view v-slot="{ Component }">
            <Transition name="route" mode="out-in">
                <component :is="Component"></component>
            </Transition>
        </router-view>
    </div>
</template>

<style scoped>
.route-enter-from {
    opacity: 0;
    transform: translateX(100px);
}
.route-enter-active {
    transition: all 300ms ease-in;
}

.route-leave-to {
    opacity: 0;
    transform: translateX(-100px);
}
.route-leave-active {
    transition: all 300ms ease-out;
}
</style>
