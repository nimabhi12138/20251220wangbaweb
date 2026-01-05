<script setup lang="ts">
import { Shield, Clock, CheckCircle2, AlertCircle } from 'lucide-vue-next'

const guarantees = [
  {
    icon: Clock,
    title: '快速响应承诺',
    desc: '远程 5 分钟内响应，本地 2 小时内响应，紧急故障 1 小时内响应。',
    color: 'text-blue-600 bg-blue-50'
  },
  {
    icon: CheckCircle2,
    title: '解决保障',
    desc: '承诺 99.5% 的问题解决率，如无法解决，提供替代方案或全额退款。',
    color: 'text-green-600 bg-green-50'
  },
  {
    icon: Shield,
    title: '质保政策',
    desc: '所有硬件设备提供 1-3 年质保，软件系统提供终身技术支持。',
    color: 'text-purple-600 bg-purple-50'
  },
  {
    icon: AlertCircle,
    title: '应急机制',
    desc: '建立完善的应急响应机制，确保重大故障能够快速恢复业务。',
    color: 'text-orange-600 bg-orange-50'
  }
]
</script>

<template>
  <div>
    <h3 class="text-xl font-bold mb-8 text-[#1d1d1f] flex items-center gap-2">
      <div class="w-1 h-6 bg-green-500"></div>
      服务保障体系
    </h3>
    <div class="grid grid-cols-2 gap-6">
      <div 
        v-for="guarantee in guarantees" 
        :key="guarantee.title"
        class="flex flex-col p-6 bg-white border border-gray-100 rounded-3xl hover:shadow-lg transition-all"
      >
        <div :class="['w-12 h-12 rounded-xl flex items-center justify-center mb-4', guarantee.color]">
          <component :is="guarantee.icon" class="w-6 h-6" />
        </div>
        <h3 class="text-base font-bold text-[#1d1d1f] mb-2">{{ guarantee.title }}</h3>
        <p class="text-xs text-gray-500 leading-relaxed font-light">{{ guarantee.desc }}</p>
      </div>
    </div>
  </div>
</template>
