<script setup lang="ts">
import { Building2, Hotel, Store, Waves, GraduationCap, Briefcase } from 'lucide-vue-next'

const cases = [
  {
    type: '大型网咖',
    icon: Building2,
    client: '深圳极速电竞网咖',
    scale: '200 台机器',
    metrics: {
      stability: '99.5%',
      delay: '降低 80%',
      satisfaction: '95%'
    }
  },
  {
    type: '电竞酒店',
    icon: Hotel,
    client: '广州星耀电竞酒店',
    scale: '150 间客房',
    metrics: {
      efficiency: '提升 5 倍',
      update: '提升 10 倍',
      rating: '98%'
    }
  },
  {
    type: '连锁网吧',
    icon: Store,
    client: '东莞网联分店',
    scale: '500 台总规模',
    metrics: {
      cost: '降低 40%',
      response: '缩短 60%',
      satisfaction: '96%'
    }
  }
]
</script>

<template>
  <div class="space-y-8">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div 
        v-for="(caseItem, index) in cases" 
        :key="index"
        class="animate-on-scroll opacity-0 translate-y-10 bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all"
      >
        <div class="flex justify-between items-start mb-6">
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#0066cc]">
              <component :is="caseItem.icon" class="w-5 h-5" />
            </div>
            <div>
              <h3 class="font-bold text-[#1d1d1f]">{{ caseItem.client }}</h3>
              <p class="text-xs text-gray-400 font-light">{{ caseItem.scale }}</p>
            </div>
          </div>
          <span class="text-[10px] px-2 py-1 rounded-full bg-blue-50 text-[#0066cc] border border-blue-100 font-bold uppercase tracking-wider">
            {{ caseItem.type }}
          </span>
        </div>
        <div class="grid grid-cols-3 gap-3">
          <div v-for="(value, key) in caseItem.metrics" :key="key" class="bg-gray-50 p-3 rounded-2xl text-center">
            <div class="text-[#0066cc] text-base font-bold">{{ value }}</div>
            <div class="text-[8px] text-gray-400 uppercase tracking-widest font-bold">{{ key }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
