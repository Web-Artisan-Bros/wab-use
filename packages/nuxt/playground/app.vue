<template>
  <div class="app">
    <!--    <SvgMedia style="color: white" eager url="http://localhost:8056/assets/c4744fa6-a211-4709-90e0-1f46d5e1c29c" />

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

        <MediaElement :data="{
          url: 'https://www.aeroportidipuglia.it/wp-content/uploads/2023/06/garganoeasytoreach_2023_gargano_header.png',
        }"></MediaElement>

        <MediaElement :data="{
          url: 'https://www.aeroportidipuglia.it/wp-content/uploads/2023/06/garganoeasytoreach_2023_gargano_header.png',
        }" simple-image></MediaElement>-->

    <div class="flex flex-col gap-3">
      <Expandable hide-trigger-on-expand>
        <template #target="{setRef}">
          <p class="overflow-hidden line-clamp-2" :ref="el => setRef(el)">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
            Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
            Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
            Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable
            source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular
            during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
            section 1.10.32.
            <!--          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.-->
            <!--          here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.-->
          </p>
        </template>

        <template #trigger="{setRef}">
          <button class="border border-white p-4" :ref="el => setRef(el)">Expand</button>
        </template>
      </Expandable>
    </div>

    <hr>
    <div class="flex flex-col gap-3 mt-10">
      <Expandable hide-trigger-on-expand>
        <template #target="{setRef}">
          <p class="hidden" :ref="el => setRef(el)">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
            Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
            Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
            Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable
            source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular
            during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
            section 1.10.32.
            <!--          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.-->
            <!--          here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.-->
          </p>
        </template>

        <template #trigger="{setRef}">
          <button class="border border-white p-4" :ref="el => setRef(el)">Expand</button>
        </template>
      </Expandable>
    </div>
  </div>
  <!--  <div class="box-wrapper">
      <FadeUp class="box"></FadeUp>
    </div>-->

  <TextStaggerAnimate :text="text" type="letter" animation="fade"
                      :once="false"
                      style="font-size: 5rem"
                      class="border border-red-400 m-10"
                      @click="changeText"/>

  <SvgMediaMainRenderer/>
</template>

<script setup>
const text = ref('Hello World Lorem ipsum sit amet lorem ipsum')

const changeText = () => {
  text.value = ['Altro testo più semplice', 'Hello World Lorem ipsum sit amet lorem ipsum'].find(t => t !== text.value)
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
