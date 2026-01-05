<script setup lang="ts">
import { Search, FileText, PenTool, Settings, CheckCircle, Headphones } from 'lucide-vue-next'

const steps = [
  {
    number: '01',
    title: '需求分析',
    desc: '深入了解您的业务规模、场景类型、预算和技术需求，制定初步方案。',
    icon: Search,
    duration: '1-2 工作日'
  },
  {
    number: '02',
    title: '方案制定',
    desc: '技术团队根据需求制定详细的技术方案、设备清单和报价单。',
    icon: FileText,
    duration: '2-3 工作日'
  },
  {
    number: '03',
    title: '合同签署',
    desc: '双方确认方案细节，签署服务合同，明确服务内容和保障条款。',
    icon: PenTool,
    duration: '1 工作日'
  },
  {
    number: '04',
    title: '实施部署',
    desc: '专业团队进场施工，包括网络布线、设备安装及系统调试。',
    icon: Settings,
    duration: '5-10 工作日'
  },
  {
    number: '05',
    title: '验收测试',
    desc: '全面功能测试，确保所有系统正常运行，客户验收签字。',
    icon: CheckCircle,
    duration: '1-2 工作日'
  },
  {
    number: '06',
    title: '持续维护',
    desc: '提供 7x24 小时技术支持，定期巡检，确保长期稳定运行。',
    icon: Headphones,
    duration: '长期服务'
  }
]
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div 
      v-for="(step, index) in steps" 
      :key="step.number"
      class="animate-on-scroll opacity-0 translate-y-10"
    >
      <div class="bg-white rounded-3xl p-10 border border-gray-100 hover:shadow-xl transition-all duration-700 h-full group">
        <div class="flex items-start justify-between mb-8">
          <div :class="['w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold text-white shadow-lg', index % 2 === 0 ? 'bg-[#0066cc]' : 'bg-gray-400']">
            {{ step.number }}
          </div>
          <component :is="step.icon" class="w-8 h-8 text-gray-200 group-hover:text-[#0066cc] transition-colors" />
        </div>
        
        <h3 class="text-2xl font-bold mb-4 text-[#1d1d1f] tracking-tight">{{ step.title }}</h3>
        <p class="text-gray-500 leading-relaxed font-light mb-6">{{ step.desc }}</p>
        
        <div class="flex items-center text-xs text-[#0066cc] font-bold uppercase tracking-widest">
          <span class="w-2 h-2 bg-[#0066cc] rounded-full mr-2"></span>
          {{ step.duration }}
        </div>
      </div>
    </div>
  </div>
</template>
