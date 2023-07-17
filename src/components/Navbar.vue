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
      <a-menu-item v-if="!homeView" :style="{background: 'gray', borderRadius: '5%'}" key="1"
        ><RouterLink to="/">Home</RouterLink></a-menu-item>

    </a-menu>
  </a-layout-header>
</template>

<script setup>
import { RouterLink, useRoute } from "vue-router";
import { computed, onMounted, ref, watch } from "vue";

const selectedKeys = ref([1]);
const homeView = ref(true)
const route = useRoute();
watch(
  () => route.path,
  (newPath) => {
    if (newPath === "/") {
      selectedKeys.value = ["1"];
      homeView.value = false
    }
    // else if (newPath === "/wod") {
      //   selectedKeys.value = ["2"];
      // }
    }
    );
    
    onMounted(() => {
      watch(
        () => route.path,
        (newPath) => {
          if (newPath === "/") {
            selectedKeys.value = ["1"];
            homeView.value = false
      }
      // else if (newPath === "/wod") {
      //   selectedKeys.value = ["2"];
      // }
    }
  );
});
</script>

<style lang="scss" scoped>

</style>
