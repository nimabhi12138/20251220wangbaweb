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
  <section class="py-24 bg-[#f5f5f7]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 animate-on-scroll opacity-0 translate-y-10">
        <h2 class="section-title">专业的机器配置建议</h2>
        <p class="text-xl text-gray-500 max-w-2xl mx-auto">根据您的预算和定位，我们量身定制最高效的硬件方案。</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div 
          v-for="tier in tiers" 
          :key="tier.name"
          :class="[
            'animate-on-scroll opacity-0 translate-y-10 bg-white rounded-[2.5rem] p-10 shadow-sm border hover:shadow-xl transition-all duration-500 relative',
            tier.recommended ? 'border-apple-blue border-2' : 'border-gray-100'
          ]"
        >
          <div v-if="tier.recommended" class="absolute -top-4 left-1/2 -translate-x-1/2 bg-apple-blue text-white px-4 py-1 rounded-full text-sm font-semibold">
            推荐
          </div>
          
          <div class="mb-10 text-center">
            <h3 class="text-3xl font-bold mb-2 text-apple-dark">{{ tier.name }}</h3>
            <p class="text-apple-blue font-medium mb-4">{{ tier.subtitle }}</p>
            <div class="inline-block bg-apple-blue/10 text-apple-blue px-4 py-2 rounded-full text-sm font-semibold">
              {{ tier.price }}
            </div>
          </div>

          <div class="space-y-8">
            <div class="flex items-start space-x-4">
              <Cpu class="w-6 h-6 text-gray-400 mt-1" />
              <div>
                <p class="text-sm text-gray-400 uppercase tracking-wider mb-1">处理器与显卡</p>
                <p class="text-lg font-medium text-apple-dark">{{ tier.cpu }} + {{ tier.gpu }}</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <Zap class="w-6 h-6 text-gray-400 mt-1" />
              <div>
                <p class="text-sm text-gray-400 uppercase tracking-wider mb-1">内存</p>
                <p class="text-lg font-medium text-apple-dark mb-3">{{ tier.ram }}</p>
                <p class="text-sm text-gray-400 uppercase tracking-wider mb-1">无盘系统</p>
                <p class="text-sm font-medium text-apple-dark">{{ tier.storage }}</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <Layout class="w-6 h-6 text-gray-400 mt-1" />
              <div>
                <p class="text-sm text-gray-400 uppercase tracking-wider mb-1">包含特性</p>
                <ul class="mt-2 space-y-2">
                  <li v-for="feat in tier.features" :key="feat" class="flex items-center text-gray-600">
                    <span class="w-1.5 h-1.5 bg-apple-blue rounded-full mr-2"></span>
                    {{ feat }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <button 
            :class="[
              'w-full mt-12 py-4 rounded-full font-semibold transition-all duration-300',
              tier.recommended 
                ? 'bg-apple-blue text-white hover:bg-blue-600' 
                : 'border-2 border-apple-blue text-apple-blue hover:bg-apple-blue hover:text-white'
            ]"
          >
            获取详细报价
          </button>
        </div>
      </div>

      <!-- 配置对比表格 -->
      <div class="mt-16 animate-on-scroll opacity-0 translate-y-10">
        <h3 class="text-2xl font-semibold text-center mb-8 text-apple-dark">配置方案对比</h3>
        <div class="bg-white rounded-3xl p-8 overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-gray-200">
                <th class="text-left py-4 px-4 font-semibold text-apple-dark">配置项</th>
                <th class="text-center py-4 px-4 font-semibold text-apple-dark">经济实用型</th>
                <th class="text-center py-4 px-4 font-semibold text-apple-dark">主流全能型</th>
                <th class="text-center py-4 px-4 font-semibold text-apple-blue">极速竞技型</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr>
                <td class="py-4 px-4 text-gray-600">处理器</td>
                <td class="py-4 px-4 text-center text-gray-600">i3 / R5</td>
                <td class="py-4 px-4 text-center text-gray-600">i5 / R7</td>
                <td class="py-4 px-4 text-center text-apple-blue font-semibold">i9 / i7</td>
              </tr>
              <tr>
                <td class="py-4 px-4 text-gray-600">显卡</td>
                <td class="py-4 px-4 text-center text-gray-600">RTX 3050</td>
                <td class="py-4 px-4 text-center text-gray-600">RTX 4060</td>
                <td class="py-4 px-4 text-center text-apple-blue font-semibold">RTX 4080</td>
              </tr>
              <tr>
                <td class="py-4 px-4 text-gray-600">内存</td>
                <td class="py-4 px-4 text-center text-gray-600">8GB DDR4</td>
                <td class="py-4 px-4 text-center text-gray-600">16GB DDR4</td>
                <td class="py-4 px-4 text-center text-apple-blue font-semibold">32GB DDR5</td>
              </tr>
              <tr>
                <td class="py-4 px-4 text-gray-600">无盘系统（服务器存储）</td>
                <td class="py-4 px-4 text-center text-gray-600">512GB × 2 RAID</td>
                <td class="py-4 px-4 text-center text-gray-600">1TB × 2 RAID</td>
                <td class="py-4 px-4 text-center text-apple-blue font-semibold">2TB × 2 RAID</td>
              </tr>
              <tr>
                <td class="py-4 px-4 text-gray-600">价格区间</td>
                <td class="py-4 px-4 text-center text-gray-600">5000-7000 元</td>
                <td class="py-4 px-4 text-center text-gray-600">8000-10000 元</td>
                <td class="py-4 px-4 text-center text-apple-blue font-semibold">12000-15000 元</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- 定制方案 -->
      <div class="mt-12 text-center animate-on-scroll opacity-0 translate-y-10">
        <p class="text-gray-600 mb-6">以上方案仅供参考，我们可根据您的具体需求提供定制化配置方案</p>
        <a 
          href="#contact" 
          class="inline-block px-8 py-4 bg-apple-blue text-white rounded-full font-semibold hover:bg-blue-600 transition-all duration-300"
        >
          咨询定制方案
        </a>
      </div>
    </div>
  </section>
</template>

