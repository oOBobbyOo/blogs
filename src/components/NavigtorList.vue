<script setup lang="ts">
import navigtors from '@/data/navigtors'

function slug(name: string) {
  return name.toLowerCase().replace(/[\s\\/]+/g, '-')
}
</script>

<template>
  <div mx-auto max-w-300>
    <p mb5 mt--6 text-center text-lg italic op50>
      Front-end navigation.
    </p>
    <div v-for="key, cidx in Object.keys(navigtors)" :key="cidx" slide-enter :style="{ '--enter-stage': cidx + 1 }">
      <div
        :id="slug(key)" slide-enter pointer-events-none relative h20 select-none :style="{
          '--enter-stage': cidx - 2,
          '--enter-step': '60ms',
        }"
      >
        <span
          absolute left--1rem top-0rem text-5em color-transparent font-bold leading-1em text-stroke-1.5
          text-stroke-hex-aaa op35 dark:op20
        >
          {{ key }}
        </span>
      </div>
      <div mx-auto max-w-500 w-max py-2 grid="~ cols-1 sm:cols-2 md:cols-2 gap-4 lg:cols-3 xl:cols-4">
        <a
          v-for="item, idx in navigtors[key]" :key="idx"
          class="relative w-[300px] flex flex-col gap-2 rounded-md px-3 py-4 transition-colors duration-200 ease-in-out hover:bg-hex-8881 dark:hover:bg-hex-9991"
          :href="item.link" target="_blank" :title="item.name"
        >
          <div flex="~ items-center justify-center">
            <div pr-3>
              <Icones v-if="item.icon === 'icones'" class="text-4xl opacity-50" />
              <img v-else-if="isUrl(item.icon || '')" :src="item.icon" class="min-w-11 w-11" :alt="item.name">
              <div v-else class="text-4xl opacity-50" :class="item.icon || 'i-carbon-unknown'" />
            </div>
            <div class="flex-auto">
              <div class="text-lg">{{ item.name }}</div>
              <div class="line-clamp-2 text-sm font-normal opacity-50" v-html="item.desc" />
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
