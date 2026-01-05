<script setup lang="ts">
import { Award, Zap, Shield, Users, Clock, TrendingUp } from 'lucide-vue-next'

const advantages = [
  {
    icon: Award,
    title: '行业认证',
    desc: '拥有多项技术认证，团队成员持有 CCIE、CCNP 专业证书。',
    color: 'text-orange-500 bg-orange-50'
  },
  {
    icon: Zap,
    title: '快速响应',
    desc: '平均 5 分钟响应，紧急故障 2 小时内到达现场。',
    color: 'text-blue-500 bg-blue-50'
  },
  {
    icon: Shield,
    title: '安全可靠',
    desc: '自研防护系统，99.9% 系统稳定性，数据多重备份。',
    color: 'text-green-500 bg-green-50'
  },
  {
    icon: Users,
    title: '专业团队',
    desc: '30+ 经验丰富的工程师，平均 8 年行业深耕经验。',
    color: 'text-purple-500 bg-purple-50'
  },
  {
    icon: Clock,
    title: '持续服务',
    desc: '提供 7x24 小时待命，长期的合作伙伴支持与优化。',
    color: 'text-indigo-500 bg-indigo-50'
  },
  {
    icon: TrendingUp,
    title: '技术领先',
    desc: '紧跟前沿技术，率先引入万兆网络、无盘系统方案。',
    color: 'text-red-500 bg-red-50'
  }
]
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div 
      v-for="advantage in advantages" 
      :key="advantage.title"
      class="animate-on-scroll opacity-0 translate-y-10 group bg-white p-6 rounded-2xl border border-gray-100 hover:border-[#0066cc]/30 hover:shadow-lg transition-all duration-300"
    >
      <div :class="['w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110', advantage.color]">
        <component :is="advantage.icon" class="w-5 h-5" />
      </div>
      <h3 class="text-xl font-bold text-[#1d1d1f] mb-2">{{ advantage.title }}</h3>
      <p class="text-base text-gray-500 leading-relaxed font-light">{{ advantage.desc }}</p>
    </div>
  </div>
</template>
