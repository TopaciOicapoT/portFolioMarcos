<template>
  <a-layout-header
    class="layout-header"
    :style="{
      position: 'fixed',
      zIndex: 1,
      width: '100%',
      background: 'transparent',
      backdropFilter: 'blur(10px)',
    }"
  >
    <a-menu
      class="menu"
      v-model:selectedKeys="selectedKeys"
      theme="dark"
      mode="horizontal"
      :style="{
        lineHeight: '64px',
        background: 'transparent',
        alignItems: 'center',
      }"
    >
      <a-menu-item
        v-if="homeView"
        :style="{
          background:
            'linear-gradient(#010b4f, #000d63, #001499, #020b46, #000000)',
          borderRadius: '5%',
          heigth: '100%',
        }"
        key="1"
        ><RouterLink style="height: 100%" to="/"
          >Back to portfolio</RouterLink
        ></a-menu-item
      >
    </a-menu>
  </a-layout-header>
</template>

<script setup>
import { RouterLink, onBeforeRouteLeave, onBeforeRouteUpdate, useRoute } from "vue-router";
import { computed, onMounted, ref, watch } from "vue";

const selectedKeys = ref([1]);
const homeView = ref(false);
const viewFalse = ()=>{
  homeView.value= true
}
const route = useRoute();

watch(
    () => route.path,
    (newPath) => {
      if (newPath === "/") {
        selectedKeys.value = ["1"];
        homeView.value = false;
      } else if (newPath !== "/") {
        selectedKeys.value = ["2"];
        homeView.value = true;
      }
    }
  );

onMounted(() => {
   
    watch(
      () => route.path,
      (newPath) => {
        if (newPath === "/") {
          selectedKeys.value = ["1"];
          homeView.value = false;
        } else if (newPath !== "/") {
          selectedKeys.value = ["2"];
          homeView.value = true;
        }
      }
    );

});
</script>

<style lang="scss" scoped>
.layout-header{
  display: grid;
  place-content: center;
}
</style>
