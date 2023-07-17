<template>
  <a-layout-header
    class="layout-header"
    :style="{
      position: 'fixed',
      zIndex: 1,
      width: '100%',
      background: 'transparent',
      backdropFilter: 'blur(10px)'
    }"
  >
    <a-menu
      class="menu"
      v-model:selectedKeys="selectedKeys"
      theme="dark"
      mode="horizontal"
      :style="{ lineHeight: '64px', background: 'transparent' }"
    >
      <a-menu-item v-if="homeView" :style="{ background: 'linear-gradient(#010b4f, #000d63, #001499, #020b46, #000000)', borderRadius: '5%'}" key="1"
        ><RouterLink to="/">Back to portfolio</RouterLink></a-menu-item>
      <!-- <a-menu-item v-if="formView" :style="{ background: 'linear-gradient(#010b4f, #000d63, #001499, #020b46, #000000)', borderRadius: '5%'}" key="2"
        ><RouterLink to="/form">Contact</RouterLink></a-menu-item> -->

    </a-menu>
  </a-layout-header>
</template>

<script setup>
import { RouterLink, useRoute } from "vue-router";
import { computed, onMounted, ref, watch } from "vue";

const selectedKeys = ref([1]);
const homeView = ref(false)
const formView = ref(true)
const route = useRoute();
watch(
  () => route.path,
  (newPath) => {
    if (newPath === "/") {
      selectedKeys.value = ["1"];
      homeView.value = false
      formView.value = true
    }
    else if (newPath === "/form") {
      selectedKeys.value = ["2"];
      formView.value = false
      homeView.value = true
      }
    }
    );
    
    onMounted(() => {
      watch(
        () => route.path,
        (newPath) => {
          if (newPath === "/") {
            selectedKeys.value = ["1"];
            homeView.value = false
            formView.value = true
          }
          else if (newPath === "/form") {
            selectedKeys.value = ["2"];
            formView.value = false
            homeView.value = true
            }
          }
          );
});
</script>

<style lang="scss" scoped>

</style>
