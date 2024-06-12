<script lang="ts" setup>
import { classMerge } from '@wab-use/libs'

export interface MediaElementType {
  url: string,
  mime?: string,
  alternativeText: string,
  previewUrl?: string,
  formats?: any[]
}

withDefaults(defineProps<{
  data: MediaElementType
  tag?: string
  simpleImage?: boolean
  cover?: boolean
  imgClass?: string
}>(), {
  cover: true,
  tag: 'div',
})

</script>

<template>
  <Component :is="tag ?? 'div'" v-if="data">
    <VideoMedia v-if="data.mime?.startsWith('video')"
                class="w-full h-full"
                :data="data"/>

    <SvgMedia v-else-if="data.mime?.includes('svg')"
             :url="data.url"
              v-bind="$attrs"/>

    <template v-else>
      <img v-if="simpleImage"
           :src="data.url" :alt="data.alternativeText"
           :class="classMerge('w-full h-full object-center', imgClass, {'object-cover': cover, 'object-contain': !cover})">

      <ImageMedia v-else
                 :url="data.url"
                 :alternative-text="data.alternativeText"
                  :formats="data.formats"
                 :cover="cover"
                  :class="classMerge('w-full h-full object-center', imgClass)"/>
    </template>
  </Component>
</template>

<style scoped lang="scss">

</style>
