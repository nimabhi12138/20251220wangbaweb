<script setup lang="ts">
import { Monitor } from 'lucide-vue-next'
</script>

<template>
  <footer class="py-12 bg-gray-50 border-t border-gray-200">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-center gap-8">
        <div class="flex items-center space-x-3">
          <div class="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
            <Monitor class="w-4 h-4 text-gray-500" />
          </div>
          <span class="text-sm font-bold tracking-tight text-[#1d1d1f]">智维技术运维</span>
        </div>
        
        <div class="flex gap-8">
          <a href="#" class="text-xs font-medium text-gray-400 hover:text-[#1d1d1f] transition-colors">隐私政策</a>
          <a href="#" class="text-xs font-medium text-gray-400 hover:text-[#1d1d1f] transition-colors">服务条款</a>
          <a href="#" class="text-xs font-medium text-gray-400 hover:text-[#1d1d1f] transition-colors">SLA 协议</a>
        </div>

        <p class="text-xs text-gray-400 font-light">
          © 2026 ZHIWEI TECH. 保留所有权利. | 粤 ICP 备 2024001234 号
        </p>
      </div>
    </div>
  </footer>
</template>
