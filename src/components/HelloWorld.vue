<template>
  <div class="home">
    <img class="back" src="../assets/fondo.jpg" alt="">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'HelloWorld',
    props: {
      msg: String,
    },
  });
</script>

<style scoped>
  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2.5rem;
    text-align: center;
    text-shadow: 3px 3px 3px #e0bf8e;
  }
  .home {
    position: relative;
    display: block;
    text-align: center;
    width: 100%;
    color: #f3b353;
  }
  .back {
    height: 25vh;
    width: 100%;
  }
</style>
