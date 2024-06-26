<script lang="ts" setup>
import { computed } from 'vue'

export interface ResponsiveImageFormat {
  width: number;
  url: string;
}

const props = defineProps<{
  url: string;
  alternativeText:string;
  formats?: ResponsiveImageFormat[];
  cover?: boolean;
}>()

const mediaFormats = computed(() => {
  if (!props.formats) return null

  return props.formats.map((format: ResponsiveImageFormat) => {
    return {
      width: format.width,
      url: format.url
    }
  })

})

</script>

<template>
  <picture class="block">
    <template v-if="mediaFormats">
      <source v-for="(data, i) in mediaFormats"
              :key="i"
              :media="'(max-width: ' + data.width + 'px)'"
              :srcset="data.url">
    </template>

    <img :src="url"
         :alt="alternativeText"
         class="h-full w-full block"
         :class="{'object-cover': cover}"
         loading="lazy"
    >
  </picture>
</template>

<style scoped>

</style>
