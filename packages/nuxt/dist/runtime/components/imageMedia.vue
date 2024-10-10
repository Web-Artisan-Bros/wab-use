<script lang="ts" setup>
import { computed } from 'vue'

export interface ResponsiveImageFormat {
  width: number;
  url: string;
}

const props = defineProps<{
  url: string;
  alternativeText: string;
  formats?: ResponsiveImageFormat[];
  cover?: boolean;
  focal?: number[];
}>()

const focalPoint = computed(() => {
  const toReturn = []

  if (props.focal?.[0] !== undefined) {
    toReturn.push(`${props.focal[0]}%`)
  }
  if (props.focal?.[1] !== undefined) {
    toReturn.push(`${props.focal[1]}%`)
  }

  if (toReturn.length === 0) {
    return null
  }

  return toReturn.join(' ')
})

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
  <picture class="block"
           :class="focal ? `` : 'object-center'"
           :style="{ 'object-position': focalPoint }"
           v-bind="$attrs">
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
         :style="{'object-position': 'inherit'}"
         loading="lazy"
    >
  </picture>
</template>

<style scoped>
@import url("../styles.css");
</style>
