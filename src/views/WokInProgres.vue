<template>
  <div class="back">
    <BackButton></BackButton>
  </div>
  <section class="content">
    <a
      class="anchor"
      target="_blank"
      href="https://dream-team-moto-gp.netlify.app/"
    >
      Click to acces
    </a>
    <a-card class="card" hoverable>
      <template #cover>
        <img alt="example" src="/workInProgres.png" />
      </template>
      <a-card-meta
        class="card-description"
        title="This website is a work in progress."
      >
      </a-card-meta>
    </a-card>
  </section>
</template>

<script setup>
import BackButton from "../components/BackButton.vue";
</script>

<style lang="scss" scoped>
@mixin titles() {
  padding: 1rem;
  border: 2px solid rgb(137, 134, 134);
  box-shadow: 0px 1px 2px rgb(141, 137, 137), 1px 2px 3px rgb(204, 193, 193),
    1px 1px 4px rgb(159, 159, 159), 0px 0px 5px rgb(65, 64, 64) inset;
  border-radius: 5px;
  text-align: center;
  color: rgb(0, 0, 0);
  background: rgb(255, 255, 255);
}

.back {
  display: grid;
  place-items: center;
  padding: 2rem;
  padding-bottom: 0;
}
.anchor {
  @include titles();
  font-family: Roboto, Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  transform: scale(0.9);
  font-size: 22px;
  transition: all 400ms;
  &:hover {
    transform: scale(1);
  }
}

.content {
  margin-top: 2rem;
  display: grid;
  place-content: center;
  padding: 3rem;

  .card {
    display: grid;
    place-items: center;
    margin: 3rem;
    border: 2px solid rgb(137, 134, 134);
    box-shadow: 0px 1px 2px rgb(141, 137, 137), 1px 2px 3px rgb(204, 193, 193),
      1px 1px 4px rgb(159, 159, 159), 0px 0px 5px rgb(65, 64, 64) inset;
    border-radius: 15px;
    background-color: yellow;
    text-align: center;
  }
}
</style>
