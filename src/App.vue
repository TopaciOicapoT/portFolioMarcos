<script setup>

import Navbar from "./components/Navbar.vue";
import { RouterView } from "vue-router";



</script>

<template>
 <a-layout class="antLayout">

     <Navbar></Navbar>
     
     <section  class="container">
         <RouterView />
        </section>
    </a-layout>
</template>

<style lang="scss" scoped>
.antLayout{
    padding-bottom: 10rem;
    min-height: 100vh;
    background: radial-gradient(circle,#010f68, #020a3d, #010628,#000000, #000000) ;

}

</style>
