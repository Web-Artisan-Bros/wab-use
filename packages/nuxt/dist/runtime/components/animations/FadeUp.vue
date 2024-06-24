<script lang="ts" setup>
import { animate } from 'framer-motion/dom'
import { ref, watch } from 'vue'

const props = defineProps<{
  delay?: number,
  threshold?: number,
  tag?: string,
  once?: boolean
}>()

const el = ref<HTMLElement>(null)

watch(() => el.value, (element) => {
  if (!element) return

  useInView(element, {
    once: props.once,
    onInView: () => {
      animate(element, {
        y: '0%',
        opacity: 1
      }, {
        delay: props.delay ?? 0,
        duration: 1,
        ease: [.23, 1, .32, 1]
      })
    },
    onOutView: () => {
      if (!props.once) {
        animate(element, {
          y: '30%',
          opacity: 0
        }, {
          duration: 1,
          ease: [.23, 1, .32, 1]
        })
      }
    },
    amount: props.threshold
  })
})

</script>

<template>
  <Component :is="tag ?? 'div'" ref="el" class="fade-up">
    <slot />
  </Component>
</template>

<style scoped>
.fade-up{opacity:0;transform:translateY(30%)}
</style>
