<template>
  <Header></Header>
  <LineAnimation/>
  <Card
  Title="About Me"
  description="Enthusiastic, positive, and willing to explore new ideas and concepts. I have the most important thing, a desire to work and learn alongside a team with the same aspirations. I have been passionate about Warhammer 40K since I was 10 years old, and that's a lot of painted miniatures, so dedication to detail and patience are implicit in me. If you are looking for a determined and ambitious person, you just have to contact me."
  :imgInclude="false"
  />
  <LineAnimation/>
  <Animation
  img="tyranid.gif"
  :direction="orientationLeftAnimation"
  description="Coordinated with my teammates like the hive mind of the Tyranids."
  />
  <LineAnimation/>
  <Animation img="astraMilitarum.gif"
  description="Versatile and determined like the Astra Militarum."
  />
  <LineAnimation/>
  <Card
  Title="Languages and Tools"
  description="JavaScript, HTML, CSS, VUE, TypeScript, Node.js, Sass preprocessor, Bootstrap, Ant-Desing-Vue, FireBase, Lit, docker, postgreSQL"
  :img="[
    'JavaScript.png',
    'HTML.png',
    'CSS.png',
    'VUE.png',
    'typeScript.png',
    'nodeJs.png',
    'sass.png',
    'bootstrap.png',
    'antDesing.png',
    'fireBase.png',
    'lit.svg',
    'docker.png',
    'postgresql.png'
    
    
  ]"
    :imgInclude="true"
    />
    <LineAnimation/>
    <Animation
    img="eldar.gif"
    :direction="orientationLeftAnimation"
    description="Here you can see several of my projects."
    />
    <LineAnimation/>
    <CardCarrousel
    Title="Projetcs"
  />
</template>

<script setup>
import Animation from "../components/Animation.vue";
import Card from "../components/Card.vue";
import CardCarrousel from "../components/CardCarrousel.vue";
import Header from "../components/Header.vue";
import LineAnimation from "../components/lineAnimation.vue";

const orientationLeftAnimation = "transform: scaleX(-1);";
</script>

<style lang="scss" scoped></style>
