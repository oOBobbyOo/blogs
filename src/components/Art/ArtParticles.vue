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
  line,
  stroke,
  strokeWeight,
  noiseSeed,
  resizeCanvas,
} = p5i()

let w = window.innerWidth
let h = window.innerHeight
const mouse: { x: number | null, y: number | null, max: number } = { x: null, y: null, max: 20000 }

const pointMax = 150
const existingPoints = new Set<string>()
const points: { x: number, y: number, moveX: number, moveY: number, max: number }[] = []

function addPoints() {
  for (let i = 0; i < pointMax; i++) {
    const x = Math.random() * w
    const y = Math.random() * h
    const moveX = Math.random() * 2 - 1
    const moveY = Math.random() * 2 - 1
    const id = `${x}-${y}`
    if (existingPoints.has(id))
      continue
    existingPoints.add(id)
    points.push({
      x,
      y,
      moveX,
      moveY,
      max: 6000,
    })
  }
}

function setup() {
  createCanvas(w, h)
  background('#fff')
  stroke('#ccc')
  noFill()
  noiseSeed(+new Date())
  addPoints()
}

function draw({ point }: P5I) {
  background('#fff')
  // 将鼠标坐标添加进去，产生一个用于比对距离的点数组
  const allDots = [mouse].concat(points)
  for (const dot of points) {
    // 粒子位移
    dot.x += dot.moveX
    dot.y += dot.moveY
    // 遇到边界将加速度反向
    dot.moveX *= (dot.x > w || dot.x < 0) ? -1 : 1
    dot.moveY *= (dot.y > h || dot.y < 0) ? -1 : 1
    // 绘制点
    strokeWeight(1.5)
    stroke('#ccc')
    point(dot.x - 0.5, dot.y - 0.5, 1)
    // 循环比对粒子间的距离
    for (let i = 0; i < allDots.length; i++) {
      const tempDot = allDots[i]
      if (dot === tempDot || tempDot.x === null || tempDot.y === null)
        continue
      const _x = dot.x - tempDot.x
      const _y = dot.y - tempDot.y
      // 两个粒子之间的距离
      const dis = _x * _x + _y * _y
      // 距离比
      let ratio
      // 如果两个粒子之间的距离小于粒子对象的max值，则在两个粒子间画线
      if (dis < tempDot.max) {
        // 如果是鼠标，则让粒子向鼠标的位置移动
        if (tempDot === mouse && dis > (tempDot.max / 2)) {
          dot.x -= _x * 0.03
          dot.y -= _y * 0.03
        }
        // 计算距离比
        ratio = (tempDot.max - dis) / tempDot.max
        // 画线
        strokeWeight(ratio / 2)
        stroke(0, 0, 0, ratio * 100)
        line(dot.x, dot.y, tempDot.x, tempDot.y)
        stroke(0)
      }
    }
    // 将已经计算过的粒子从数组中删除
    allDots.splice(allDots.indexOf(dot), 1)
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

  useEventListener('mousemove', (e) => {
    mouse.x = e.clientX
    mouse.y = e.clientY
  })

  useEventListener('mouseout', () => {
    mouse.x = null
    mouse.y = null
  })
})

onUnmounted(() => {
  unmount()
})
</script>

<template>
  <div ref="el" pointer-events-none fixed bottom-0 left-0 right-0 top-0 z--1 dark:invert />
</template>
