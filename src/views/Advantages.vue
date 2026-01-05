<script setup lang="ts">
import { Award, Zap, Shield, Users, Clock, TrendingUp } from 'lucide-vue-next'

const advantages = [
  {
    icon: Award,
    title: '行业认证',
    desc: '拥有多项技术认证，团队成员持有 CCIE、CCNP 等专业证书，技术实力行业领先。',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: Zap,
    title: '快速响应',
    desc: '平均响应时间 5 分钟，紧急故障 2 小时内到达现场，确保业务不中断。',
    color: 'from-blue-400 to-purple-500'
  },
  {
    icon: Shield,
    title: '安全可靠',
    desc: '自主研发的安全防护系统，99.9% 的系统稳定性，数据多重备份保障。',
    color: 'from-green-400 to-emerald-500'
  },
  {
    icon: Users,
    title: '专业团队',
    desc: '30+ 经验丰富的技术工程师，平均 8 年行业经验，7x24 小时待命。',
    color: 'from-purple-400 to-pink-500'
  },
  {
    icon: Clock,
    title: '持续服务',
    desc: '不是一次性服务，而是长期合作伙伴，提供持续的技术支持和系统优化。',
    color: 'from-indigo-400 to-blue-500'
  },
  {
    icon: TrendingUp,
    title: '技术领先',
    desc: '紧跟行业前沿技术，率先引入万兆网络、无盘系统等先进解决方案。',
    color: 'from-red-400 to-orange-500'
  }
]
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div 
      v-for="advantage in advantages" 
      :key="advantage.title"
      class="animate-on-scroll opacity-0 translate-y-10 group"
    >
      <div class="bg-white rounded-[2.5rem] p-10 border border-gray-100 hover:shadow-2xl transition-all duration-700 h-full">
        <div :class="['w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-700 shadow-sm', advantage.color]">
          <component :is="advantage.icon" class="w-7 h-7 text-white" />
        </div>
        <h3 class="text-2xl font-bold mb-4 text-[#1d1d1f] tracking-tight">{{ advantage.title }}</h3>
        <p class="text-gray-500 leading-relaxed font-light">{{ advantage.desc }}</p>
      </div>
    </div>
  </div>
</template>
