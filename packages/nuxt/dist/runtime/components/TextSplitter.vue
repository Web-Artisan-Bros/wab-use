<script setup lang="ts">
import { classMerge, uuid } from "@wab-use/libs";
import { computed, ref, watch } from "vue";
import { usePreferredReducedMotion } from "@vueuse/core";

const props = withDefaults(
  defineProps<{
    text: string;
    tag?: string;
    letterClass?: string;
    wordClass?: string;
    wrapperClass?: string;
    type?: "letter" | "word";
  }>(),
  {
    tag: "span",
    letterClass: "",
    type: "letter",
  }
);

const preferredReducedMotion = usePreferredReducedMotion();

const el = ref(null);
const id = ref(uuid());

const reduceMotion = computed(() => preferredReducedMotion.value === "reduce");

const splitWords = (text: string): string[] => {
  text = props.text.replace(/(<([^>]+)>)/gi, '')
        .replaceAll(' ', ' ')

  return (text.trim().split(" ") ?? []).reduce((acc, curr, i, arr) => {
    acc.push(curr);

    if (i < arr.length - 1) {
      acc.push("&nbsp;");
    }

    return acc;
  }, [] as string[]);
};

const splitLetters = (text: string) => {
  const words: string[] = splitWords(text.trim());

  return words.map((word) => {
    if (word === "&nbsp;") {
      return word;
    }

    return word.split("");
  });
  // (props.text?.split('') ?? []).map(letter => {
  //   if (letter === ' ') {
  //     letter = '&nbsp;'
  //   }
  //
  //   return letter
  // })
};

const sections = computed(() => {
  if (!props.text) {
    return [];
  }

  if (props.type === "word") {
    return splitWords(props.text);
  }

  return splitLetters(props.text);
});

defineExpose({ el });

watch(
  () => props.text,
  () => {
    id.value = uuid();
  }
);
</script>

<template>
  <component
    :is="props.tag ?? 'div'"
    ref="el"
    class="text-splitter"
    :class="classMerge('relative', $attrs.class, `split-by-${type}`)"
  >
    <!-- normal motion -->
    <div aria-hidden="true" v-if="!reduceMotion">
      <span
        v-for="(word, i) in sections"
        :key="`${id}_w_${i}`"
        :class="classMerge(wrapperClass, 'wrapper')"
      >
        <span v-if="Array.isArray(word)" :class="classMerge(wordClass, 'word')">
          <span
            v-for="(letter, j) in word"
            :key="`${id}_w_${i}_l_${j}`"
            :class="classMerge(letterClass, 'letter')"
            v-html="letter"
          />
        </span>

        <span v-else v-html="word" :class="classMerge(wordClass, 'word')" />
      </span>
    </div>

    <Component v-if="!reduceMotion"
      :is="props.tag === 'div' ? 'p' : 'span'"
      class="text-splitter-for-accessibility"
      >{{ text }}
    </Component>

    <!-- reduced motion -->
    <Component v-if="reduceMotion"
      :is="props.tag === 'div' ? 'p' : 'span'"
      :class="classMerge(wrapperClass, 'wrapper')"
      >{{ text }}
    </Component>
  </component>
</template>

<style scoped>
.text-splitter-for-accessibility{color:transparent;left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;-webkit-user-select:none;-moz-user-select:none;user-select:none}.letter,.word{line-height:1.2em}.word{white-space:nowrap}span{display:inline-flex;overflow:hidden}
</style>
