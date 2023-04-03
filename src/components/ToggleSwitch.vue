<script>
export default {
    methods: {
        handleTheme(e) {
            if (e.target.checked) {
                document.getElementById('app').className = 'light';
            } else {
                document.getElementById('app').className = 'dark';
            }
        },
    },
};
</script>
<template>
    <input type="checkbox" id="check" class="toggle" @change="handleTheme" />
    <label for="check"></label>
</template>
<style>
input[type='checkbox'].toggle {
    position: absolute;
    left: -9999;
    top: -9999;
    opacity: 0;
}

input[type='checkbox'].toggle:focus + label::before {
    outline: 1px solid green;
}

input[type='checkbox'].toggle + label {
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
}
input[type='checkbox'].toggle + label::before {
    content: '';
    width: 2em;
    height: 1em;
    background-color: var(--main-color);
    border-radius: 1em;
    margin-right: 0.25em;
    transition: 200ms ease-in-out;
}
input[type='checkbox'].toggle:checked + label::before {
    background-color: var(--main-color);
}

input[type='checkbox'].toggle + label::after {
    content: '';
    width: 0.9em;
    height: 0.9em;
    background-color: #7c7777;
    border-radius: 1em;
    position: absolute;
    left: 0.1em;
    transition: 200ms ease-in-out;
}
input[type='checkbox'].toggle:checked + label::after {
    transform: translateX(100%);
    background-color: yellow;
}
</style>
