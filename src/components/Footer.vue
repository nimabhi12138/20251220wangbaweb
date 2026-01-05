<script setup lang="ts">
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-vue-next'
</script>

<template>
  <footer class="py-12 border-t border-white/5 bg-black/40">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-center gap-8">
        <div class="flex items-center space-x-3">
          <div class="w-8 h-8 bg-cyber-blue/20 rounded flex items-center justify-center border border-cyber-blue/30">
            <Monitor class="w-4 h-4 text-cyber-blue" />
          </div>
          <span class="text-sm font-black tracking-tighter text-white uppercase italic">ZhiWei Tech</span>
        </div>
        
        <div class="flex gap-8">
          <a href="#" class="text-[10px] font-bold text-gray-500 hover:text-white transition-colors tracking-widest uppercase">Privacy</a>
          <a href="#" class="text-[10px] font-bold text-gray-500 hover:text-white transition-colors tracking-widest uppercase">Terms</a>
          <a href="#" class="text-[10px] font-bold text-gray-500 hover:text-white transition-colors tracking-widest uppercase">SLA</a>
        </div>

        <p class="text-[10px] text-gray-600 font-mono tracking-tighter">
          © 2026 ZHIWEI_TECH_MAINTENANCE_SYSTEM. ALL_RIGHTS_RESERVED. [V2.0.4]
        </p>
      </div>
    </div>
  </footer>
</template>

