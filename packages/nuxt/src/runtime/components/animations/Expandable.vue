<script setup lang="ts">
import { ref, type RendererNode, watch, computed } from 'vue'
import { onNuxtReady } from '#app'
import { animate } from 'framer-motion/dom'

const props = defineProps<{
  hideTriggerOnExpand?: boolean
}>()

const targetEl = ref<RendererNode | undefined | null>()
const triggerEl = ref<RendererNode | undefined | null>()
const expanded = ref(false)
const initialTargetStyles = ref<any>({})
const isExpandable = computed(() => {
  return targetEl.value && targetEl.value.offsetHeight < targetEl.value.scrollHeight
})

function setTargetRef (el: RendererNode) {
  targetEl.value = el
}

function setTriggerRef (el: RendererNode) {
  triggerEl.value = el
}

watch(() => expanded.value, (value: boolean) => {
  if (targetEl.value && triggerEl.value) {
    const lineClamp = getComputedStyle(targetEl.value as any).getPropertyValue('-webkit-line-clamp')

    if (value) {
      initialTargetStyles.value['offsetHeight'] = targetEl.value.offsetHeight
      initialTargetStyles.value['display'] = getComputedStyle(targetEl.value as any).getPropertyValue('display')

      if (lineClamp) {
        initialTargetStyles.value['-webkit-line-clamp'] = lineClamp
      }
    }

    targetEl.value.style.overflow = 'hidden'
    targetEl.value.style.height = targetEl.value.offsetHeight + 'px'

    if (initialTargetStyles.value['display'] === 'none') {
      targetEl.value.style.display = 'block'
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

    animate(tl as any, { type: 'spring', duration: .5 })
        .then(() => {
          const target = targetEl.value as HTMLElement
          const trigger = triggerEl.value as HTMLElement

          target.style.height = ''

          if (initialTargetStyles.value['display'] === 'none' && !value) {
            target.style.display = ''
          }

          if (lineClamp) {
            // @ts-ignore
            target.style['-webkit-line-clamp'] = (value ? 'unset' : '')
          }

          if (props.hideTriggerOnExpand && value) {
            setTimeout(() => {
              trigger.style.display = 'none'
            })
          }
        })
  }
})

onNuxtReady(() => {
  if (!targetEl.value || (isExpandable.value && !triggerEl.value)) {
    throw new Error('Missing target or trigger slot')
  }

  triggerEl.value.addEventListener('click', () => {
    expanded.value = !expanded.value
  })
})
</script>

<template>
  <slot name="target" :setRef="setTargetRef"></slot>
  <slot v-if="isExpandable" name="trigger" :setRef="setTriggerRef"></slot>
</template>

<style scoped>

</style>
