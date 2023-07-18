<template>
  <div ref="targetElement" class="container">
    <Transition name="fade" mode="out-in">
      <div v-if="visible" class="line"></div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
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
.container {
  display: grid;
  place-content: center;
  .line {
    width: 90vw;
    height: 30px;
    // border-top: 2px solid red;
    animation: neon 1s infinite linear;;
  }
}

@keyframes neon {
    0%{
        border-top: 2px solid red;
    }
    20%{
        border-top: 2px solid rgb(206, 0, 0);
    }
    40%{
        border-top: 2px solid rgb(168, 0, 0);
    }
    50%{
        border-top: 2px solid rgb(125, 0, 0);
    }
    60%{
        border-top: 2px solid rgb(168, 0, 0);
    }
    80%{
        border-top: 2px solid rgb(206, 0, 0);
    }
    100%{
        border-top: 2px solid red;
    }
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(50px);
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
