<script setup lang="ts">
const { frontmatter } = defineProps({
  frontmatter: {
    type: Object,
    required: true,
  },
})

const route = useRoute()
const content = ref<HTMLDivElement>()

const ArtComponent = computed(() => {
  let art = frontmatter.art
  const arts = ['plum', 'dots', 'particles']
  if (art === 'random')
    art = arts[Math.floor(Math.random() * arts.length)]
  if (typeof window !== 'undefined') {
    if (art === 'plum')
      return defineAsyncComponent(() => import('./Art/ArtPlum.vue'))
    else if (art === 'dots')
      return defineAsyncComponent(() => import('./Art/ArtDots.vue'))
    else if (art === 'particles')
      return defineAsyncComponent(() => import('./Art/ArtParticles.vue'))
  }
  return undefined
})
</script>

<template>
  <ClientOnly v-if="ArtComponent">
    <component :is="ArtComponent" />
  </ClientOnly>
  <div v-if="frontmatter.display ?? frontmatter.title" class="m-auto mb-8 prose" :class="[frontmatter.wrapperClass]">
    <h1 class="mb-0 slide-enter-50">
      {{ frontmatter.display ?? frontmatter.title }}
    </h1>
    <p v-if="frontmatter.date" class="opacity-50 slide-enter-50 !-mt-6">
      {{ formatDate(frontmatter.date, frontmatter.lang, false) }}
      <span v-if="frontmatter.duration">
        · {{ frontmatter.duration }}
      </span>
    </p>
    <p v-if="frontmatter.place" class="mt--4!">
      <span op50>at </span>
      <a v-if="frontmatter.placeLink" :href="frontmatter.placeLink" target="_blank">
        {{ frontmatter.place }}
      </a>
      <span v-else font-bold>
        {{ frontmatter.place }}
      </span>
    </p>
    <p v-if="frontmatter.subtitle" class="slide-enter italic opacity-50 !-mt-6">
      {{ frontmatter.subtitle }}
    </p>
    <p v-if="frontmatter.draft" class="slide-enter" border="l-3 orange-4" bg-orange-4:10 px4 py2 text-orange-4>
      This is a draft post, the content may be incomplete. Please check back later.
    </p>
  </div>
  <article ref="content" :class="[frontmatter.tocAlwaysOn ? 'toc-always-on' : '', frontmatter.class]">
    <slot />
  </article>
  <div v-if="route.path !== '/'" class="slide-enter m-auto mb-8 mt-8 animate-delay-500 prose print:hidden">
    <span font-mono op50>> </span>
    <RouterLink
      :to="route.path.split('/').slice(0, -1).join('/') || '/'" class="font-mono op50 hover:op75"
      v-text="'cd ..'"
    />
  </div>
</template>
