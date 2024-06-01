<script lang="ts" setup>
// @ts-ignore
import { HTMLToJSON, JSONToHTML } from 'html-to-json-parser'
import { classMerge } from '@wab-use/libs'
import { type SvgMediaType, useSvgMedia } from '../stores/svgMedia'
import { computed, ref, watch } from 'vue'

const props = withDefaults(defineProps<{
  url: string
  includeFullSvg: boolean
  class: string
  showErrorIcon: boolean
}>(), {
  url: '',
  includeFullSvg: false,
  class: '',
  showErrorIcon: true
})

const svgIcons = useSvgMedia()
const svgData = computed<SvgMediaType | null>(() => svgIcons.icons[props.url] ?? null)
const svgEl = ref<HTMLOrSVGElement | null>(null)

const classes = computed(() => props.class)

defineExpose({
  svgEl
})

watch(() => props.url, (url) => {
  svgIcons.load(url, {})
}, {immediate: true})

</script>

<template>
  <client-only>
    <svg v-if="svgData && !includeFullSvg && !svgData.error"
         v-bind="{...(svgData?.props ?? {}), ...$attrs}"
         :class="classMerge('w-full h-full', classes)"
         :style="{fill: 'var(&#45;&#45;svg-fill, currentColor)'}"
         ref="svgEl">
      <use :href="'#' + svgData?.id"></use>
    </svg>

    <svg v-else-if="svgData && includeFullSvg && !svgData.error"
         v-bind="{...(svgData?.props ?? {}), ...$attrs}"
         :class="classMerge('w-full h-full', classes)"
         :style="{fill: 'var(&#45;&#45;svg-fill, currentColor)'}"
         ref="svgEl"
         v-html="svgData.html">
    </svg>

    <svg v-else-if="svgData && svgData.error"
         v-bind="{...(svgData?.props ?? {}), ...$attrs}"
         :class="classMerge('w-full h-full', classes)"
         :style="{fill: 'var(&#45;&#45;svg-fill, currentColor)'}"
         ref="svgEl">
      <use href="#error_icon"></use>
    </svg>
  </client-only>

</template>

<style scoped lang="scss">

</style>
