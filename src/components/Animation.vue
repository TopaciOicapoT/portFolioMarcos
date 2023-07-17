<template>
<div class="animation-container">
  <div :style="gifPng+orientation"   class="animation"></div>
</div>
<div ref="targetElement"  class="textD">

  <Transition name="fade" mode="out-in">
    <span v-if="visible">{{ description }}</span>
  </Transition>

</div>

</template>

<script setup>

import { ref, onMounted, onUnmounted, computed } from "vue";
   const Props = defineProps({
        img: String,
        direction: String,
        description: String
    })

    const gifPng =ref()
    const orientation = ref()
    orientation.value= Props.direction
    gifPng.value = `background-image: url('/${Props.img}'); `






    const visible = ref(false);
const targetElement = ref(null);
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    const [entry] = entries;
    visible.value = entry.isIntersecting;
  });

  observer.observe(targetElement.value);

  onUnmounted(() => {
    observer.disconnect();
  });
});
</script>

<style lang="scss" scoped>
.animation-container {
  display: flex;
  justify-content: center;
  place-items: center;
  padding: 1rem;
  overflow: hidden;
  .animation {
    width: 300px;
    height: 250px;
    background-size: contain;
    background-repeat: no-repeat;

  }
}

.textD{
  display: grid;
  place-items: center;
  word-break: balance;
  padding: 2rem;
  color: aliceblue !important;
}
@media (max-width: 450px) {
  .animation-container {

    .animation {
      width: 80%;
    }

  }


  
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(-50px);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1.5s ease;
}
.fade-leave-to {
  opacity: 1;
  transform: translateY(0px);
}



</style>