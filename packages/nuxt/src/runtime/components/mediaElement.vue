<script lang="ts" setup>
import VideoMedia from './videoMedia.vue'
import SvgMedia from './svgMedia.vue'
import ImageMedia from './imageMedia.vue'

export interface MediaElementType {
  url: string,
  mime?: string,
  alternativeText: string,
  previewUrl?: string,
  formats?: any[]
}

withDefaults(defineProps<{
  data: MediaElementType,
  tag?: string,
  simpleImage?: boolean,
  cover?: boolean,
}>(), {
  cover: true
})

</script>

<template>
  <Component :is="tag ?? 'div'" v-if="data">
    <VideoMedia v-if="data.mime?.startsWith('video')"
                class="w-full h-full"
                :data="data"></VideoMedia>

    <SvgMedia v-else-if="data.mime?.includes('svg')"
             :url="data.url"
              v-bind="$attrs"></SvgMedia>

    <template v-else>
      <img v-if="simpleImage"
           :src="data.url" :alt="data.alternativeText"
           class="w-full h-full object-center"
           :class="{'object-cover': cover}">

      <ImageMedia v-else
                       :url="data.url"
                       :alternative-text="data.alternativeText"
                        :formats="data.formats"
                       :cover="cover"
                       class="w-full h-full"
      ></ImageMedia>
    </template>
  </Component>
</template>

<style scoped lang="scss">

</style>
