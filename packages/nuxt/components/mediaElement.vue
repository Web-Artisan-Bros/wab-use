<script lang="ts" setup>
import LocalVideo from './localVideo.vue'
import SvgIcon from './svgIcon.vue'
import ResponsiveImage from './responsiveImage.vue'
import type { ResponsiveImageFormat } from './responsiveImage.vue'

export interface MediaElementType {
  url: string,
  mime?: string,
  alternativeText: string,
  previewUrl?: string,
  formats?: ResponsiveImageFormat[]
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
  <Component :is="tag ?? 'div'">
    <LocalVideo v-if="data.mime?.startsWith('video')"
                class="w-full h-full"
                :data="data"></LocalVideo>

    <SvgIcon v-else-if="data.mime?.includes('svg')"
             :url="data.url"
             v-bind="$attrs"></SvgIcon>

    <template v-else>
      <img v-if="simpleImage"
           :src="data.url" :alt="data.alternativeText"
           class="w-full h-full object-center"
           :class="{'object-cover': cover}">

      <ResponsiveImage v-else
                       :url="data.url"
                       :alternative-text="data.alternativeText"
                        :formats="data.formats"
                       :cover="cover"
                       class="w-full h-full"
                       ></ResponsiveImage>
    </template>
  </Component>
</template>

<style scoped lang="scss">

</style>
