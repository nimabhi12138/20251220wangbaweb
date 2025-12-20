<script setup lang="ts">
import { Building2, Hotel, Store, Waves, GraduationCap, Briefcase } from 'lucide-vue-next'

const cases = [
  {
    type: '大型网咖',
    icon: Building2,
    client: '深圳极速电竞网咖',
    scale: '200 台机器',
    challenge: '开业初期系统不稳定，频繁蓝屏，网络延迟高，严重影响用户体验。',
    solution: '我们部署了万兆无盘系统，优化了网络架构，安装了专业的安全防护系统，并提供了 7x24 小时远程监控。',
    result: '系统稳定性提升至 99.5%，网络延迟降低 80%，客户满意度大幅提升，营业额增长 30%。',
    feedback: '智维团队非常专业，问题解决速度快，服务态度好。现在系统运行非常稳定，我们再也不用担心技术问题了。',
    metrics: {
      stability: '99.5%',
      delay: '降低 80%',
      satisfaction: '95%'
    }
  },
  {
    type: '电竞酒店',
    icon: Hotel,
    client: '广州星耀电竞主题酒店',
    scale: '150 间客房',
    challenge: '需要为每间客房提供高性能游戏电脑，同时要求系统统一管理，便于维护和更新。',
    solution: '我们设计了集中式无盘系统，所有客房电脑统一管理，支持远程更新游戏和系统，并配置了专业级电竞硬件。',
    result: '实现了统一管理，维护效率提升 5 倍，游戏更新速度提升 10 倍，客户好评率 98%。',
    feedback: '智维的方案非常完美，不仅解决了我们的管理难题，还大大提升了客户体验。现在我们的酒店在本地非常受欢迎。',
    metrics: {
      efficiency: '提升 5 倍',
      update: '提升 10 倍',
      rating: '98%'
    }
  },
  {
    type: '连锁网吧',
    icon: Store,
    client: '东莞网联连锁网吧（5 家分店）',
    scale: '5 家分店，共 500 台',
    challenge: '多家分店分散在不同区域，需要统一的技术支持和系统管理，降低维护成本。',
    solution: '我们建立了集中式远程管理平台，所有分店统一部署系统，实现远程监控和维护，并建立了快速响应机制。',
    result: '维护成本降低 40%，故障响应时间缩短 60%，系统统一性达到 100%，客户满意度 96%。',
    feedback: '智维的集中管理方案太棒了！现在我们可以统一管理所有分店，维护成本大幅降低，而且系统运行非常稳定。',
    metrics: {
      cost: '降低 40%',
      response: '缩短 60%',
      satisfaction: '96%'
    }
  },
  {
    type: '洗浴中心',
    icon: Waves,
    client: '佛山温泉洗浴中心',
    scale: '80 台休闲电脑',
    challenge: '休闲区电脑经常出现故障，影响客户体验，需要统一管理和快速维护。',
    solution: '我们部署了无盘集中管理系统，实现了远程监控和维护，并建立了快速响应机制，确保设备正常运行。',
    result: '设备故障率降低 70%，维护响应时间缩短至 30 分钟，客户满意度提升至 92%，营业额增长 15%。',
    feedback: '智维的集中管理方案解决了我们的大问题，现在设备运行非常稳定，客户体验也大大提升了。',
    metrics: {
      failure: '降低 70%',
      response: '30 分钟',
      satisfaction: '92%'
    }
  },
  {
    type: '学校机房',
    icon: GraduationCap,
    client: '深圳某职业院校',
    scale: '6 间机房，共 300 台',
    challenge: '教学电脑需要统一管理，软件更新频繁，学生操作导致系统问题多，维护工作量大。',
    solution: '我们部署了教学电脑集中管理系统，实现了统一镜像管理、远程软件部署和系统还原功能，大幅降低维护工作量。',
    result: '维护工作量减少 60%，软件部署效率提升 8 倍，系统稳定性达到 98%，教学效率大幅提升。',
    feedback: '智维的系统管理方案非常适合学校场景，现在我们的机房管理变得非常轻松，教学效率也提高了。',
    metrics: {
      workload: '减少 60%',
      efficiency: '提升 8 倍',
      stability: '98%'
    }
  },
  {
    type: '企业办公',
    icon: Briefcase,
    client: '广州某科技公司',
    scale: '150 台办公电脑',
    challenge: '办公电脑分散管理，软件安装不统一，安全防护不足，IT 维护成本高。',
    solution: '我们设计了企业级集中管理系统，统一软件部署、安全策略配置和数据备份方案，建立了完善的 IT 管理体系。',
    result: 'IT 维护成本降低 50%，软件部署效率提升 10 倍，安全事件减少 90%，员工满意度 94%。',
    feedback: '智维的企业管理方案非常专业，不仅降低了我们的 IT 成本，还大大提升了办公效率和安全性。',
    metrics: {
      cost: '降低 50%',
      efficiency: '提升 10 倍',
      security: '提升 90%'
    }
  }
]
</script>

