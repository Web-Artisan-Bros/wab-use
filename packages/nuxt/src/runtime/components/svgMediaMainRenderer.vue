<script setup lang="ts">
import { useSvgMedia } from '../stores/svgMedia'

const svgIcons = useSvgMedia()
</script>

<template>
  <ClientOnly>
    <div class="svgIcons" style="display: none">
      <svg class="h-0">
        <defs>
          <linearGradient id="bg-gradient-vertical" gradientUnits="userSpaceOnUse">
            <stop stop-color="#584E96"/>
            <stop offset="1" stop-color="#00AEC4"/>
          </linearGradient>
        </defs>
      </svg>

      <svg id="error_icon"
           fill="currentColor"
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 64 64"
      >
        <g>
          <path d="M32,1.8C15.3,1.8,1.8,15.3,1.8,32S15.3,62.3,32,62.3S62.3,48.7,62.3,32S48.7,1.8,32,1.8z M32,57.8
          C17.8,57.8,6.3,46.2,6.3,32C6.3,17.8,17.8,6.3,32,6.3c14.2,0,25.8,11.6,25.8,25.8C57.8,46.2,46.2,57.8,32,57.8z"/>
          <path d="M41.2,22.7c-0.9-0.9-2.3-0.9-3.2,0L32,28.8l-6.1-6.1c-0.9-0.9-2.3-0.9-3.2,0c-0.9,0.9-0.9,2.3,0,3.2l6.1,6.1l-6.1,6.1
          c-0.9,0.9-0.9,2.3,0,3.2c0.4,0.4,1,0.7,1.6,0.7c0.6,0,1.2-0.2,1.6-0.7l6.1-6.1l6.1,6.1c0.4,0.4,1,0.7,1.6,0.7
          c0.6,0,1.2-0.2,1.6-0.7c0.9-0.9,0.9-2.3,0-3.2L35.2,32l6.1-6.1C42.1,25,42.1,23.6,41.2,22.7z"/>
        </g>
      </svg>

      <template v-for="icon in svgIcons.icons" :key="icon.id">
        <svg v-bind="icon.props"
             :id="icon.id"
             v-html="icon.html"
        />
      </template>
    </div>
  </ClientOnly>
</template>

<style scoped>
@import url("../styles.css");
</style>
