<script setup lang="ts">
import { Cpu, Zap, Layout } from 'lucide-vue-next'

const tiers = [
  {
    name: '极速竞技型',
    subtitle: '专为电竞酒店及大型网咖设计',
    cpu: 'Intel Core i9 / i7',
    gpu: 'RTX 4080 / 4070 Ti',
    ram: '32GB DDR5 6000MHz',
    storage: '无盘系统 (2TB NVMe SSD × 2)',
    features: ['360Hz 刷新率支持', '全光纤万兆网络', '专业电竞外设'],
    price: '12000-15000 元/台',
    recommended: true
  },
  {
    name: '主流全能型',
    subtitle: '高性价比，满足 95% 游戏需求',
    cpu: 'Intel Core i5 / AMD R7',
    gpu: 'RTX 4060 / 3060 Ti',
    ram: '16GB DDR4 3600MHz',
    storage: '无盘系统 (1TB NVMe SSD × 2)',
    features: ['2K 144Hz 完美运行', '千兆稳定内网', '品质键鼠套装'],
    price: '8000-10000 元/台',
    recommended: false
  },
  {
    name: '经济实用型',
    subtitle: '适合预算有限的小型网吧',
    cpu: 'Intel Core i3 / AMD R5',
    gpu: 'RTX 3050 / GTX 1660',
    ram: '8GB DDR4 3200MHz',
    storage: '无盘系统 (512GB NVMe SSD × 2)',
    features: ['1080P 144Hz 流畅运行', '千兆内网', '基础外设套装'],
    price: '5000-7000 元/台',
    recommended: false
  }
]
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <div 
      v-for="tier in tiers" 
      :key="tier.name"
      :class="[
        'animate-on-scroll opacity-0 translate-y-10 bg-white rounded-3xl p-10 border transition-all duration-700 relative overflow-hidden',
        tier.recommended ? 'border-[#0066cc] shadow-2xl' : 'border-gray-100 hover:shadow-xl'
      ]"
    >
      <div v-if="tier.recommended" class="absolute top-0 right-0 bg-[#0066cc] text-white px-6 py-2 rounded-bl-2xl text-xs font-bold uppercase tracking-widest">
        主流推荐
      </div>
      
      <div class="mb-12">
        <h3 class="text-2xl font-bold mb-2 text-[#1d1d1f] tracking-tight">{{ tier.name }}</h3>
        <p class="text-gray-400 font-light text-xs mb-6">{{ tier.subtitle }}</p>
        <div class="text-2xl font-bold text-[#0066cc] tracking-tight">
          {{ tier.price }}
        </div>
      </div>

      <div class="space-y-8 mb-12">
        <div class="flex items-start gap-4">
          <Cpu class="w-5 h-5 text-gray-400 mt-1" />
          <div>
            <p class="text-[10px] text-gray-400 uppercase tracking-widest mb-1 font-bold">核心算力</p>
            <p class="text-base font-medium text-[#1d1d1f]">{{ tier.cpu }}</p>
            <p class="text-xs text-gray-500 font-light">{{ tier.gpu }}</p>
          </div>
        </div>

        <div class="flex items-start gap-4">
          <Zap class="w-5 h-5 text-gray-400 mt-1" />
          <div>
            <p class="text-[10px] text-gray-400 uppercase tracking-widest mb-1 font-bold">内存与响应</p>
            <p class="text-base font-medium text-[#1d1d1f]">{{ tier.ram }}</p>
          </div>
        </div>

        <div class="flex items-start gap-4">
          <Layout class="w-5 h-5 text-gray-400 mt-1" />
          <div>
            <p class="text-[10px] text-gray-400 uppercase tracking-widest mb-1 font-bold">集中存储方案</p>
            <p class="text-xs text-gray-600 font-light leading-relaxed">{{ tier.storage }}</p>
          </div>
        </div>
      </div>

      <button 
        :class="[
          'w-full py-4 rounded-xl font-bold text-sm tracking-wide transition-all duration-500',
          tier.recommended 
            ? 'bg-[#0066cc] text-white hover:bg-[#0071e3] shadow-lg shadow-blue-500/20' 
            : 'bg-gray-100 text-[#1d1d1f] hover:bg-gray-200'
        ]"
      >
        获取详细配置单
      </button>
    </div>
  </div>
</template>
