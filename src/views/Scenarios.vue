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
  <div class="space-y-6">
    <div class="grid grid-cols-2 gap-4">
      <div 
        v-for="scenario in scenarios" 
        :key="scenario.title"
        class="animate-on-scroll opacity-0 translate-y-6 group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-cyber-blue/50 transition-all duration-500"
      >
        <div :class="['w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500', scenario.color]">
          <component :is="scenario.icon" class="w-5 h-5 text-white" />
        </div>
        <h3 class="text-lg font-bold mb-2 text-white">{{ scenario.title }}</h3>
        <p class="text-xs text-gray-400 leading-relaxed">{{ scenario.desc }}</p>
      </div>
    </div>
  </div>
</template>

