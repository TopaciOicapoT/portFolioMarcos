<template>
  
        <RouterLink to="/" class="button">
          BACK
        </RouterLink>
  
</template>

<script setup>
import { RouterLink } from 'vue-router';


</script>

<style lang="scss" scoped>
@mixin titles() {
  margin: 30px;
  padding: 1rem;
  border: 2px solid rgb(137, 134, 134);
  box-shadow: 0px 1px 2px rgb(141, 137, 137), 1px 2px 3px rgb(204, 193, 193),
    1px 1px 4px rgb(159, 159, 159), 0px 0px 5px rgb(65, 64, 64) inset;
  border-radius: 5px;
  text-align: center;
  color: rgb(0, 0, 0);
  font-family: Roboto, Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  background: linear-gradient(#010b4f, #000d63, #001499, #020b46, #000000);
}


.button{
    @include titles();
    color: aliceblue;
    width: 100%;
    font-size: 22px;
    transform: scale(0.8);
    transition: all 400ms ;
    &:hover{
        transform: scale(1);
    }

}
</style>