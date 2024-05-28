<script setup lang="ts"></script>

<template>
  <header class="header z-9">
    <div class="logo">
      logo
    </div>
    <nav class="nav">
      <div class="spacer" />
      <div class="right" print:op0>
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