<template>
  <section class="max-w-7xl mx-auto px-6 lg:px-8">
    <div class="text-center mb-32 animate-on-scroll opacity-0 translate-y-6">
      <h2 class="text-lg font-semibold text-apple-blue mb-4 tracking-widest uppercase">成功案例</h2>
      <p class="text-5xl md:text-6xl font-semibold tracking-tight text-apple-dark mb-8">真实案例，见证专业</p>
      <p class="text-xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">以下是我们服务过的部分客户案例，每一个案例都是我们专业能力的体现。</p>
    </div>

    <div class="space-y-16">
      <div 
        v-for="(caseItem, index) in cases" 
        :key="index"
        class="animate-on-scroll opacity-0 translate-y-6 bg-white rounded-[3rem] p-12 md:p-16 shadow-[0_30px_60px_rgba(0,0,0,0.04)] border border-gray-50 hover:shadow-[0_50px_100px_rgba(0,0,0,0.06)] transition-all duration-700"
      >
        <div class="flex items-start space-x-8 mb-12">
          <div class="w-20 h-20 rounded-2xl bg-apple-blue/5 flex items-center justify-center flex-shrink-0">
            <component :is="caseItem.icon" class="w-10 h-10 text-apple-blue" />
          </div>
          <div>
            <div class="text-sm text-apple-blue font-semibold mb-2 uppercase tracking-widest">{{ caseItem.type }}</div>
            <h3 class="text-3xl font-semibold text-apple-dark mb-2 tracking-tight">{{ caseItem.client }}</h3>
            <p class="text-gray-400 font-light">{{ caseItem.scale }}</p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h4 class="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">面临的挑战</h4>
            <p class="text-gray-500 leading-relaxed font-light text-lg">{{ caseItem.challenge }}</p>
          </div>
          <div>
            <h4 class="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">解决方案</h4>
            <p class="text-gray-500 leading-relaxed font-light text-lg">{{ caseItem.solution }}</p>
          </div>
        </div>

        <div class="bg-[#f5f5f7] rounded-[2rem] p-10 mb-12">
          <h4 class="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-6">实施效果</h4>
          <p class="text-gray-600 leading-relaxed font-light text-lg mb-8">{{ caseItem.result }}</p>
          <div class="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
            <div v-for="(value, key) in caseItem.metrics" :key="key" class="text-center">
              <div class="text-3xl font-bold text-apple-blue mb-2 tracking-tighter">{{ value }}</div>
              <div class="text-xs text-gray-400 uppercase tracking-widest font-semibold">{{ key }}</div>
            </div>
          </div>
        </div>

        <div class="border-l-4 border-apple-blue pl-8">
          <p class="text-xl text-gray-600 italic leading-relaxed font-light mb-4">"{{ caseItem.feedback }}"</p>
          <p class="text-sm text-gray-400 font-light">— {{ caseItem.client }} 负责人</p>
        </div>
      </div>
    </div>
  </section>
</template>

