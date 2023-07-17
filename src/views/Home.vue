<template>
  <Header></Header>
  <Card
  Title="About Me"
  description="Enthusiastic, positive, and willing to explore new ideas and concepts. I have the most important thing, a desire to work and learn alongside a team with the same aspirations. I have been passionate about Warhammer 40K since I was 10 years old, and that's a lot of painted miniatures, so dedication to detail and patience are implicit in me. If you are looking for a determined and ambitious person, you just have to contact me."
  :imgIncludeisible="false"
  />
  <Animation
    img="tyranid.gif"
    :direction="orientationLeftAnimation"
    description="Coordinated with my teammates like the hive mind of the Tyranids."
  />
  <Animation img="astraMilitarum.gif"
  description="Versatile and determined like the Astra Militarum."
   />
  <Card
  Title="Languages and Tools"
  description="JavaScript, HTML, CSS, VUE, TypeScript, Node.js, Sass preprocessor, Boostrap, Ant-Desing-Vue, FireBase"
    :img="[
      'JavaScript.png',
      'HTML.png',
      'CSS.png',
      'VUE.png',
      'typeScript.png',
      'nodeJs.png',
      'sass.png',
      'boostrap.png',
      'antDesing.png',
      'fireBase.png',
  
  
  ]"
    :imgInclude="true"
    />
    <Animation
    img="eldar.gif"
    :direction="orientationLeftAnimation"
    description="Here you can see several of my projects."
    />
    <CardCarrousel
    Title="Projetcs"
  />
</template>

<script setup>
import Animation from "../components/Animation.vue";
import Card from "../components/Card.vue";
import CardCarrousel from "../components/CardCarrousel.vue";
import Header from "../components/Header.vue";

const orientationLeftAnimation = "transform: scaleX(-1);";
</script>

<style lang="scss" scoped></style>
