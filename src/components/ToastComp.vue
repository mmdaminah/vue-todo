<template>
    <div class="toast-wrapper">
        <div class="toast">You must enter a value for the todo</div>
    </div>
</template>

<style>
.toast-wrapper {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    top: 20px;
}
.toast {
    padding: 20px;
    color: white;
    background: #ff0062;
    border-radius: 10px;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
}
</style>
