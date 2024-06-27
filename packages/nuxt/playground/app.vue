<template>
  <div class="app">
    <SvgMedia style="color: white" eager url="http://localhost:8056/assets/c4744fa6-a211-4709-90e0-1f46d5e1c29c" />

    <TextStaggerAnimate :text="text" type="letter" animation="reveal"
                        style="font-size: 5rem"
                        @click="changeText"
    />

    <FadeUp>
      <TextSplitter text="Ciao come va?" type="letter"/>
    </FadeUp>

    <TextStaggerAnimate :text="text" type="letter" animation="fade"
                        :once="false"
                        style="font-size: 5rem"
                        @click="changeText"/>

  </div>
  <div class="box-wrapper">
    <FadeUp class="box"></FadeUp>
  </div>

  <SvgMediaMainRenderer />
</template>

<script setup>
const text = ref('Hello World Lorem ipsum sit amet lorem ipsum')

const changeText = () => {
  text.value = 'Altro testo più semplice'
}
</script>

<style>
.app {
  padding: 5rem;
  color: white;
  background: red;
}

.box-wrapper {
  overflow: hidden;
}

.box {
  width: 50vi;
  height: 50vi;
  background: blue;
  margin-top: 100vh;
}
</style>
