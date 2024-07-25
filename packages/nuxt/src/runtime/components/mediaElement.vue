<script lang="ts" setup>
import { classMerge } from '@wab-use/libs'
import { ref, computed } from 'vue'

export interface MediaElementType {
  url: string,
  mime?: string,
  alternativeText: string,
  previewUrl?: string,
  focal?: number[],
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

const focalPoint = computed(() => {
  const toReturn = []
  const focal = props.data.focal

  if (focal?.[0] !== undefined) {
    toReturn.push(`${focal[0]}%`)
  }
  if (focal?.[1] !== undefined) {
    toReturn.push(`${focal[1]}%`)
  }

  if (toReturn.length === 0) {
    return null
  }

  return toReturn.join(' ')
})

defineExpose({ el })

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
           :class="classMerge('w-full h-full block',
                    data.focal ? `` : 'object-center',
                    imgClass,
                    {'object-cover': cover, 'object-contain': !cover},
                   )"
           :style="{ 'object-position': focalPoint }"
           v-bind="$attrs">

      <ImageMedia v-else
                  :url="data.url"
                  :alternative-text="data.alternativeText"
                  :formats="data.formats"
                  :cover="cover"
                  :focal="data.focal"
                  :class="classMerge('w-full h-full', imgClass)"
                  v-bind="$attrs"/>
    </template>
  </Component>
</template>

<style scoped>
@import url("../styles.css");
</style>
