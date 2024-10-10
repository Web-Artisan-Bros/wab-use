<script setup lang="ts">
import { classMerge } from '@wab-use/libs'
import { animate, stagger } from 'framer-motion/dom'
import TextSplitter from '../TextSplitter.vue'
import type { AnimationPlaybackControls } from 'framer-motion'
import { ref, watch } from 'vue'
import { useInView } from '#imports'
import { usePreferredReducedMotion } from '@vueuse/core'

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

const preferredReducedMotion = usePreferredReducedMotion()

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

  if (wrapperEl.value?.el) {
    // when showing the text, set the height to auto so that it gets the correct height
    wrapperEl.value.el.style.height = 'auto'

    // animate the height to the correct height
    animate(wrapperEl.value?.el, {
      height: wrapperEl.value?.el.scrollHeight + 'px'
    }, {
      duration: preferredReducedMotion.value ? 0 : props.durationOut
    }).then(() => {
      if (wrapperEl.value?.el)
        wrapperEl.value.el.style.height = ''
    })
  }

  animate(elements, animation,
      {
        duration: preferredReducedMotion.value ? 0 : props.durationOut,
        delay: preferredReducedMotion.value ? 0 : stagger(props.staggerIn)
      })

  hasRanOnce.value = true
}

const hideText = (): AnimationPlaybackControls | undefined => {
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

  if (wrapperEl.value?.el) {
    // before hiding the text, set the height to the current height
    wrapperEl.value.el.style.height = `${wrapperEl.value?.el.clientHeight}px`
  }

  // first hide the current text
  return animate(elements, animation,
      {
        duration: preferredReducedMotion.value ? 0 : props.durationOut,
        delay: preferredReducedMotion.value ? 0 : stagger(props.staggerOut)
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
    once: props.once,
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
  })
}, { immediate: true })

</script>

<template>
  <TextSplitter ref="wrapperEl"
                :text="textToShow"
                :letter-class="classMerge( props.letterClass )"
                class="text-stagger-change"
                :class="classMerge($attrs.class as any, `animation-${animation}`)"
                :tag="tag ?? 'div'"
                :type="type"
  />
</template>

<style scoped>
.text-stagger-change {
  &.animation-fade {
    &.split-by-word {
      &:deep(.word) {
        opacity: 0;
      }
    }

    &.split-by-letter {
      &:deep(.letter) {
        opacity: 0;
      }
    }
  }

  &.animation-reveal {
    &.split-by-word {
      &:deep(.word) {
        transform: translateY(100%);
      }
    }

    &.split-by-letter {
      &:deep(.letter) {
        transform: translateY(100%);
      }
    }
  }
}


</style>
