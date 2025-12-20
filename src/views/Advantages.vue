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
  <section class="max-w-7xl mx-auto px-6 lg:px-8">
    <div class="text-center mb-32 animate-on-scroll opacity-0 translate-y-6">
      <h2 class="text-lg font-semibold text-apple-blue mb-4 tracking-widest uppercase">技术优势</h2>
      <p class="text-5xl md:text-6xl font-semibold tracking-tight text-apple-dark mb-8">为什么选择我们</p>
      <p class="text-xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">十余年深耕，我们积累了丰富的实战经验和技术优势。</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <div 
        v-for="advantage in advantages" 
        :key="advantage.title"
        class="animate-on-scroll opacity-0 translate-y-6 group"
      >
        <div class="bg-white rounded-[2.5rem] p-12 border border-gray-50 hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] transition-all duration-700 h-full">
          <div :class="['w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-700 shadow-sm', advantage.color]">
            <component :is="advantage.icon" class="w-7 h-7 text-white" />
          </div>
          <h3 class="text-2xl font-semibold mb-6 text-apple-dark tracking-tight">{{ advantage.title }}</h3>
          <p class="text-gray-500 leading-relaxed font-light text-lg">{{ advantage.desc }}</p>
        </div>
      </div>
    </div>

    <!-- 差异化优势对比：更简洁 -->
    <div class="mt-32 animate-on-scroll opacity-0 translate-y-6 bg-white rounded-[3rem] p-16 md:p-24 border border-gray-50 shadow-[0_40px_100px_rgba(0,0,0,0.03)]">
      <h3 class="text-3xl font-semibold text-center mb-20 text-apple-dark tracking-tight">与竞争对手的差异化优势</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-16">
        <div class="text-center">
          <div class="text-5xl md:text-6xl font-bold text-apple-blue mb-4 tracking-tighter">15年</div>
          <p class="text-gray-500 font-light text-lg mb-2">行业深耕经验</p>
          <p class="text-sm text-gray-400 font-light">远超行业平均 5-8 年</p>
        </div>
        <div class="text-center">
          <div class="text-5xl md:text-6xl font-bold text-apple-blue mb-4 tracking-tighter">500+</div>
          <p class="text-gray-500 font-light text-lg mb-2">成功案例</p>
          <p class="text-sm text-gray-400 font-light">覆盖各类集中管理场景</p>
        </div>
        <div class="text-center">
          <div class="text-5xl md:text-6xl font-bold text-apple-blue mb-4 tracking-tighter">98%</div>
          <p class="text-gray-500 font-light text-lg mb-2">客户满意度</p>
          <p class="text-sm text-gray-400 font-light">持续保持行业领先</p>
        </div>
      </div>
    </div>
  </section>
</template>

