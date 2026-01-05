<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'
</script>

<template>
  <div class="relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center text-center z-10">
    <!-- 顶部小标签 -->
    <div class="animate-on-scroll opacity-0 translate-y-4 mb-6">
      <span class="px-4 py-1.5 rounded-full border border-cyber-blue/30 bg-cyber-blue/10 text-cyber-blue text-sm font-medium tracking-wider uppercase">
        Next-Gen Maintenance System
      </span>
    </div>

    <h1 class="animate-on-scroll opacity-0 translate-y-10 text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
      <span class="block text-white">智慧运维</span>
      <span class="block bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-blue bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent">
        重塑电竞空间
      </span>
    </h1>

    <p class="animate-on-scroll opacity-0 translate-y-10 text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
      为网吧、电竞酒店提供行业领先的集中管理解决方案。<br/>
      <span class="text-cyber-blue/80 font-mono">STABLE. FAST. SECURE.</span>
    </p>
    
    <div class="animate-on-scroll opacity-0 translate-y-10 flex flex-col sm:flex-row items-center justify-center gap-6">
      <a 
        href="#contact" 
        class="px-10 py-4 bg-cyber-blue text-black rounded-xl font-bold text-lg hover:bg-white hover:shadow-[0_0_30px_rgba(0,242,255,0.5)] transition-all duration-500 transform hover:-translate-y-1"
      >
        立即启动
      </a>
      <a 
        href="#solutions" 
        class="group flex items-center px-10 py-4 border border-white/20 rounded-xl font-bold text-lg hover:bg-white/5 transition-all duration-300"
      >
        技术概览
        <ChevronRight class="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>

    <!-- 底部数据简报 -->
    <div class="grid grid-cols-3 gap-8 md:gap-24 mt-20 pt-10 border-t border-white/10 w-full max-w-4xl mx-auto">
      <div class="animate-on-scroll opacity-0 translate-y-6">
        <p class="text-3xl md:text-4xl font-black text-white mb-1">500+</p>
        <p class="text-xs text-gray-500 uppercase tracking-widest">合作客户</p>
      </div>
      <div class="animate-on-scroll opacity-0 translate-y-6 [transition-delay:100ms]">
        <p class="text-3xl md:text-4xl font-black text-cyber-blue mb-1">15Y</p>
        <p class="text-xs text-gray-500 uppercase tracking-widest">行业经验</p>
      </div>
      <div class="animate-on-scroll opacity-0 translate-y-6 [transition-delay:200ms]">
        <p class="text-3xl md:text-4xl font-black text-white mb-1">24/7</p>
        <p class="text-xs text-gray-500 uppercase tracking-widest">实时响应</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes gradient-x {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.animate-gradient-x {
  animation: gradient-x 5s linear infinite;
}
</style>

