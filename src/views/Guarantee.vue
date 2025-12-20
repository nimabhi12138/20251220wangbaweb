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
  <section class="max-w-7xl mx-auto px-6 lg:px-8">
    <div class="text-center mb-32 animate-on-scroll opacity-0 translate-y-6">
      <h2 class="text-lg font-semibold text-apple-blue mb-4 tracking-widest uppercase">服务保障</h2>
      <p class="text-5xl md:text-6xl font-semibold tracking-tight text-apple-dark mb-8">我们的承诺，您的保障</p>
      <p class="text-xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">我们不仅提供专业的技术服务，更提供完善的服务保障，让您无后顾之忧。</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
      <div 
        v-for="guarantee in guarantees" 
        :key="guarantee.title"
        class="animate-on-scroll opacity-0 translate-y-6 bg-white rounded-[2.5rem] p-12 border border-gray-50 hover:shadow-[0_30px_60px_rgba(0,0,0,0.04)] transition-all duration-700"
      >
        <div class="w-16 h-16 rounded-2xl bg-apple-blue/5 flex items-center justify-center mb-10">
          <component :is="guarantee.icon" class="w-7 h-7 text-apple-blue" />
        </div>
        <h3 class="text-2xl font-semibold mb-6 text-apple-dark tracking-tight">{{ guarantee.title }}</h3>
        <p class="text-gray-500 mb-8 leading-relaxed font-light text-lg">{{ guarantee.desc }}</p>
        <ul class="space-y-4">
          <li 
            v-for="(detail, index) in guarantee.details" 
            :key="index"
            class="flex items-start text-gray-500 font-light"
          >
            <span class="w-1.5 h-1.5 bg-apple-blue/40 rounded-full mr-4 mt-2 flex-shrink-0"></span>
            <span>{{ detail }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- SLA 详细说明：更简洁 -->
    <div class="animate-on-scroll opacity-0 translate-y-6 bg-white rounded-[3rem] p-16 md:p-24 border border-gray-50 shadow-[0_40px_100px_rgba(0,0,0,0.03)]">
      <h3 class="text-3xl font-semibold text-center mb-20 text-apple-dark tracking-tight">服务等级协议（SLA）详细说明</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div class="text-center p-10 bg-[#f5f5f7] rounded-[2rem]">
          <div class="text-5xl md:text-6xl font-bold text-apple-blue mb-4 tracking-tighter">≥ 99.5%</div>
          <h4 class="font-semibold mb-3 text-apple-dark text-lg">系统可用性</h4>
          <p class="text-gray-500 font-light text-sm leading-relaxed">年度系统正常运行时间不低于 99.5%，确保业务连续性。</p>
        </div>
        <div class="text-center p-10 bg-[#f5f5f7] rounded-[2rem]">
          <div class="text-5xl md:text-6xl font-bold text-apple-blue mb-4 tracking-tighter">≤ 4 小时</div>
          <h4 class="font-semibold mb-3 text-apple-dark text-lg">故障恢复时间</h4>
          <p class="text-gray-500 font-light text-sm leading-relaxed">一般故障在 4 小时内恢复，紧急故障 2 小时内恢复。</p>
        </div>
        <div class="text-center p-10 bg-[#f5f5f7] rounded-[2rem]">
          <div class="text-5xl md:text-6xl font-bold text-apple-blue mb-4 tracking-tighter">≥ 95%</div>
          <h4 class="font-semibold mb-3 text-apple-dark text-lg">客户满意度</h4>
          <p class="text-gray-500 font-light text-sm leading-relaxed">定期客户满意度调查，持续改进服务质量。</p>
        </div>
        <div class="text-center p-10 bg-[#f5f5f7] rounded-[2rem]">
          <div class="text-5xl md:text-6xl font-bold text-apple-blue mb-4 tracking-tighter">≥ 99%</div>
          <h4 class="font-semibold mb-3 text-apple-dark text-lg">问题解决率</h4>
          <p class="text-gray-500 font-light text-sm leading-relaxed">承诺 99% 的问题能够及时有效解决。</p>
        </div>
      </div>
    </div>
  </section>
</template>

