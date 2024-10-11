<script lang="ts" setup>
import { animate } from 'framer-motion/dom'
import { computed, ref, watch } from 'vue'
import { useInView } from '#imports'
import { usePreferredReducedMotion } from "@vueuse/core";

const props = withDefaults(defineProps<{
  delay?: number,
  threshold?: number,
  tag?: string,
  once?: boolean
  from?: 'left' | 'right' | 'top' | 'bottom'
}>(), {
  delay: 0,
  threshold: 0.5,
  tag: 'div',
  from: 'bottom'
})

const preferredReducedMotion = usePreferredReducedMotion();

const el = ref<HTMLElement | null>(null)
const wrapper = ref<HTMLElement | null>(null)

const reduceMotion = computed(() => preferredReducedMotion.value === "reduce");

const initialStyles = computed(() => {
  const fromProp = ['left', 'right'].includes(props.from) ? 'X' : 'Y'
  const fromValue = ['left', 'top'].includes(props.from) ? '-30%' : '30%'

  return { 'transform': `translate${fromProp}(${fromValue})` }
})

watch(() => wrapper.value, (wrapper) => {
  if (!wrapper) return

  useInView(wrapper, {
    once: props.once,
    onInView: () => {
      const fromProp = ['left', 'right'].includes(props.from) ? 'x' : 'y'
      const fromValue = ['left', 'top'].includes(props.from) ? '-30%' : '30%'

      if (reduceMotion.value){
        el.value!.style.opacity = '1'
        el.value!.style.transform = 'none'
        return
      }

      animate(el.value as HTMLElement, {
        [fromProp]: [fromValue, 0],
        opacity: 1
      }, {
        delay: props.delay ?? 0,
        duration: reduceMotion.value ? 0 : 1,
        ease: [.23, 1, .32, 1]
      })
    },
    onOutView: () => {
      const fromProp = ['left', 'right'].includes(props.from) ? 'x' : 'y'
      const fromValue = ['left', 'top'].includes(props.from) ? '-30%' : '30%'

      if (el.value) {
        if (reduceMotion.value){
          return
        }

        animate(el.value as HTMLElement, {
          [fromProp]: fromValue,
          opacity: 0
        }, {
          duration: reduceMotion.value ? 0 : 1,
          ease: [.23, 1, .32, 1]
        })
      }
    },
    amount: props.threshold
  })
})

</script>

<template>
  <Component :is="tag ?? 'div'" ref="wrapper" class="fade-up-wrapper">
    <div ref="el" class="fade-up"
         :style="initialStyles">
      <slot/>
    </div>
  </Component>
</template>

<style scoped>
.fade-up {
  opacity: 0;
}
</style>
