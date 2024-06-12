<script lang="ts" setup>
import { classMerge } from '@wab-use/libs'
import { type SvgMediaType, useSvgMedia } from '../stores/svgMedia'

const props = withDefaults(defineProps<{
  url: string
  includeFullSvg?: boolean
  class?: string
  showErrorIcon?: boolean,
  lazy?: boolean
}>(), {
  url: '',
  includeFullSvg: false,
  class: '',
  showErrorIcon: true,
  lazy: true
})

const svgIcons = useSvgMedia()
const svgEl = ref<HTMLOrSVGElement | null>(null)
const eagerData = ref({})

const styles = {
  fill: 'var(--svg-fill, currentColor)'
}
const svgData = computed<SvgMediaType | null>(() => svgIcons.icons[props.url] ?? null)
const classes = computed(() => props.class)

defineExpose({
  svgEl
})

if (!props.lazy) {
  const { data } = await useAsyncData('eagerData_' + props.url, () => svgIcons.fetchSvg(props.url))

  eagerData.value = data.value
}

onNuxtReady(() => {
  watch(() => props.url, (url) => {
    if (!url || !props.lazy) return

    svgIcons.load(url, {})
  }, { immediate: true })
})

</script>

<template>
  <svg v-if="!lazy && eagerData"
       ref="svgEl"
       v-bind="{...(eagerData.props ?? {}), ...$attrs}"
       :class="classMerge('w-full h-full', classes)"
       :style="styles"
       v-html="eagerData.html"/>

  <ClientOnly v-else>
    <svg v-if="svgData && !includeFullSvg && !svgData.error"
         ref="svgEl"
         v-bind="{...(svgData?.props ?? {}), ...$attrs}"
         :class="classMerge('w-full h-full', classes)"
         :style="styles"
    >
      <use :href="'#' + svgData?.id"/>
    </svg>

    <svg v-else-if="svgData && includeFullSvg && !svgData.error"
         ref="svgEl"
         v-bind="{...(svgData?.props ?? {}), ...$attrs}"
         :class="classMerge('w-full h-full', classes)"
         :style="styles"
         v-html="svgData.html"/>

    <svg v-else-if="svgData && svgData.error"
         ref="svgEl"
         v-bind="{...(svgData?.props ?? {}), ...$attrs}"
         :class="classMerge('w-full h-full', classes)"
         :style="styles"
    >
      <use href="#error_icon"/>
    </svg>
  </ClientOnly>
</template>

<style>
:root{--svg-fill:currentColor}
</style>
