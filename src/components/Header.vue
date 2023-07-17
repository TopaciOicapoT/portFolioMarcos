<template>
  <header class="headContainer">
    <Transition name="fade" mode="out-in">
      <h1 v-if="visible" sty>Hi!👋, I'm Marcos</h1>
    </Transition>
    <span ref="targetElement">Web Developer</span>

    <section>
      <h2>WELCOME TO MY PORTFOLIO</h2>
      <div style="display: flex; max-width: 500px">
        <p style="font-size: small">
          Lover of <strong style="color: rgb(149, 0, 255)">video games</strong>,
          <strong style="color: rgb(8, 45, 194)">programming</strong>,
          <strong style="color: rgb(196, 8, 8)">sports</strong>,
          <strong style="color: rgb(43, 182, 8)">animals</strong> and
          <strong style="color: goldenrod">Warhammer 40K</strong>. In this
          portfolio, I showcase a part of my personality and my qualities as a
          developer. I hope you like it.
        </p>
      </div>
    </section>
    <Contact style="margin-top: 50px;"/>
  </header>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import Contact from "./Contact.vue";
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
.headContainer {
  font-family: Arial, Helvetica, sans-serif;
  display: grid;
  place-content: center;
  color: bisque;
  padding: 0rem 3rem 0rem 3rem;
  height: 500px;
  min-height: 600px;
  text-align: center;
  background: radial-gradient(
    circle,
    #010b4f,
    #000000,
    #000000,
    #000000,
    #000000
  );
  h1 {
    color: bisque;
    font-size: xx-large;
  }
  h2 {
    margin-top: 3rem;
    color: bisque;
    font-size: large;
  }
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(50px);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 2s ease;
}
.fade-leave-to {
  opacity: 1;
  transform: translateX(0px);
}
</style>
