<script setup lang="ts">
import { ref } from 'vue'

const testimonials = [
  {
    name: '张总',
    role: '深圳极速电竞网咖 总经理',
    avatar: '👨',
    comment: '智维团队的服务非常专业，从开业指导到日常维护，每个环节都做得很到位。系统运行非常稳定，我们很放心。'
  },
  {
    name: '李经理',
    role: '广州星耀电竞酒店 运营总监',
    avatar: '👩',
    comment: '集中式管理方案解决了我们的大难题，现在维护效率大大提升，客户满意度也提高了。智维的技术实力确实强。'
  },
  {
    name: '王老板',
    role: '东莞网联连锁网吧 创始人',
    avatar: '👨',
    comment: '合作了 5 年，智维一直很靠谱。响应速度快，解决问题专业，是我们最信任的技术合作伙伴。'
  }
]

const currentIndex = ref(0)
</script>

<template>
  <div class="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
    <h3 class="text-xl font-bold mb-8 text-[#1d1d1f] flex items-center gap-2">
      <div class="w-1 h-6 bg-[#0066cc]"></div>
      客户口碑
    </h3>
    
    <div class="relative">
      <div class="overflow-hidden">
        <div 
          class="flex transition-transform duration-700 ease-in-out"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <div 
            v-for="(testimonial, index) in testimonials" 
            :key="index"
            class="min-w-full px-4 text-center"
          >
            <p class="text-lg text-[#1d1d1f] leading-relaxed mb-6 italic">
              "{{ testimonial.comment }}"
            </p>
            <div class="flex flex-col items-center">
              <div class="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-xl mb-3 border border-gray-100">
                {{ testimonial.avatar }}
              </div>
              <h4 class="font-bold text-[#1d1d1f] text-sm">{{ testimonial.name }}</h4>
              <p class="text-[10px] text-gray-400 uppercase tracking-widest">{{ testimonial.role }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center gap-2 mt-6">
        <button v-for="(_, i) in testimonials" :key="i" @click="currentIndex = i"
          :class="['h-1 rounded-full transition-all', currentIndex === i ? 'bg-[#0066cc] w-6' : 'bg-gray-200 w-2']"
        />
      </div>
    </div>
  </div>
</template>


