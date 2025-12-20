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
  <section class="py-24 bg-[#f5f5f7]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 animate-on-scroll opacity-0 translate-y-10">
        <h2 class="text-lg font-semibold text-apple-blue mb-2">服务流程</h2>
        <p class="text-4xl md:text-5xl font-semibold tracking-tight text-apple-dark mb-4">从咨询到落地，全程无忧</p>
        <p class="text-xl text-gray-500 max-w-2xl mx-auto">我们提供标准化的服务流程，确保每个环节都专业、高效、可靠。</p>
      </div>

      <div class="relative">
        <!-- 连接线（桌面端） -->
        <div class="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-apple-blue/30 to-transparent"></div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(step, index) in steps" 
            :key="step.number"
            class="animate-on-scroll opacity-0 translate-y-10 relative"
            :style="{ 'animation-delay': `${index * 100}ms` }"
          >
            <div class="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 h-full">
              <div class="flex items-start justify-between mb-6">
                <div :class="['w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold text-white', index % 2 === 0 ? 'bg-apple-blue' : 'bg-gray-400']">
                  {{ step.number }}
                </div>
                <component :is="step.icon" class="w-8 h-8 text-gray-300" />
              </div>
              
              <h3 class="text-2xl font-semibold mb-3 text-apple-dark">{{ step.title }}</h3>
              <p class="text-gray-600 leading-relaxed mb-4">{{ step.desc }}</p>
              
              <div class="flex items-center text-sm text-apple-blue font-medium">
                <span class="w-2 h-2 bg-apple-blue rounded-full mr-2"></span>
                预计时长：{{ step.duration }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

