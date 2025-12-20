<script setup lang="ts">
import { Cpu, Zap, Layout } from 'lucide-vue-next'

const tiers = [
  {
    name: '极速竞技型',
    subtitle: '专为电竞酒店及大型网咖设计',
    cpu: 'Intel Core i9 / i7',
    gpu: 'RTX 4080 / 4070 Ti',
    ram: '32GB DDR5 6000MHz',
    storage: '无盘系统（服务器：2TB NVMe SSD × 2 RAID）',
    features: ['240Hz/360Hz 刷新率支持', '全光纤万兆网络', '人体工学电竞外设'],
    price: '12000-15000 元/台',
    recommended: true
  },
  {
    name: '主流全能型',
    subtitle: '高性价比，满足 95% 游戏需求',
    cpu: 'Intel Core i5 / AMD R7',
    gpu: 'RTX 4060 / 3060 Ti',
    ram: '16GB DDR4 3600MHz',
    storage: '无盘系统（服务器：1TB NVMe SSD × 2 RAID）',
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
    storage: '无盘系统（服务器：512GB NVMe SSD × 2 RAID）',
    features: ['1080P 144Hz 流畅运行', '千兆内网', '基础外设套装'],
    price: '5000-7000 元/台',
    recommended: false
  }
]
</script>

<template>
  <section class="max-w-7xl mx-auto px-6 lg:px-8">
    <div class="text-center mb-32 animate-on-scroll opacity-0 translate-y-6">
      <h2 class="text-lg font-semibold text-apple-blue mb-4 tracking-widest uppercase">硬件标准</h2>
      <p class="text-5xl md:text-6xl font-semibold tracking-tight text-apple-dark mb-8">量身定制的性能方案</p>
      <p class="text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">基于真实业务需求，提供最高性价比的硬件组合建议。</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
      <div 
        v-for="tier in tiers" 
        :key="tier.name"
        :class="[
          'animate-on-scroll opacity-0 translate-y-6 bg-white rounded-[3rem] p-12 shadow-sm border transition-all duration-700 relative overflow-hidden',
          tier.recommended ? 'border-apple-blue shadow-[0_30px_60px_rgba(0,102,204,0.08)]' : 'border-gray-50 hover:shadow-[0_30px_60px_rgba(0,0,0,0.04)]'
        ]"
      >
        <div v-if="tier.recommended" class="absolute top-0 right-0 bg-apple-blue text-white px-8 py-2 rounded-bl-3xl text-sm font-semibold tracking-widest uppercase">
          主流推荐
        </div>
        
        <div class="mb-16">
          <h3 class="text-3xl font-bold mb-4 text-apple-dark tracking-tight">{{ tier.name }}</h3>
          <p class="text-gray-400 font-light text-sm mb-8 tracking-wide">{{ tier.subtitle }}</p>
          <div class="text-3xl font-semibold text-apple-blue tracking-tighter">
            {{ tier.price }}
          </div>
        </div>

        <div class="space-y-12 mb-16">
          <div class="flex items-start space-x-6">
            <Cpu class="w-6 h-6 text-gray-300 mt-1" />
            <div>
              <p class="text-xs text-gray-400 uppercase tracking-widest mb-2 font-semibold">核心算力</p>
              <p class="text-lg font-medium text-apple-dark leading-tight">{{ tier.cpu }}</p>
              <p class="text-sm text-gray-500 font-light mt-1">{{ tier.gpu }}</p>
            </div>
          </div>

          <div class="flex items-start space-x-6">
            <Zap class="w-6 h-6 text-gray-300 mt-1" />
            <div>
              <p class="text-xs text-gray-400 uppercase tracking-widest mb-2 font-semibold">内存与响应</p>
              <p class="text-lg font-medium text-apple-dark">{{ tier.ram }}</p>
            </div>
          </div>

          <div class="flex items-start space-x-6">
            <Layout class="w-6 h-6 text-gray-300 mt-1" />
            <div>
              <p class="text-xs text-gray-400 uppercase tracking-widest mb-2 font-semibold">集中存储方案</p>
              <p class="text-sm text-gray-600 font-light leading-relaxed">{{ tier.storage }}</p>
            </div>
          </div>
        </div>

        <button 
          :class="[
            'w-full py-5 rounded-2xl font-semibold tracking-wide transition-all duration-500',
            tier.recommended 
              ? 'bg-apple-blue text-white hover:bg-blue-600 shadow-lg shadow-apple-blue/20' 
              : 'bg-apple-gray text-apple-dark hover:bg-gray-200'
          ]"
        >
          获取详细配置单
        </button>
      </div>
    </div>

    <!-- 简化版对比 -->
    <div class="mt-32 animate-on-scroll opacity-0 translate-y-6 bg-white rounded-[3rem] p-12 md:p-20 border border-gray-50 shadow-[0_40px_80px_rgba(0,0,0,0.03)]">
      <h3 class="text-3xl font-semibold text-center mb-16 text-apple-dark tracking-tight">配置核心指标对比</h3>
      <div class="overflow-x-auto">
        <table class="w-full text-left">
          <thead>
            <tr class="border-b border-gray-100">
              <th class="py-6 px-4 text-sm font-semibold text-gray-400 uppercase tracking-widest">参数项</th>
              <th class="py-6 px-4 text-lg font-semibold text-apple-dark">经济实用型</th>
              <th class="py-6 px-4 text-lg font-semibold text-apple-dark">主流全能型</th>
              <th class="py-6 px-4 text-lg font-semibold text-apple-blue">极速竞技型</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50">
            <tr>
              <td class="py-8 px-4 text-gray-400 font-light">处理器架构</td>
              <td class="py-8 px-4 text-apple-dark">i3 / R5</td>
              <td class="py-8 px-4 text-apple-dark">i5 / R7</td>
              <td class="py-8 px-4 text-apple-blue font-semibold">i9 / i7</td>
            </tr>
            <tr>
              <td class="py-8 px-4 text-gray-400 font-light">图形性能</td>
              <td class="py-8 px-4 text-apple-dark">RTX 3050</td>
              <td class="py-8 px-4 text-apple-dark">RTX 4060</td>
              <td class="py-8 px-4 text-apple-blue font-semibold">RTX 4080</td>
            </tr>
            <tr>
              <td class="py-8 px-4 text-gray-400 font-light">网络存储带宽</td>
              <td class="py-8 px-4 text-apple-dark">1Gbps</td>
              <td class="py-8 px-4 text-apple-dark">1Gbps / 10Gbps</td>
              <td class="py-8 px-4 text-apple-blue font-semibold">Full 10Gbps</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

