<script setup lang="ts"></script>

<template>
  <header class="header z-9">
    <div class="logo">logo</div>
    <nav class="nav">
      <div class="spacer" />
      <DarkMode />
    </nav>
  </header>
</template>

<style scoped>
.logo {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
}

nav {
  padding: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: auto max-content;
  box-sizing: border-box;
}
</style>
