<script lang="ts" setup>
import type { MediaElementType } from './mediaElement.vue'
import {useInView} from '../composables/inView'
import { computed, ref } from 'vue'

const props = defineProps<{
  data: MediaElementType,
  class: any
}>()

const videoEl = ref<HTMLVideoElement | null>(null)
const ready = ref(false)
const videoIsReady = ref(false)

videoEl.value?.addEventListener('loadeddata', () => {
  videoIsReady.value = true
})

useInView(videoEl, {
  onInView: () => {
    ready.value = true

    // wait for the DOM to update after ready.value change
    setTimeout(() => {
      videoEl.value?.play()
    })
  },
  onOutView: () => {
    videoEl.value?.pause()
  }
})

const poster = computed(() => {
  return props.data.previewUrl // ?? videoPoster
})
const classes = computed(() => props.class)

</script>

<template>
  <video ref="videoEl"
         autoplay muted loop class="object-cover"
         :class="classes"
         playsinline preload="metadata"
         :poster="poster">
    <source v-if="ready" :src="data.url" type="video/mp4">
  </video>

  <img v-if="!videoIsReady" :src="poster" alt="video placeholder"
       class="absolute inset-0 object-cover"
       :class="classes"
  >
</template>

<style scoped lang="scss">

</style>
