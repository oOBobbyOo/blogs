<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <NavBar />
  <main class="of-x-hidden px-7 py-10">
    <RouterView />
    <Footer :key="route.path" />
  </main>
  <CustomPointer v-if="!isMobile" />
</template>
