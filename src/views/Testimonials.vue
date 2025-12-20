<script setup lang="ts">
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { ref } from 'vue'

const testimonials = [
  {
    name: '张总',
    role: '深圳极速电竞网咖 总经理',
    avatar: '👨',
    rating: 5,
    comment: '智维团队的服务非常专业，从开业指导到日常维护，每个环节都做得很到位。系统运行非常稳定，我们很放心。',
    date: '2024年3月'
  },
  {
    name: '李经理',
    role: '广州星耀电竞主题酒店 运营总监',
    avatar: '👩',
    rating: 5,
    comment: '集中式管理方案解决了我们的大难题，现在维护效率大大提升，客户满意度也提高了。智维的技术实力确实强。',
    date: '2024年5月'
  },
  {
    name: '王老板',
    role: '东莞网联连锁网吧 创始人',
    avatar: '👨',
    rating: 5,
    comment: '合作了 5 年，智维一直很靠谱。响应速度快，解决问题专业，是我们最信任的技术合作伙伴。',
    date: '2024年6月'
  },
  {
    name: '陈总',
    role: '佛山天域网咖 投资人',
    avatar: '👨',
    rating: 5,
    comment: '开业前的技术指导非常详细，帮我们避开了很多坑。现在系统运行稳定，营业额也在稳步增长。',
    date: '2024年7月'
  },
  {
    name: '刘经理',
    role: '惠州雷霆电竞馆 店长',
    avatar: '👩',
    rating: 5,
    comment: '远程维护太方便了，有问题随时联系，几分钟就能解决。技术团队很专业，服务态度也很好。',
    date: '2024年8月'
  }
]

const currentIndex = ref(0)

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length
}

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + testimonials.length) % testimonials.length
}
</script>

<template>
  <section class="max-w-7xl mx-auto px-6 lg:px-8">
    <div class="text-center mb-32 animate-on-scroll opacity-0 translate-y-6">
      <h2 class="text-lg font-semibold text-apple-blue mb-4 tracking-widest uppercase">客户口碑</h2>
      <p class="text-5xl md:text-6xl font-semibold tracking-tight text-apple-dark mb-8">听听他们怎么说</p>
    </div>

    <div class="relative max-w-5xl mx-auto">
      <!-- 轮播容器 -->
      <div class="overflow-hidden rounded-[3rem] bg-white shadow-[0_40px_100px_rgba(0,0,0,0.03)] border border-gray-50">
        <div 
          class="flex transition-transform duration-1000 cubic-bezier(0.4, 0, 0.2, 1)"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <div 
            v-for="(testimonial, index) in testimonials" 
            :key="index"
            class="min-w-full px-12 py-20 md:px-24 md:py-32 flex flex-col items-center text-center"
          >
            <div class="text-5xl mb-10 opacity-20 text-apple-blue font-serif italic">“</div>
            
            <p class="text-2xl md:text-3xl text-apple-dark leading-snug font-medium mb-12 max-w-3xl">
              {{ testimonial.comment }}
            </p>
            
            <div class="flex flex-col items-center">
              <div class="w-16 h-16 rounded-full bg-[#f5f5f7] flex items-center justify-center text-2xl mb-6 shadow-inner">
                {{ testimonial.avatar }}
              </div>
              <h4 class="text-xl font-semibold text-apple-dark mb-1">{{ testimonial.name }}</h4>
              <p class="text-sm text-gray-400 font-light uppercase tracking-widest">{{ testimonial.role }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 悬浮导航按钮 -->
      <div class="absolute inset-y-0 -left-10 -right-10 hidden md:flex items-center justify-between pointer-events-none">
        <button 
          @click="prev"
          class="w-16 h-16 rounded-full bg-white shadow-2xl flex items-center justify-center hover:bg-apple-blue hover:text-white transition-all duration-500 pointer-events-auto group"
        >
          <ChevronLeft class="w-6 h-6 text-apple-dark group-hover:text-white" />
        </button>
        <button 
          @click="next"
          class="w-16 h-16 rounded-full bg-white shadow-2xl flex items-center justify-center hover:bg-apple-blue hover:text-white transition-all duration-500 pointer-events-auto group"
        >
          <ChevronRight class="w-6 h-6 text-apple-dark group-hover:text-white" />
        </button>
      </div>

      <!-- 极简指示器 -->
      <div class="flex justify-center space-x-4 mt-16">
        <button 
          v-for="(_, index) in testimonials" 
          :key="index"
          @click="currentIndex = index"
          :class="[
            'h-1.5 rounded-full transition-all duration-700',
            currentIndex === index ? 'bg-apple-blue w-12' : 'bg-gray-200 w-4'
          ]"
        />
      </div>
    </div>

    <!-- 数据指标：更干净的排版 -->
    <div class="mt-40 grid grid-cols-2 lg:grid-cols-4 gap-16 md:gap-24 animate-on-scroll opacity-0 translate-y-6 max-w-6xl mx-auto">
      <div class="flex flex-col items-center text-center group">
        <div class="text-5xl md:text-6xl font-bold text-apple-dark mb-4 tracking-tighter group-hover:text-apple-blue transition-colors">98%</div>
        <p class="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">客户满意度</p>
      </div>
      <div class="flex flex-col items-center text-center group">
        <div class="text-5xl md:text-6xl font-bold text-apple-dark mb-4 tracking-tighter group-hover:text-apple-blue transition-colors">500+</div>
        <p class="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">合作机构</p>
      </div>
      <div class="flex flex-col items-center text-center group">
        <div class="text-5xl md:text-6xl font-bold text-apple-dark mb-4 tracking-tighter group-hover:text-apple-blue transition-colors">99.5%</div>
        <p class="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">系统稳定性</p>
      </div>
      <div class="flex flex-col items-center text-center group">
        <div class="text-5xl md:text-6xl font-bold text-apple-dark mb-4 tracking-tighter group-hover:text-apple-blue transition-colors">5min</div>
        <p class="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">平均响应时间</p>
      </div>
    </div>
  </section>
</template>

