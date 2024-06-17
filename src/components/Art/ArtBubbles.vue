<script setup lang="ts">
import { p5i } from 'p5i'
import type { P5I } from 'p5i'

const el = ref<HTMLCanvasElement | null>(null)

const {
  mount,
  unmount,
  createCanvas,
  background,
  noFill,
  stroke,
  resizeCanvas,
} = p5i()

let w = window.innerWidth
let h = window.innerHeight
const bubbleMax = w * 0.06 // 气泡数量
const bubbles: { x: number, y: number, alpha: number, speed: number, scale: number }[] = []

function addBubbles() {
  for (let i = 0; i < bubbleMax; i++) {
    bubbles.push({
      x: w * Math.random(),
      y: h + Math.random() * 100,
      alpha: 0.1 + Math.random() * 0.3, // 气泡透明度
      speed: 0.1 + Math.random() * 0.4, // 气泡上升速度
      scale: 0.2 + Math.random() * 0.5, // 气泡大小
    })
  }
}

function setup() {
  createCanvas(w, h)
  background('#fff')
  stroke('#ccc')
  noFill()
  addBubbles()
}

function draw({ ellipse, fill }: P5I) {
  background('#fff')

  for (const b of bubbles) {
    // 气泡位移
    b.y -= b.speed
    // 透明度递减
    b.alpha -= 0.0002 + Math.random() * 0.0005
    // 气泡大小变化
    b.scale += Math.random() * 0.002

    // 绘制气泡
    stroke(0, 0, 0, b.alpha * 10)
    fill(0, 0, 0, b.alpha * 150)
    ellipse(b.x, b.y, b.scale * 10)

    // 透明度小于0则移除
    if (b.alpha < 0) {
      bubbles.splice(bubbles.indexOf(b), 1)
      // 重新添加气泡
      bubbles.push({
        x: w * Math.random(),
        y: h + Math.random() * 100,
        alpha: 0.1 + Math.random() * 0.3,
        speed: 0.1 + Math.random() * 0.4,
        scale: 0.2 + Math.random() * 0.5,
      })
    }
  }
}

function restart() {
  if (el.value)
    mount(el.value, { setup, draw })
}

onMounted(() => {
  restart()

  useEventListener('resize', () => {
    w = window.innerWidth
    h = window.innerHeight
    resizeCanvas(w, h)
  })
})

onUnmounted(() => {
  unmount()
})
</script>

<template>
  <div ref="el" pointer-events-none fixed bottom-0 left-0 right-0 top-0 z--1 dark:invert />
</template>
