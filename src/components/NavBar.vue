<script setup lang="ts">
function toTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const { y: scroll } = useWindowScroll()
</script>

<template>
  <header class="header z-9">
    <RouterLink class="absolute m-5 h-15 w-15 select-none outline-none xl:fixed" to="/" focusable="false">
      <Logo />
    </RouterLink>
    <button
      title="Scroll to top" fixed bottom-3 right-3 z-100 h-10 w-10 rounded-full transition duration-300
      print:hidden hover-bg-hex-8883 hover:op100 :class="scroll > 300 ? 'op30' : 'op0! pointer-events-none'"
      @click="toTop()"
    >
      <div i-ri-arrow-up-line />
    </button>
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
        <RouterLink to="/navigator" title="Navigator">
          <div i-iconoir-navigator-alt />
        </RouterLink>
        <a href="https://github.com/oOBobbyOo" target="_blank" title="GitHub" class="lt-md:hidden">
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
