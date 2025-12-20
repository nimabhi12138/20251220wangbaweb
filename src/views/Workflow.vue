<script setup lang="ts">
import { Search, FileText, PenTool, Settings, CheckCircle, Headphones } from 'lucide-vue-next'

const steps = [
  {
    number: '01',
    title: '需求分析',
    desc: '深入了解您的业务规模、场景类型、预算和技术需求，制定初步方案。',
    icon: Search,
    duration: '1-2 个工作日'
  },
  {
    number: '02',
    title: '方案制定',
    desc: '技术团队根据需求制定详细的技术方案、设备清单和报价单。',
    icon: FileText,
    duration: '2-3 个工作日'
  },
  {
    number: '03',
    title: '合同签署',
    desc: '双方确认方案细节，签署服务合同，明确服务内容、价格和保障条款。',
    icon: PenTool,
    duration: '1 个工作日'
  },
  {
    number: '04',
    title: '实施部署',
    desc: '专业团队进场施工，包括网络布线、设备安装、系统部署和调试。',
    icon: Settings,
    duration: '5-10 个工作日'
  },
  {
    number: '05',
    title: '验收测试',
    desc: '全面功能测试，确保所有系统正常运行，客户验收签字确认。',
    icon: CheckCircle,
    duration: '1-2 个工作日'
  },
  {
    number: '06',
    title: '持续维护',
    desc: '提供 7x24 小时技术支持，定期巡检，确保系统长期稳定运行。',
    icon: Headphones,
    duration: '长期服务'
  }
]
</script>

<template>
  <section class="max-w-7xl mx-auto px-6 lg:px-8">
    <div class="text-center mb-32 animate-on-scroll opacity-0 translate-y-6">
      <h2 class="text-lg font-semibold text-apple-blue mb-4 tracking-widest uppercase">服务流程</h2>
      <p class="text-5xl md:text-6xl font-semibold tracking-tight text-apple-dark mb-8">从咨询到落地，全程无忧</p>
      <p class="text-xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">我们提供标准化的服务流程，确保每个环节都专业、高效、可靠。</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <div 
        v-for="(step, index) in steps" 
        :key="step.number"
        class="animate-on-scroll opacity-0 translate-y-6"
      >
        <div class="bg-white rounded-[2.5rem] p-12 border border-gray-50 hover:shadow-[0_30px_60px_rgba(0,0,0,0.04)] transition-all duration-700 h-full group">
          <div class="flex items-start justify-between mb-10">
            <div :class="['w-20 h-20 rounded-[1.5rem] flex items-center justify-center text-3xl font-bold text-white shadow-lg', index % 2 === 0 ? 'bg-apple-blue' : 'bg-gray-400']">
              {{ step.number }}
            </div>
            <component :is="step.icon" class="w-8 h-8 text-gray-200 group-hover:text-apple-blue transition-colors" />
          </div>
          
          <h3 class="text-2xl font-semibold mb-6 text-apple-dark tracking-tight">{{ step.title }}</h3>
          <p class="text-gray-500 leading-relaxed font-light mb-8 text-lg">{{ step.desc }}</p>
          
          <div class="flex items-center text-sm text-apple-blue font-semibold uppercase tracking-widest">
            <span class="w-2 h-2 bg-apple-blue rounded-full mr-3"></span>
            {{ step.duration }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

