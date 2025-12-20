<script setup lang="ts">
import { Star, ChevronLeft, ChevronRight } from 'lucide-vue-next'
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
  <section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 animate-on-scroll opacity-0 translate-y-10">
        <h2 class="text-lg font-semibold text-apple-blue mb-2">客户评价</h2>
        <p class="text-4xl md:text-5xl font-semibold tracking-tight text-apple-dark mb-4">客户说好，才是真的好</p>
        <p class="text-xl text-gray-500 max-w-2xl mx-auto">98% 的客户满意度，来自每一位客户的真实反馈。</p>
      </div>

      <div class="relative">
        <!-- 轮播容器 -->
        <div class="overflow-hidden rounded-3xl">
          <div 
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <div 
              v-for="(testimonial, index) in testimonials" 
              :key="index"
              class="min-w-full px-4"
            >
              <div class="bg-apple-gray rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
                <div class="flex items-center mb-6">
                  <div class="w-16 h-16 rounded-full bg-apple-blue/10 flex items-center justify-center text-3xl mr-4">
                    {{ testimonial.avatar }}
                  </div>
                  <div>
                    <h4 class="text-xl font-semibold text-apple-dark">{{ testimonial.name }}</h4>
                    <p class="text-sm text-gray-500">{{ testimonial.role }}</p>
                  </div>
                </div>
                
                <div class="flex items-center mb-4">
                  <Star 
                    v-for="i in testimonial.rating" 
                    :key="i" 
                    class="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                </div>
                
                <p class="text-lg text-gray-700 leading-relaxed mb-4 italic">"{{ testimonial.comment }}"</p>
                
                <p class="text-sm text-gray-400">{{ testimonial.date }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 导航按钮 -->
        <button 
          @click="prev"
          class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-apple-gray transition-colors"
        >
          <ChevronLeft class="w-6 h-6 text-apple-dark" />
        </button>
        <button 
          @click="next"
          class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-apple-gray transition-colors"
        >
          <ChevronRight class="w-6 h-6 text-apple-dark" />
        </button>

        <!-- 指示器 -->
        <div class="flex justify-center space-x-2 mt-8">
          <button 
            v-for="(_, index) in testimonials" 
            :key="index"
            @click="currentIndex = index"
            :class="[
              'w-2 h-2 rounded-full transition-all',
              currentIndex === index ? 'bg-apple-blue w-8' : 'bg-gray-300'
            ]"
          />
        </div>
      </div>

      <!-- 统计数据 -->
      <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-on-scroll opacity-0 translate-y-10">
        <div class="text-center">
          <div class="text-4xl font-bold text-apple-blue mb-2">98%</div>
          <p class="text-sm text-gray-600">客户满意度</p>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold text-apple-blue mb-2">500+</div>
          <p class="text-sm text-gray-600">服务客户</p>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold text-apple-blue mb-2">99.5%</div>
          <p class="text-sm text-gray-600">系统稳定性</p>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold text-apple-blue mb-2">5分钟</div>
          <p class="text-sm text-gray-600">平均响应时间</p>
        </div>
      </div>
    </div>
  </section>
</template>

