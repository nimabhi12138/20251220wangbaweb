<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'
import { ref } from 'vue'

const questions = [
  {
    q: '你们的服务响应时间是多长？',
    a: '远程维护 5 分钟内响应，15 分钟内开始处理。本地维护 2 小时内响应，4 小时内到达现场。'
  },
  {
    q: '服务范围包括哪些？',
    a: '包括本地维护、远程维护、开业指导、系统安全等全方位服务。涵盖硬件故障、网络布线、无盘系统部署、游戏更新等。'
  },
  {
    q: '是否提供 7x24 小时服务？',
    a: '是的，我们提供全天候技术支持。无论何时遇到问题，都可以通过电话、微信、QQ 等方式联系我们。'
  }
]

const openQuestion = ref<number | null>(null)
const toggleQuestion = (index: number) => { openQuestion.value = openQuestion.value === index ? null : index }
</script>

<template>
  <div class="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
    <h3 class="text-xl font-bold mb-6 text-[#1d1d1f] flex items-center gap-2">
      <div class="w-1 h-6 bg-[#0066cc]"></div>
      常见问题解答
    </h3>
    
    <div class="space-y-4">
      <div v-for="(item, index) in questions" :key="index" class="border-b border-gray-50 last:border-0">
        <button @click="toggleQuestion(index)" class="w-full text-left py-4 flex items-center justify-between group">
          <span class="text-sm font-bold text-[#1d1d1f] pr-4">{{ item.q }}</span>
          <ChevronDown :class="['w-4 h-4 text-gray-300 transition-transform duration-300', openQuestion === index ? 'rotate-180' : '']" />
        </button>
        <div v-show="openQuestion === index" class="pb-4 text-xs text-gray-500 leading-relaxed font-light animate-fade-in">
          {{ item.a }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in { animation: fade-in 0.3s ease-out; }
</style>
