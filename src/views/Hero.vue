<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'
</script>

<template>
  <section class="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#fbfbfd]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
      <h1 class="animate-on-scroll opacity-0 translate-y-10 text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-apple-dark mb-6">
        专业集中管理解决方案
      </h1>
      <p class="animate-on-scroll opacity-0 translate-y-10 text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto mb-10 leading-relaxed">
        为网吧、电竞酒店、洗浴中心、学校、企业等提供专业、高效、全方位的集中管理与维护服务。
      </p>
      
      <div class="animate-on-scroll opacity-0 translate-y-10 flex flex-col sm:flex-row items-center justify-center gap-6">
        <a 
          href="#contact" 
          class="px-8 py-3 bg-apple-blue text-white rounded-full font-medium text-lg hover:bg-blue-600 transition-all duration-300"
        >
          立即咨询
        </a>
        <a 
          href="#services" 
          class="flex items-center text-apple-link text-lg font-medium hover:underline group"
        >
          了解更多
          <ChevronRight class="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>

    <!-- Decorative Background Elements -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-b from-blue-50/50 to-white opacity-50 rounded-full blur-3xl"></div>
    </div>
  </section>
</template>

<style scoped>
h1 {
  background: linear-gradient(180deg, #1d1d1f 0%, #434344 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>

