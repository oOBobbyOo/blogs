<script setup lang="ts">
const chineseNewYear = '2025-01-29'
const timer = ref()
const timeData = ref(getTimeCapsule())

onMounted(() => {
  timer.value = setInterval(() => {
    timeData.value = getTimeCapsule()
  }, 1000)
})

onBeforeUnmount(() => {
  clearInterval(timer.value)
})
</script>

<template>
  <div class="time-capsule" flex="~ items-center">
    <div class="capsule-left" flex="~ col items-center justify-evenly" relative>
      <span class="text-xs op-60">距离</span>
      <span class="text-base">春节</span>
      <span class="py-1.5 text-2xl font-bold">{{ getDaysUntil(chineseNewYear) }} <i class="text-xs">天</i></span>
      <span class="text-xs op-60">{{ chineseNewYear }}</span>
    </div>
    <div v-if="timeData" class="capsule-right" flex="1">
      <div v-for="(item, tag) in timeData" :key="tag" class="capsule-item" my-1.5 flex="~ items-center">
        <div class="item-name" text-nowrap text-sm op-60>
          {{ item.name }}
        </div>
        <div class="item-progress" relative h-full w-full overflow-hidden b-rd-2 flex="~ items-center justify-between">
          <div
            class="progress-bar" h-full b-rd-2
            :style="{ width: `${item.percentage}%`, opacity: item.percentage / 100 }"
          />
          <div class="percentage" absolute mx-2 text-xs :class="[{ many: item.percentage >= 46 }]">
            {{ item.percentage }}%
          </div>
          <div class="remaining" absolute mx-2 text-xs :class="[{ many: item.percentage >= 60 }]">
            <span class="tip"> 还剩 </span>
            <span>{{ item.remaining }}</span>
            <span class="tip">{{ tag === "day" ? "小时" : "天" }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.time-capsule {
  .capsule-left {
    margin-right: 0.8rem;

    &::after {
      content: '';
      position: absolute;
      right: -0.8rem;
      width: 2px;
      height: 100%;
      background-color: var(--c-progress-bar);
    }
  }

  .capsule-right {
    margin-left: 0.8rem;

    .capsule-item {
      height: 24px;

      .item-name {
        margin-right: 0.8rem;
      }

      .item-progress {
        background-color: var(--c-progress-bg);

        .progress-bar {
          background-color: var(--c-progress-bar);
        }

        .percentage,
        .remaining {
          transition:
            opacity 0.3s,
            transform 0.3s;

          &.many {
            .tip {
              opacity: 0.8;
            }
          }
        }

        .remaining {
          opacity: 0;
          transform: translateX(10px);

          .tip {
            opacity: 0.6;
          }
        }
      }
    }

    &:hover {
      .remaining {
        transform: translateX(0) !important;
        opacity: 1 !important;
      }

      .percentage {
        transform: translateX(-10px) !important;
        opacity: 0 !important;
      }
    }
  }
}
</style>
