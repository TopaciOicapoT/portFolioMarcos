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
      <a-card
        class="card"
        :bordered="false"
        :style="{ background: 'transparent' }"
      >
        <div style="display: grid; place-items: center;" v-if="Props.imgInclude">
          <ul
            style="
              width: 250px;
              display: grid;
              place-content: center;
              grid-template-columns: auto auto;
              white-space: nowrap;
            "
            class="cardImg"
          >
            <div  v-for="(imgItem, index) in img" :key="index">
              <img
                style="height: 80px; grid-column: 1 / span 1; margin: 1rem"
                :src="`/${imgItem}`"
              />
            </div>
          </ul>
        </div>
        <strong
          class="description"
          :style="{ color: 'aliceblue', with: '70%', textAlign: 'center' }"
        >
          {{ description }}
        </strong>
      </a-card>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";

const Props = defineProps({
  Title: String,
  description: String,
  img: Array,
  imgInclude: Boolean,
});

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
  color: aliceblue;
  overflow-wrap: balance;
  h1 {
    text-align: center;
    text-shadow: 2px 4px 2px #364d79;
    font-size: 20px;
    transition: all 500ms;
    &:hover{
      animation: shake 500ms linear;
    }
  }
  .contain {
    align-items: center;
    min-height: 400px;
    margin: 2rem;
    min-width: 250px;
    max-width: 450px;
    .card {
      overflow: hidden;
      min-width: 300px;
      .cardImg{
        img{
          transition: all 500ms;
          &:hover{
            transform: scale(1.5);
          }

        }
      }
      .description {
        font-size: 18px;
        word-wrap: normal;
      }
    }
  }
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

@keyframes shake {
  0%{
    transform: translateX(-2px);
  }
  10%{
    transform: translateZ(-2px);
  }
  20%{
    transform: translateX(-2px);
  }
  30%{
    transform: translateZ(-2px);
  }
  40%{
    transform: translateX(-2px);
  }
  50%{
    transform: translateZ(-2px);
  }
  60%{
    transform: translateX(-2px);
  }
  70%{
    transform: translateZ(-2px);
  }
  80%{
    transform: translateX(-2px);
  }
  90%{
    transform: translateZ(-2px);
  }

  100%{
    transform: translateZ(0px);
  }
}

@media (max-width: 600px) {
  .box {
    display: grid;
    place-items: center;
    h1 {
      text-align: center;
      font-size: 14px;
    }
    .contain {
      .card {
        .description {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
