<script setup lang="ts">
import { HardDrive, CloudLightning, Rocket, ShieldCheck, Clock, CheckCircle2 } from 'lucide-vue-next'

const services = [
  {
    title: '本地维护',
    desc: '资深技术团队上门服务，解决硬件故障、网络布线及服务器环境搭建。',
    icon: HardDrive,
    color: 'bg-blue-50 text-blue-600',
    details: {
      responseTime: '2小时内响应，4小时内到达现场',
      services: [
        '硬件故障诊断与更换（主板、显卡、内存、电源等）',
        '网络布线规划与实施（千兆/万兆网络架构）',
        '无盘服务器环境搭建与优化',
        '系统重装与驱动安装',
        '外设调试（显示器、键盘、鼠标、耳机）',
        '机房环境检测与优化建议'
      ],
      process: [
        '接到报修电话，快速了解故障情况',
        '技术工程师2小时内响应，确认上门时间',
        '现场诊断，提供解决方案',
        '实施维修，测试验证',
        '填写服务单，客户确认签字'
      ]
    }
  },
  {
    title: '远程维护',
    desc: '7x24小时全天候在线响应，秒级定位并解决软件异常、系统更新及游戏优化。',
    icon: CloudLightning,
    color: 'bg-purple-50 text-purple-600',
    details: {
      responseTime: '5分钟内响应，15分钟内开始处理',
      services: [
        '远程桌面连接，实时查看问题',
        '系统优化与垃圾清理',
        '游戏更新与补丁安装',
        '网络延迟诊断与优化',
        '病毒查杀与系统修复',
        '无盘系统镜像更新',
        '计费系统维护与数据备份'
      ],
      process: [
        '客户通过电话/微信/QQ报修',
        '技术员5分钟内响应，获取远程权限',
        '远程连接诊断问题',
        '实时处理并反馈进度',
        '问题解决后测试验证',
        '记录服务日志，定期回访'
      ]
    }
  },
  {
    title: '开业指导',
    desc: '从选址规划到证照办理，提供全流程技术顾问服务，让您开业无忧。',
    icon: Rocket,
    color: 'bg-orange-50 text-orange-600',
    details: {
      responseTime: '预约后24小时内提供初步方案',
      services: [
        '选址评估与技术可行性分析',
        '网络架构设计与设备选型建议',
        '机器配置方案制定（根据预算和定位）',
        '证照办理流程指导（网络文化经营许可证等）',
        '装修布线方案设计',
        '开业前设备调试与系统部署',
        '员工技术培训'
      ],
      process: [
        '初次沟通，了解投资预算和定位',
        '现场勘察，评估场地条件',
        '制定详细技术方案和预算清单',
        '方案确认，签署服务合同',
        '协助采购，监督施工',
        '系统部署，全面测试',
        '开业验收，交付使用'
      ]
    }
  },
  {
    title: '系统安全',
    desc: '深度定制防火墙及无盘系统，彻底防范ARP攻击、外挂破坏及病毒入侵。',
    icon: ShieldCheck,
    color: 'bg-green-50 text-green-600',
    details: {
      responseTime: '安全事件1小时内响应',
      services: [
        'ARP攻击防护系统部署',
        '防火墙规则定制与优化',
        '无盘系统安全加固',
        '病毒防护软件部署与更新',
        '外挂检测与拦截',
        '数据备份与恢复方案',
        '安全审计与日志分析'
      ],
      process: [
        '安全风险评估，识别潜在威胁',
        '制定安全防护方案',
        '部署防护系统与软件',
        '配置安全策略与规则',
        '定期安全扫描与更新',
        '应急响应与事件处理',
        '安全报告与改进建议'
      ]
    }
  }
]
</script>

<template>
  <section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-20 animate-on-scroll opacity-0 translate-y-10">
        <h2 class="text-lg font-semibold text-apple-blue mb-2">我们的专长</h2>
        <p class="text-4xl md:text-5xl font-semibold tracking-tight text-apple-dark">全面覆盖集中管理每一个环节</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div 
          v-for="service in services" 
          :key="service.title"
          class="animate-on-scroll opacity-0 translate-y-10 group p-8 rounded-[2.5rem] bg-apple-gray hover:bg-white hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500"
        >
          <div :class="['w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-500', service.color]">
            <component :is="service.icon" class="w-7 h-7" />
          </div>
          <h3 class="text-2xl font-semibold mb-4 text-apple-dark">{{ service.title }}</h3>
          <p class="text-lg text-gray-500 leading-relaxed mb-6">
            {{ service.desc }}
          </p>
          
          <!-- 响应时间 -->
          <div class="flex items-center mb-6 text-sm text-gray-600">
            <Clock class="w-4 h-4 mr-2 text-apple-blue" />
            <span class="font-medium">响应时间：{{ service.details.responseTime }}</span>
          </div>

          <!-- 服务内容 -->
          <div class="mb-6">
            <h4 class="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">服务内容</h4>
            <ul class="space-y-2">
              <li v-for="(item, idx) in service.details.services.slice(0, 3)" :key="idx" class="flex items-start text-sm text-gray-600">
                <CheckCircle2 class="w-4 h-4 mr-2 mt-0.5 text-apple-blue flex-shrink-0" />
                <span>{{ item }}</span>
              </li>
              <li class="text-sm text-apple-blue font-medium mt-2">+ 更多服务...</li>
            </ul>
          </div>

          <!-- 服务流程 -->
          <div class="pt-4 border-t border-gray-200">
            <h4 class="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">服务流程</h4>
            <div class="space-y-2">
              <div v-for="(step, idx) in service.details.process.slice(0, 3)" :key="idx" class="flex items-start text-sm text-gray-600">
                <span class="flex-shrink-0 w-5 h-5 rounded-full bg-apple-blue/10 text-apple-blue flex items-center justify-center text-xs font-semibold mr-2 mt-0.5">{{ idx + 1 }}</span>
                <span>{{ step }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

