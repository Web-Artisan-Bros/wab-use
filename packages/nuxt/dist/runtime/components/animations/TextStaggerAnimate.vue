<script setup lang="ts">
import { classMerge } from '@wab-use/libs'
import { animate, stagger } from 'framer-motion/dom'
import TextSplitter from '../TextSplitter.vue'
import type { AnimationPlaybackControls } from 'framer-motion'

const props = withDefaults(
    defineProps<{
      text: string
      tag?: string
      letterClass?: string
      inView?: boolean
      type?: 'letter' | 'word'
      durationIn?: number
      staggerIn?: number
      durationOut?: number
      staggerOut?: number
      animation?: 'reveal' | 'fade',
      once?: boolean
    }>(), {
      tag: 'div',
      letterClass: '',
      type: 'word',
      durationIn: .4,
      staggerIn: .01,
      durationOut: .2,
      staggerOut: .01,
      animation: 'fade',
      once: true
    }
)

const textToShow = ref(props.text)
const wrapperEl = ref<{ el: HTMLElement }>()
const hasRanOnce = ref(false)

const showText = () => {
  const elements = wrapperEl.value?.el?.querySelectorAll('.' + props.type)

  let animation = {}

  switch (props.animation) {
    case 'fade':
      animation = {
        opacity: 1
      }
      break
    case 'reveal': {
      animation = {
        y: ['100%', '0%']
      }
      break
    }
  }

  if (!elements || !elements.length || !animation) return

  animate(elements, animation,
      {
        duration: props.durationIn,
        delay: stagger(props.staggerIn)
      })

  hasRanOnce.value = true
}

const hideText = (): AnimationPlaybackControls => {
  const elements = wrapperEl.value?.el?.querySelectorAll('.' + props.type)
  let animation = {}

  switch (props.animation) {
    case 'fade':
      animation = {
        opacity: 0
      }
      break
    case 'reveal': {
      animation = {
        y: ['0%', '-100%']
      }
      break
    }
  }

  if (!elements || !elements.length || !animation) return

  // first hide the current text
  return animate(elements, animation,
      {
        duration: props.durationOut,
        delay: stagger(props.staggerOut)
      })
}

const changeText = () => {
  hideText()?.then(() => {
    // when all text is hidden, change the text and trigger the showText animation
    textToShow.value = props.text?.trim()

    // Wait for DOM to update
    setTimeout(showText)
  })
}

watch(() => props.text, (newVal, oldVal) => {
  if (newVal?.trim() === oldVal?.trim() || props.inView) return

  changeText()
}, { immediate: true })

watch(() => wrapperEl.value, (el) => {
  if (!el) return

  useInView(wrapperEl.value?.el, {
    amount: .5,
    onInView: () => {
      if ((props.once && !hasRanOnce.value) || !props.once) {
        showText()
      }
    },
    onOutView: () => {
      if (!props.once) {
        hideText()
      }
    }
  }, {
    once: props.once
  })
}, { immediate: true })

</script>

<template>
  <TextSplitter ref="wrapperEl"
                :text="textToShow"
                :letter-class="classMerge( props.letterClass )"
                class="text-stagger-change"
                :class="classMerge($attrs.class, `animation-${animation}`)"
                :tag="tag ?? 'div'"
                :type="type"
  />
</template>

<style scoped>
.text-stagger-change.animation-fade.split-by-word:deep(.word){opacity:0}.text-stagger-change.animation-fade.split-by-letter:deep(.letter){opacity:0}.text-stagger-change.animation-reveal.split-by-word:deep(.word){transform:translateY(100%)}.text-stagger-change.animation-reveal.split-by-letter:deep(.letter){transform:translateY(100%)}
</style>
