<template>
    <Navbar/>
    <div id="wrapper">
        <RouterView/>
    </div>
</template>

<script setup>

    import { RouterLink, RouterView } from "vue-router";
    import Navbar from "./components/Navbar.vue";

</script>
