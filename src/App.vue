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
    background: radial-gradient(circle,#010b4f, #010628, #000000,#000000, #000000) ;
    &{
    
        animation: blink 8s infinite;
    }
}
@keyframes blink{
    0%{
        background: radial-gradient(circle,#02106e, #010628, #000000,#000000, #000000) ;
    }
    25%{
        background: radial-gradient(circle,#01106e, #010628, #000000,#000000, #000000) ;
    }
    50%{
        background: radial-gradient(circle,#00106e, #010628, #000000,#000000, #000000) ;
    }
    75%{
        background: radial-gradient(circle,#01106e, #010628, #000000,#000000, #000000) ;
    }
    100%{
        background: radial-gradient(circle,#02106e, #010628, #000000,#000000, #000000) ;
    }
    
}
</style>
