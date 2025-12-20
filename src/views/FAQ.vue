<script setup lang="ts">
import { ChevronDown, ChevronUp } from 'lucide-vue-next'
import { ref } from 'vue'

const faqCategories = [
  {
    category: '服务相关',
    questions: [
      {
        q: '你们的服务响应时间是多长？',
        a: '远程维护：5 分钟内响应，15 分钟内开始处理。本地维护：2 小时内响应，4 小时内到达现场。紧急故障：1 小时内响应，2 小时内到达现场。'
      },
      {
        q: '服务范围包括哪些？',
        a: '我们提供本地维护、远程维护、开业指导、系统安全等全方位服务。具体包括：硬件故障处理、网络布线、无盘系统部署、游戏更新、系统优化、安全防护、数据备份等。'
      },
      {
        q: '是否提供 7x24 小时服务？',
        a: '是的，我们提供 7x24 小时全天候技术支持服务。无论何时遇到问题，都可以通过电话、微信、QQ 等方式联系我们，我们会第一时间响应。'
      },
      {
        q: '服务覆盖哪些区域？',
        a: '目前我们的服务覆盖全国主要城市。本地维护服务主要覆盖广东省及周边地区（深圳、广州、东莞、佛山、惠州等），远程维护服务覆盖全国。具体可咨询我们的客服人员。'
      }
    ]
  },
  {
    category: '技术相关',
    questions: [
      {
        q: '你们支持哪些无盘系统？',
        a: '我们支持市面上主流的无盘系统，包括：网维大师、云更新、易乐游、锐起等。我们会根据您的实际需求和预算，推荐最适合的系统方案。'
      },
      {
        q: '万兆网络部署需要多长时间？',
        a: '万兆网络部署时间根据规模而定：小型场景（50-100 台）约 3-5 个工作日；中型场景（100-200 台）约 5-7 个工作日；大型场景（200+ 台）约 7-10 个工作日。'
      },
      {
        q: '系统稳定性如何保障？',
        a: '我们通过多重保障确保系统稳定：1) 专业的硬件选型和配置；2) 优化的系统架构设计；3) 完善的安全防护体系；4) 7x24 小时监控和维护；5) 定期巡检和优化。'
      },
      {
        q: '如何防范 ARP 攻击和病毒？',
        a: '我们采用多层防护策略：1) 部署专业的 ARP 防护系统；2) 安装企业级杀毒软件并实时更新；3) 配置防火墙规则；4) 定期安全扫描；5) 数据备份和恢复方案。'
      }
    ]
  },
  {
    category: '价格相关',
    questions: [
      {
        q: '收费标准是怎样的？',
        a: '我们的收费标准根据服务类型和规模而定：1) 本地维护：按次收费或包年服务；2) 远程维护：按月/年收费；3) 开业指导：按项目收费；4) 系统安全：按年收费。具体价格可咨询我们的销售团队，我们会根据您的需求提供详细报价。'
      },
      {
        q: '是否有优惠活动？',
        a: '我们为新客户提供首次服务优惠，长期合作客户享受折扣优惠。同时，我们还会定期推出促销活动，具体优惠信息可关注我们的官方渠道或咨询客服。'
      },
      {
        q: '设备采购是否有优惠？',
        a: '是的，我们与多家硬件厂商建立了合作关系，可以为客户提供优惠的设备采购价格。我们会根据您的预算和需求，推荐性价比最高的设备方案。'
      }
    ]
  },
  {
    category: '流程相关',
    questions: [
      {
        q: '从咨询到落地需要多长时间？',
        a: '整个流程通常需要 2-4 周：需求分析 1-2 天，方案制定 2-3 天，合同签署 1 天，实施部署 5-10 天，验收测试 1-2 天。具体时间根据项目规模和复杂度而定。'
      },
      {
        q: '需要提供哪些资料？',
        a: '我们需要了解：1) 业务规模（机器数量）；2) 投资预算；3) 场景类型（网吧/电竞酒店/洗浴中心/学校/企业等）；4) 场地情况；5) 现有设备情况（如有）。我们会根据这些信息制定详细方案。'
      },
      {
        q: '如何开始合作？',
        a: '您可以通过以下方式联系我们：1) 拨打客服电话；2) 在线填写咨询表单；3) 添加微信/QQ 咨询；4) 发送邮件。我们会安排专业顾问与您沟通，了解需求后提供初步方案。'
      }
    ]
  }
]

const openCategory = ref<string | null>(null)
const openQuestion = ref<number | null>(null)

const toggleCategory = (category: string) => {
  openCategory.value = openCategory.value === category ? null : category
}

const toggleQuestion = (index: number) => {
  openQuestion.value = openQuestion.value === index ? null : index
}
</script>

<template>
  <section class="py-24 bg-[#f5f5f7]">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 animate-on-scroll opacity-0 translate-y-10">
        <h2 class="text-lg font-semibold text-apple-blue mb-2">常见问题</h2>
        <p class="text-4xl md:text-5xl font-semibold tracking-tight text-apple-dark mb-4">您想了解的都在这里</p>
        <p class="text-xl text-gray-500">如果还有疑问，欢迎随时联系我们。</p>
      </div>

      <div class="space-y-4">
        <div 
          v-for="(category, catIndex) in faqCategories" 
          :key="catIndex"
          class="animate-on-scroll opacity-0 translate-y-10 bg-white rounded-2xl overflow-hidden border border-gray-100"
        >
          <button 
            @click="toggleCategory(category.category)"
            class="w-full px-6 py-4 flex items-center justify-between hover:bg-apple-gray transition-colors"
          >
            <h3 class="text-lg font-semibold text-apple-dark">{{ category.category }}</h3>
            <ChevronDown 
              v-if="openCategory !== category.category"
              class="w-5 h-5 text-gray-400"
            />
            <ChevronUp 
              v-else
              class="w-5 h-5 text-gray-400"
            />
          </button>

          <div 
            v-show="openCategory === category.category"
            class="px-6 pb-4 space-y-2"
          >
            <div 
              v-for="(item, qIndex) in category.questions" 
              :key="qIndex"
              class="border-b border-gray-100 last:border-0 pb-4 last:pb-0"
            >
              <button 
                @click="toggleQuestion(catIndex * 100 + qIndex)"
                class="w-full text-left flex items-start justify-between"
              >
                <span class="font-medium text-apple-dark pr-4">{{ item.q }}</span>
                <ChevronDown 
                  v-if="openQuestion !== catIndex * 100 + qIndex"
                  class="w-5 h-5 text-gray-400 flex-shrink-0"
                />
                <ChevronUp 
                  v-else
                  class="w-5 h-5 text-gray-400 flex-shrink-0"
                />
              </button>
              <p 
                v-show="openQuestion === catIndex * 100 + qIndex"
                class="mt-3 text-gray-600 leading-relaxed"
              >
                {{ item.a }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

