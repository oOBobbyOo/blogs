<script setup lang="ts">
const { x, y } = useMouse({ type: 'client' })

const pointStyles = computed<Record<string, string | number>>(() => ({
  transform: `translate3d(calc(${x.value}px - 50%), calc(${y.value}px - 50%), 0)`,
}))
</script>

<template>
  <div v-if="!isMobile" class="cursor" :style="pointStyles" />
  <div v-if="!isMobile" class="pointer" :style="pointStyles" />
</template>

<style scoped lang="less">
.cursor {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.2);
  pointer-events: none;
  transition: 0.1s ease-out;
}

.pointer {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999999;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  pointer-events: none;
  transition:
    background 0.05s,
    width 0.05s,
    height 0.05s;
}

.dark {
  .cursor {
    background: rgba(255, 255, 255, 0.2);
  }
  .pointer {
    background: rgba(255, 255, 255, 0.5);
  }
}
</style>
