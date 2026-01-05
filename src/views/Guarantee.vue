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
  <div class="space-y-6">
    <h2 class="text-xl font-bold text-white mb-6 flex items-center gap-2">
      <div class="w-1 h-6 bg-cyber-purple"></div>
      服务保障
    </h2>
    <div class="grid grid-cols-2 gap-4">
      <div 
        v-for="guarantee in guarantees.slice(0, 4)" 
        :key="guarantee.title"
        class="animate-on-scroll opacity-0 translate-y-6 flex flex-col p-4 bg-white/5 border border-white/10 rounded-xl"
      >
        <component :is="guarantee.icon" class="w-5 h-5 text-cyber-purple mb-3" />
        <h3 class="text-sm font-bold text-white mb-1">{{ guarantee.title }}</h3>
        <p class="text-[10px] text-gray-500 leading-tight">{{ guarantee.desc }}</p>
      </div>
    </div>
  </div>
</template>

