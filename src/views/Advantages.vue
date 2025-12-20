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
  <section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 animate-on-scroll opacity-0 translate-y-10">
        <h2 class="text-lg font-semibold text-apple-blue mb-2">技术优势</h2>
        <p class="text-4xl md:text-5xl font-semibold tracking-tight text-apple-dark mb-4">为什么选择我们</p>
        <p class="text-xl text-gray-500 max-w-2xl mx-auto">十余年深耕，我们积累了丰富的实战经验和技术优势。</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="advantage in advantages" 
          :key="advantage.title"
          class="animate-on-scroll opacity-0 translate-y-10 group"
        >
          <div class="bg-white rounded-[2rem] p-8 border border-gray-100 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 h-full">
            <div :class="['w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500', advantage.color]">
              <component :is="advantage.icon" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-2xl font-semibold mb-4 text-apple-dark">{{ advantage.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ advantage.desc }}</p>
          </div>
        </div>
      </div>

      <!-- 差异化优势对比 -->
      <div class="mt-20 animate-on-scroll opacity-0 translate-y-10">
        <div class="bg-gradient-to-br from-apple-blue/5 to-blue-50 rounded-3xl p-12">
          <h3 class="text-3xl font-semibold text-center mb-12 text-apple-dark">与竞争对手的差异化优势</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="text-4xl font-bold text-apple-blue mb-2">15年</div>
              <p class="text-gray-600">行业深耕经验</p>
              <p class="text-sm text-gray-500 mt-2">远超行业平均 5-8 年</p>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-apple-blue mb-2">500+</div>
              <p class="text-gray-600">成功案例</p>
              <p class="text-sm text-gray-500 mt-2">覆盖各类网吧场景</p>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-apple-blue mb-2">98%</div>
              <p class="text-gray-600">客户满意度</p>
              <p class="text-sm text-gray-500 mt-2">持续保持行业领先</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

