<template>
  <div class="box">
    <a-card :bordered="false" :style="{ background: 'transparent' }">
      <div ref="targetElement" style="width: 150px">
        <Transition name="fade" mode="out-in">
          <h1 style="color: aliceblue" v-if="visible">{{ Title }}</h1>
        </Transition>
      </div>
    </a-card>
    <div class="contain">
      <a-carousel class="slick-slide" autoplay>
        <div>

          <OverlayCarrousel :landPageTools="['JavaScript.png','HTML.png','CSS.png','sass.png','boostrap.png']"/>

          <a
            target="_blank"
            href="https://spartan-functional-training.netlify.app/"
            ><img src="/spartanLandPageGif.gif" alt=""
          /></a>
        </div>
        <div>
          <OverlayCarrousel :landPageTools="['HTML.png','CSS.png']"/>

          <a target="_blank" href="https://land-page-marcos-molina.netlify.app/"
            ><img src="/landPageDemoGif.gif" alt=""
          /></a>
        </div>
        <div>
          <OverlayCarrousel :landPageTools="['VUE.png','JavaScript.png','HTML.png','CSS.png','sass.png','nodeJs.png','fireBase.png','antDesing.png',]">
          
          </OverlayCarrousel>
          <img style="width: 150px; height: 150px;" src="workInProgres.png" alt="">
          <RouterLink to="/workinprogress">
            <img src="/dreamTeamDemoGif.gif" alt=""/>
          </RouterLink>
        </div>
      </a-carousel>
    </div>
  </div>
  <!-- <a target="_blank" href="https://dream-team-moto-gp.netlify.app/">
</a> -->
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import OverlayCarrousel from "./OverlayCarrousel.vue";
import { RouterLink } from "vue-router";

const Props = defineProps({
  Title: String,
  inProgres: Boolean
});
const spartanTools = [
  "JavaScript.png",
  "HTML.png",
  "CSS.png",
  "sass.png",
  "boostrap.png",
];
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
.box {
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 2;
  padding: 1rem;
  margin: 2rem;
  align-items: center;
  background: transparent;
  color: rgb(153, 153, 153);
  overflow-wrap: break-word;
  h1 {
    text-shadow: 2px 4px 2px #364d79;
    font-size: 20px;
    transition: all 500ms;
    &:hover {
      transform: scale(1.5);
    }
  }
  .contain {
    width: 400px;

    .slick-slide {
      display: block;
      width: auto;
      border-radius: 5%;
      transition: all 1s;
      img {
        width: 100%;
        height: 280px;
      }
    }
  }
}

:deep(.slick-slide) {
  display: flex;
  height: 320px;
  line-height: 160px;
  background: transparent;
  overflow: hidden;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(-50px);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}
.fade-leave-to {
  opacity: 1;
  transform: translateX(0px);
}

@media (max-width: 600px) {
  .box {
    display: grid;
    place-items: center;
    h1 {
      text-align: center;
      font-size: 16px;
    }
    .contain {
      width: 320px;
    }
  }
}

@media (max-width: 340px) {
  
  .box {
    display: grid;
    place-items: center;
    h1 {
      text-align: center;
      font-size: 14px;
    }
    .contain {
      width: 280px;
    }
  }

}

</style>
