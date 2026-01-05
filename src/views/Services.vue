<script setup lang="ts">
import { HardDrive, CloudLightning, Rocket, ShieldCheck, Clock } from 'lucide-vue-next'

const services = [
  {
    title: '本地维护',
    desc: '资深技术团队上门服务，解决硬件故障、网络布线及服务器环境搭建。',
    icon: HardDrive,
    color: 'bg-blue-50 text-blue-600',
    details: {
      responseTime: '2小时内响应，4小时内到达现场',
      services: [
        '硬件故障诊断与更换',
        '网络布线规划与实施',
        '无盘服务器环境搭建',
        '系统重装与驱动安装'
      ]
    }
  },
  {
    title: '远程维护',
    desc: '7x24小时全天候在线响应，秒级定位并解决软件异常、系统更新。',
    icon: CloudLightning,
    color: 'bg-purple-50 text-purple-600',
    details: {
      responseTime: '5分钟内响应',
      services: [
        '系统优化与垃圾清理',
        '游戏更新与补丁安装',
        '网络延迟诊断与优化',
        '病毒查杀与系统修复'
      ]
    }
  },
  {
    title: '开业指导',
    desc: '从选址规划到证照办理，提供全流程技术顾问服务，让您开业无忧。',
    icon: Rocket,
    color: 'bg-orange-50 text-orange-600',
    details: {
      responseTime: '24小时内提供初步方案',
      services: [
        '网络架构设计与选型',
        '机器配置方案制定',
        '装修布线方案设计',
        '员工技术培训'
      ]
    }
  },
  {
    title: '系统安全',
    desc: '深度定制防火墙及无盘系统，防范ARP攻击及病毒入侵。',
    icon: ShieldCheck,
    color: 'bg-green-50 text-green-600',
    details: {
      responseTime: '安全事件1小时内响应',
      services: [
        'ARP攻击防护系统部署',
        '防火墙规则定制与优化',
        '外挂检测与拦截',
        '数据备份与恢复方案'
      ]
    }
  }
]
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div 
      v-for="service in services" 
      :key="service.title"
      class="animate-on-scroll opacity-0 translate-y-10 group p-10 rounded-[2.5rem] bg-white border border-gray-100 hover:shadow-2xl transition-all duration-700"
    >
      <div :class="['w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm transition-transform group-hover:scale-110 duration-700', service.color]">
        <component :is="service.icon" class="w-8 h-8" />
      </div>
      <h3 class="text-3xl font-bold mb-4 text-[#1d1d1f] tracking-tight">{{ service.title }}</h3>
      <p class="text-lg text-gray-500 leading-relaxed font-light mb-8">
        {{ service.desc }}
      </p>
      
      <div class="space-y-6">
        <div class="flex items-center text-sm font-semibold text-[#0066cc] uppercase tracking-wider">
          <Clock class="w-5 h-5 mr-3" />
          {{ service.details.responseTime }}
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div v-for="(item, idx) in service.details.services" :key="idx" class="flex items-center text-sm text-gray-600 font-light">
            <div class="w-1.5 h-1.5 rounded-full bg-blue-400 mr-3"></div>
            {{ item }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
