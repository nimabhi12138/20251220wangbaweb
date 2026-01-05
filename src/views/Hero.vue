<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'
</script>

<template>
  <div class="relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center text-center z-10 py-20">
    <div class="animate-on-scroll opacity-0 translate-y-10 mb-8">
      <span class="px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50 text-[#0066cc] text-sm font-medium tracking-wider uppercase">
        专业的网吧 & 电竞酒店运维专家
      </span>
    </div>

    <h1 class="animate-on-scroll opacity-0 translate-y-10 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#1d1d1f] mb-8 leading-[1.1]">
      <span class="block">智慧运维</span>
      <span class="block text-[#0066cc]">重塑极致稳定体验</span>
    </h1>

    <p class="animate-on-scroll opacity-0 translate-y-10 text-lg md:text-xl text-gray-500 max-w-3xl mx-auto mb-12 leading-relaxed font-light px-4">
      十五年深耕网吧与电竞酒店行业。我们提供全方位的集中管理、无盘系统部署及 24/7 极速响应服务，为您的商业成功护航。
    </p>
    
    <div class="animate-on-scroll opacity-0 translate-y-10 flex flex-col sm:flex-row items-center justify-center gap-6">
      <a 
        href="#contact" 
        class="px-10 py-4 bg-[#0066cc] text-white rounded-full font-semibold text-lg hover:bg-[#0071e3] transition-all duration-300 shadow-lg shadow-blue-500/20 transform hover:-translate-y-1"
      >
        立即免费咨询
      </a>
      <a 
        href="#solutions" 
        class="group flex items-center px-10 py-4 text-[#0066cc] font-semibold text-lg hover:underline transition-all duration-300"
      >
        了解解决方案
        <ChevronRight class="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>

    <!-- 底部数据简报 -->
    <div class="grid grid-cols-3 gap-8 md:gap-24 mt-24 pt-12 border-t border-gray-100 w-full max-w-4xl mx-auto px-4">
      <div class="animate-on-scroll opacity-0 translate-y-10">
        <p class="text-3xl md:text-5xl font-bold text-[#1d1d1f] mb-2 tracking-tight">500+</p>
        <p class="text-xs text-gray-400 uppercase tracking-widest font-medium">合作机构</p>
      </div>
      <div class="animate-on-scroll opacity-0 translate-y-10 [transition-delay:100ms]">
        <p class="text-3xl md:text-5xl font-bold text-[#0066cc] mb-2 tracking-tight">15年</p>
        <p class="text-xs text-gray-400 uppercase tracking-widest font-medium">行业经验</p>
      </div>
      <div class="animate-on-scroll opacity-0 translate-y-10 [transition-delay:200ms]">
        <p class="text-3xl md:text-5xl font-bold text-[#1d1d1f] mb-2 tracking-tight">24/7</p>
        <p class="text-xs text-gray-400 uppercase tracking-widest font-medium">实时响应</p>
      </div>
    </div>
  </div>
</template>
