<script setup lang="ts">
import { ref, type RendererNode, useSlots, watch } from 'vue'
import { onNuxtReady } from '#app'
import { animate } from 'framer-motion/dom'

const props = defineProps<{
  hideTriggerOnExpand?: boolean
}>()

const targetEl = ref<RendererNode | undefined | null>()
const triggerEl = ref<RendererNode | undefined | null>()
const slots = useSlots()
const expanded = ref(false)
const initialTargetStyles = ref<any>({})

watch(() => expanded.value, (value: boolean) => {
  if (targetEl.value && triggerEl.value) {

    if (value) {
      initialTargetStyles.value['offsetHeight'] = targetEl.value.offsetHeight
      initialTargetStyles.value['-webkit-line-clamp'] = getComputedStyle(targetEl.value as any).getPropertyValue('-webkit-line-clamp')
    }

    const tl = [
      [targetEl.value as any, {
        height: value ? `${targetEl.value.scrollHeight}px` : `${initialTargetStyles.value.offsetHeight}px`
      }]
    ]

    if (props.hideTriggerOnExpand) {
      tl.push([triggerEl.value as any, {
        opacity: value ? 0 : 1,
        marginTop: !value ? 0 : '-' + (triggerEl.value as any).offsetHeight + 'px',
        display: 'block'
      }, { at: '<' }])
    }

    animate(tl as any, {type: 'spring', duration: .5})
        .then(() => {
          targetEl.value.style.height = ''
          targetEl.value.style['-webkit-line-clamp'] = value ? 'unset' : ''

          if (props.hideTriggerOnExpand && value) {
            triggerEl.value.style.display = 'none'
          }
        })
  }
})

onNuxtReady(() => {
  targetEl.value = slots.target?.()?.[0]?.el
  triggerEl.value = slots.trigger?.()?.[0]?.el

  if (!targetEl.value || !triggerEl.value) {
    throw new Error('Missing target or trigger slot')
  }

  triggerEl.value.addEventListener('click', () => {
    expanded.value = !expanded.value
  })
})
</script>

<template>
  <slot name="target"></slot>
  <slot name="trigger"></slot>
</template>

<style scoped>

</style>
