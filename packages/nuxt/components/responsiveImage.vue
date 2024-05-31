<script lang="ts" setup>
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

  return props.formats.map((format) => {
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
              :srcset="data.url"/>
    </template>

    <img :src="url"
         :alt="alternativeText"
         class="max-h-full block"
         :class="{'object-cover h-full w-full': cover}"
         loading="lazy"
    >
  </picture>
</template>

<style scoped lang="scss">

</style>
