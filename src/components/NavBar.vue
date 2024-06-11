<script setup lang="ts">
</script>

<template>
  <header class="header z-9">
    <RouterLink
      class="absolute left-2 top-2 m-5 w-16 h-7 select-none outline-none xl:fixed"
      to="/"
      focusable="false"
    >
      <Logo />
    </RouterLink>
    <nav class="nav">
      <div class="spacer" />
      <div class="right" flex items-center print:op0>
        <RouterLink to="/posts" title="Blog">
          <span class="lt-md:hidden">Blog</span>
          <div i-ri-article-line md:hidden />
        </RouterLink>
        <RouterLink to="/projects" title="Projects">
          <span class="lt-md:hidden">Projects</span>
          <div i-ri-lightbulb-line class="md:hidden" />
        </RouterLink>
        <a
          href="https://github.com/oOBobbyOo"
          target="_blank"
          title="GitHub"
          class="lt-md:hidden"
        >
          <div i-uil-github-alt />
        </a>
        <DarkMode />
      </div>
    </nav>
  </header>
</template>

<style scoped lang="less">
nav {
  padding: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: auto max-content;
  box-sizing: border-box;

  .right {
    display: grid;
    grid-gap: 1.2rem;
    grid-auto-flow: column;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    transition: opacity 0.2s ease;
    opacity: 0.6;
    outline: none;

    &:hover {
      opacity: 1;
      text-decoration-color: inherit;
    }
  }
}
</style>
