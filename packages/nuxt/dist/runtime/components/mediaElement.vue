<script lang="ts" setup>
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
           class="w-full h-full object-center"
           :class="{'object-cover': cover}">

      <ImageMedia v-else
                 :url="data.url"
                 :alternative-text="data.alternativeText"
                  :formats="data.formats"
                 :cover="cover"
                 class="w-full h-full"
      />
    </template>
  </Component>
</template>

<style scoped>

</style>
