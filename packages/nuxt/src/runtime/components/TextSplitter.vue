<script setup lang="ts">
import { classMerge, uuid } from '@wab-use/libs'

const props = withDefaults(defineProps<{
  text: string
  tag?: string
  letterClass?: string
  type?: 'letter' | 'word'
}>(), {
  tag: 'span',
  letterClass: '',
  type: 'letter'
})
const el = ref(null)
const id = ref(uuid())

const splitWords = (text: string): string[] => {
  return (text.split(' ') ?? [])
      .reduce((acc, curr, i, arr) => {
        acc.push(curr)

        if (i < arr.length) {
          acc.push('&nbsp;')
        }

        return acc
      }, [] as string[])
}

const splitLetters = (text: string) => {
  const words: string[] = splitWords(text)

  return words.map(word => {
    if (word === '&nbsp;') {
      return word
    }

    return word.split('')
  })
  // (props.text?.split('') ?? []).map(letter => {
  //   if (letter === ' ') {
  //     letter = '&nbsp;'
  //   }
  //
  //   return letter
  // })
}

const sections = computed(() => {
  if (!props.text) {
    return []
  }

  if (props.type === 'word') {
    return splitWords(props.text)
  }

  return splitLetters(props.text)
})

defineExpose({ el })

watch(() => props.text, () => {
  id.value = uuid()
})
</script>

<template>
  <component :is="props.tag ?? 'div'"
             ref="el"
             class="text-splitter"
             :class="classMerge($attrs.class, `split-by-${type}`)"
  >
    <span v-for="(word, i) in sections" :key="`${id}_w_${i}`"
          class="wrapper"
    >
      <span v-if="Array.isArray(word)"
            :class="classMerge(letterClass,'word')"
            >
          <span v-for="(letter, j) in word"
                :key="`${id}_w_${i}_l_${j}`"
                class="letter"
                v-html="letter"/>
      </span>

      <span v-else class="word" v-html="word" />
    </span>
  </component>
</template>

<style scoped>
.letter, .word {
  line-height: 1em;
}

.word {
  white-space: nowrap;
}

span {
  display: inline-block;
  overflow: hidden;
  //border: 1px solid white
}
</style>