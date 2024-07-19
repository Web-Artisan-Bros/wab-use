<script lang="ts" setup>
import { classMerge } from '@wab-use/libs'
import { ref, computed } from 'vue'

export interface MediaElementType {
  url: string,
  mime?: string,
  alternativeText: string,
  previewUrl?: string,
  formats?: any[]
}

const props = withDefaults(defineProps<{
  data: MediaElementType
  tag?: string
  simpleImage?: boolean
  cover?: boolean
  imgClass?: string
  class?: any
}>(), {
  cover: true,
  tag: 'div',
  imgClass: ''
})
const el = ref<HTMLElement | null>()

const classes = computed(() => props.class)

defineExpose({el})

</script>

<template>
  <Component :is="tag ?? 'div'" v-if="data" ref="el" :class="classes">
    <VideoMedia v-if="data.mime?.startsWith('video')"
                class="w-full h-full"
                :data="data"
                v-bind="$attrs"/>

    <SvgMedia v-else-if="data.mime?.includes('svg')"
             :url="data.url"
              v-bind="$attrs"/>

    <template v-else>
      <img v-if="simpleImage"
           :src="data.url" :alt="data.alternativeText"
           :class="classMerge('w-full h-full block object-center', imgClass, {'object-cover': cover, 'object-contain': !cover})"
           v-bind="$attrs">

      <ImageMedia v-else
                  :url="data.url"
                  :alternative-text="data.alternativeText"
                  :formats="data.formats"
                  :cover="cover"
                  :class="classMerge('w-full h-full object-center', imgClass)"
                  v-bind="$attrs"/>
    </template>
  </Component>
</template>

<style scoped>
@import url("../styles.css");

</style>
