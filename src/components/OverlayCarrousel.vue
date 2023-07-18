<template>
  <div class="overlay">
    <div v-for="(imgItem, index) in landPageTools" :key="index">
      <img
        style="width: 60%; height: 30px; margin: 1rem"
        :src="imgItem"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  landPageTools: Array,
});
</script>

<style lang="scss" scoped>
.overlay {
  display: flex;
  flex-wrap:wrap;
  position: absolute;
  justify-content: space-evenly;
  
  top: 0;
  bottom: 0;
  color: aliceblue;
  height: 100px;
  width: 100%;
  opacity: 0;

  background: linear-gradient(#010b4f, #000d63, #001499, #020b46, #000000);
  transition: all 1s;
  &:hover {
    position: relative;
    opacity: 1;
  }
}
</style>
