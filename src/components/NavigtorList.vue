<script setup lang="ts">
import navigtor from '@/data/navigtor'

function slug(name: string) {
  return name.toLowerCase().replace(/[\s\\/]+/g, '-')
}
</script>

<template>
  <div mx-auto max-w-300>
    <p mb5 mt--6 text-center text-lg italic op50>
      Front-end navigation.
    </p>
    <div v-for="key, cidx in Object.keys(navigtor)" :key="cidx">
      <div
        :id="slug(key)" slide-enter pointer-events-none relative h20 select-none :style="{
          '--enter-stage': cidx - 2,
          '--enter-step': '60ms',
        }"
      >
        <span
          absolute left--1rem top-0rem text-5em color-transparent font-bold leading-1em text-stroke-1.5
          text-stroke-hex-aaa op35 dark:op20
        >{{ key }}</span>
      </div>
      <div mx-auto max-w-500 w-max py-2 grid="~ cols-1 md:cols-2 gap-4 lg:cols-3 xl:cols-4">
        <a
          v-for="item, idx in navigtor[key]" :key="idx"
          class="relative w-[300px] flex flex-col gap-2 rounded-md px-3 py-4 transition-colors duration-200 ease-in-out hover:bg-hex-8881 dark:hover:bg-hex-9991"
          :href="item.link" target="_blank" :title="item.name"
        >
          <div flex="~ items-center">
            <div flex="~ items-center justify-center" mr-3 h-9 w-9>
              <div class="text-2xl opacity-50" :class="item.icon || 'i-carbon-unknown'" />
            </div>
            <div class="text-base">{{ item.name }}</div>
          </div>
          <div class="text-sm font-normal opacity-50" v-html="item.desc" />
        </a>
      </div>
    </div>
  </div>
</template>
