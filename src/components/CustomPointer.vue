<script setup lang="ts">
const { x, y } = useMouse({ type: 'client' })

const pointStyles = computed<Record<string, string | number>>(() => ({
  transform: `translate3d(calc(${x.value}px - 50%), calc(${y.value}px - 50%), 0)`,
}))
</script>

<template>
  <div class="cursor" :style="pointStyles" />
  <div class="pointer" :style="pointStyles" />
</template>

<style scoped lang="less">
.cursor,
.pointer {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999;
  border-radius: 50%;
  pointer-events: none;
}

.cursor {
  width: 30px;
  height: 30px;
  background: rgba(0, 0, 0, 0.2);
  transition: 0.08s ease-in-out;
}

.pointer {
  width: 10px;
  height: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  transition: 0.04s ease-in-out;
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
