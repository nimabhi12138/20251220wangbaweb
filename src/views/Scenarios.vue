<script setup lang="ts">
import { Building2, Hotel, GraduationCap, Briefcase, Waves, Network } from 'lucide-vue-next'

const scenarios = [
  {
    icon: Building2,
    title: '网吧/网咖',
    desc: '专业的无盘系统部署，万兆网络架构，游戏更新与优化，7x24小时技术支持。',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Hotel,
    title: '电竞酒店',
    desc: '集中式管理系统，客房电脑统一部署，远程更新维护，提升客户体验。',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Waves,
    title: '洗浴中心',
    desc: '休闲区电脑管理，网络稳定保障，系统安全防护，确保营业顺畅。',
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    icon: GraduationCap,
    title: '学校机房',
    desc: '教学电脑集中管理，学生机统一维护，教学软件部署，教育环境优化。',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Briefcase,
    title: '企业办公',
    desc: '办公电脑统一管理，内网架构设计，数据安全保障，提升办公效率。',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Network,
    title: '集中管理场景',
    desc: '适用于所有需要集中管理多台电脑的场景，提供专业的技术解决方案。',
    color: 'from-indigo-500 to-indigo-600'
  }
]
</script>

<template>
  <section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 animate-on-scroll opacity-0 translate-y-10">
        <h2 class="text-lg font-semibold text-apple-blue mb-2">服务场景</h2>
        <p class="text-4xl md:text-5xl font-semibold tracking-tight text-apple-dark mb-4">覆盖各类集中管理场景</p>
        <p class="text-xl text-gray-500 max-w-2xl mx-auto">无论是网吧、电竞酒店、洗浴中心，还是学校、企业，我们都能提供专业的集中管理解决方案。</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="scenario in scenarios" 
          :key="scenario.title"
          class="animate-on-scroll opacity-0 translate-y-10 group"
        >
          <div class="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:border-apple-blue/20 transition-all duration-500 h-full">
            <div :class="['w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500', scenario.color]">
              <component :is="scenario.icon" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-2xl font-semibold mb-4 text-apple-dark">{{ scenario.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ scenario.desc }}</p>
          </div>
        </div>
      </div>

      <!-- 服务优势说明 -->
      <div class="mt-16 animate-on-scroll opacity-0 translate-y-10">
        <div class="bg-gradient-to-br from-apple-blue/5 to-blue-50 rounded-3xl p-12">
          <h3 class="text-2xl font-semibold text-center mb-8 text-apple-dark">为什么选择我们的集中管理方案？</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="text-3xl mb-3">🎯</div>
              <h4 class="font-semibold mb-2 text-apple-dark">统一管理</h4>
              <p class="text-sm text-gray-600">所有设备集中管理，远程维护，大幅降低运维成本。</p>
            </div>
            <div class="text-center">
              <div class="text-3xl mb-3">⚡</div>
              <h4 class="font-semibold mb-2 text-apple-dark">快速响应</h4>
              <p class="text-sm text-gray-600">7x24小时技术支持，5分钟内响应，确保业务不中断。</p>
            </div>
            <div class="text-center">
              <div class="text-3xl mb-3">🔒</div>
              <h4 class="font-semibold mb-2 text-apple-dark">安全可靠</h4>
              <p class="text-sm text-gray-600">完善的安全防护体系，数据多重备份，系统稳定运行。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

