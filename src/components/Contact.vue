<template>
  <section class="main" ref="targetElement">
    <Transition name="fade" mode="out-in">
    <div class="layout"
    v-if="visible"
    >
        <a href="https://www.linkedin.com/in/marcos-molina-a78b5b250/" target="_blank"
        class="anchor"
        >
          <img
            class="listItem"
            src="/linkedin.png"
            alt=""
          />
        </a>
        <a href="https://github.com/" target="_blank"
        class="anchor"
        >
          <img
          
            class="listItem"
            src="/gitHub.png"
            alt=""
          />
        </a>
        <RouterLink to="/form"    class="anchor">
     
          <img

          class="listItem"
          src="/gMail.png"
          alt=""
          />
        </RouterLink>

      </div>
    </Transition>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { RouterLink } from "vue-router";


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
  console.log(visible.value)
});
</script>

<style lang="scss" scoped>
.main {
  padding: 2rem;
  background: linear-gradient(#000000, #020b46, #001499, #020b46, #000000);
  border-radius: 20%;
  width: 100%;
  height: 100px;  
  .layout {
    display: flex;
  justify-content: space-around;
    .anchor{
      
      .listItem {
        height: 50px;
        width: 50px;
        transition: all 400ms;
        &:hover{
          transform: scale(1.5);
        }
      }
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
