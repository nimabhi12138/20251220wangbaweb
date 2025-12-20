<script setup lang="ts">
import { Shield, Clock, CheckCircle2, AlertCircle, Award, FileCheck } from 'lucide-vue-next'

const guarantees = [
  {
    icon: Clock,
    title: '快速响应承诺',
    desc: '远程维护 5 分钟内响应，本地维护 2 小时内响应，紧急故障 1 小时内响应。',
    details: [
      '7x24 小时技术支持热线',
      '多渠道报修（电话/微信/QQ/邮件）',
      '专业客服团队实时在线',
      '紧急故障优先处理'
    ]
  },
  {
    icon: CheckCircle2,
    title: '问题解决保障',
    desc: '承诺 99% 的问题解决率，如无法解决，提供替代方案或全额退款。',
    details: [
      '专业团队诊断，精准定位问题',
      '多种解决方案，确保问题解决',
      '问题跟踪，直到完全解决',
      '定期回访，确保长期稳定'
    ]
  },
  {
    icon: Shield,
    title: '质保政策',
    desc: '所有硬件设备提供 1-3 年质保，软件系统提供终身技术支持。',
    details: [
      '硬件故障免费更换（质保期内）',
      '软件问题免费修复',
      '系统升级免费支持',
      '定期巡检和维护'
    ]
  },
  {
    icon: AlertCircle,
    title: '应急响应机制',
    desc: '建立完善的应急响应机制，确保重大故障能够快速恢复。',
    details: [
      '7x24 小时应急响应团队',
      '备用设备快速调配',
      '数据备份和快速恢复',
      '应急预案和演练'
    ]
  },
  {
    icon: Award,
    title: '服务等级协议（SLA）',
    desc: '明确的服务标准，确保服务质量可量化、可考核。',
    details: [
      '系统可用性 ≥ 99.5%',
      '故障恢复时间 ≤ 4 小时',
      '客户满意度 ≥ 95%',
      '定期服务报告'
    ]
  },
  {
    icon: FileCheck,
    title: '服务保障承诺',
    desc: '签署正式服务合同，明确双方权利义务，保障客户权益。',
    details: [
      '详细的服务内容说明',
      '明确的服务标准和时限',
      '完善的售后服务条款',
      '法律保障和纠纷解决机制'
    ]
  }
]
</script>

<template>
  <section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 animate-on-scroll opacity-0 translate-y-10">
        <h2 class="text-lg font-semibold text-apple-blue mb-2">服务保障</h2>
        <p class="text-4xl md:text-5xl font-semibold tracking-tight text-apple-dark mb-4">我们的承诺，您的保障</p>
        <p class="text-xl text-gray-500 max-w-2xl mx-auto">我们不仅提供专业的技术服务，更提供完善的服务保障，让您无后顾之忧。</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div 
          v-for="guarantee in guarantees" 
          :key="guarantee.title"
          class="animate-on-scroll opacity-0 translate-y-10 bg-apple-gray rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-500"
        >
          <div class="w-14 h-14 rounded-2xl bg-apple-blue/10 flex items-center justify-center mb-6">
            <component :is="guarantee.icon" class="w-7 h-7 text-apple-blue" />
          </div>
          <h3 class="text-xl font-semibold mb-3 text-apple-dark">{{ guarantee.title }}</h3>
          <p class="text-gray-600 mb-4 leading-relaxed">{{ guarantee.desc }}</p>
          <ul class="space-y-2">
            <li 
              v-for="(detail, index) in guarantee.details" 
              :key="index"
              class="flex items-start text-sm text-gray-600"
            >
              <span class="w-1.5 h-1.5 bg-apple-blue rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
              <span>{{ detail }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- SLA 详细说明 -->
      <div class="animate-on-scroll opacity-0 translate-y-10 bg-gradient-to-br from-apple-blue/5 to-blue-50 rounded-3xl p-12">
        <h3 class="text-3xl font-semibold text-center mb-12 text-apple-dark">服务等级协议（SLA）详细说明</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white rounded-2xl p-6">
            <h4 class="font-semibold mb-4 text-apple-dark">系统可用性</h4>
            <div class="text-4xl font-bold text-apple-blue mb-2">≥ 99.5%</div>
            <p class="text-gray-600 text-sm">年度系统正常运行时间不低于 99.5%，确保业务连续性。</p>
          </div>
          <div class="bg-white rounded-2xl p-6">
            <h4 class="font-semibold mb-4 text-apple-dark">故障恢复时间</h4>
            <div class="text-4xl font-bold text-apple-blue mb-2">≤ 4 小时</div>
            <p class="text-gray-600 text-sm">一般故障在 4 小时内恢复，紧急故障 2 小时内恢复。</p>
          </div>
          <div class="bg-white rounded-2xl p-6">
            <h4 class="font-semibold mb-4 text-apple-dark">客户满意度</h4>
            <div class="text-4xl font-bold text-apple-blue mb-2">≥ 95%</div>
            <p class="text-gray-600 text-sm">定期客户满意度调查，持续改进服务质量。</p>
          </div>
          <div class="bg-white rounded-2xl p-6">
            <h4 class="font-semibold mb-4 text-apple-dark">问题解决率</h4>
            <div class="text-4xl font-bold text-apple-blue mb-2">≥ 99%</div>
            <p class="text-gray-600 text-sm">承诺 99% 的问题能够及时有效解决。</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

