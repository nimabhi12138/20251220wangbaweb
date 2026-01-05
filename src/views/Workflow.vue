<script setup lang="ts">
import { Search, FileText, PenTool, Settings, CheckCircle, Headphones } from 'lucide-vue-next'

const steps = [
  {
    number: '01',
    title: '需求分析',
    desc: '深入了解您的业务规模、场景类型、预算和技术需求。',
    icon: Search
  },
  {
    number: '02',
    title: '方案制定',
    desc: '技术团队制定详细的技术方案、设备清单和报价单。',
    icon: FileText
  },
  {
    number: '03',
    title: '合同签署',
    desc: '确认方案细节，签署正式服务合同，明确保障条款。',
    icon: PenTool
  },
  {
    number: '04',
    title: '实施部署',
    desc: '专业团队进场施工，包括布线、安装及系统调试。',
    icon: Settings
  },
  {
    number: '05',
    title: '验收测试',
    desc: '全面功能测试，确保系统完美运行，客户签字验收。',
    icon: CheckCircle
  },
  {
    number: '06',
    title: '持续维护',
    desc: '提供 7x24 小时技术支持，定期巡检，确保长期稳定。',
    icon: Headphones
  }
]
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
      <div 
        v-for="(step, index) in steps" 
        :key="step.number"
        class="animate-on-scroll opacity-0 translate-y-10 flex items-start gap-6 group"
      >
        <div class="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#0066cc] font-bold text-lg group-hover:bg-[#0066cc] group-hover:text-white transition-all duration-300 border border-blue-100">
          {{ step.number }}
        </div>
        <div class="flex-1 pb-4">
          <h3 class="text-xl font-bold text-[#1d1d1f] mb-2 flex items-center gap-2 tracking-tight">
            {{ step.title }}
          </h3>
          <p class="text-base text-gray-500 leading-relaxed font-light">{{ step.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
