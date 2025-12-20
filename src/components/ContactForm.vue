<script setup lang="ts">
import { Phone, Mail, MapPin, MessageSquare, Send } from 'lucide-vue-next'
import { ref } from 'vue'

const formData = ref({
  name: '',
  phone: '',
  cafeName: '',
  serviceType: '',
  message: ''
})

const serviceTypes = [
  '本地维护',
  '远程维护',
  '开业指导',
  '系统安全',
  '机器配置',
  '其他需求'
]

const errors = ref<Record<string, string>>({})
const isSubmitting = ref(false)
const submitSuccess = ref(false)

const validate = () => {
  errors.value = {}
  
  if (!formData.value.name.trim()) {
    errors.value.name = '请输入您的姓名'
  }
  
  if (!formData.value.phone.trim()) {
    errors.value.phone = '请输入联系电话'
  } else if (!/^1[3-9]\d{9}$/.test(formData.value.phone)) {
    errors.value.phone = '请输入正确的手机号码'
  }
  
  if (!formData.value.serviceType) {
    errors.value.serviceType = '请选择服务类型'
  }
  
  return Object.keys(errors.value).length === 0
}

const handleSubmit = async () => {
  if (!validate()) return
  
  isSubmitting.value = true
  
  // 模拟提交
  setTimeout(() => {
    isSubmitting.value = false
    submitSuccess.value = true
    
    // 3秒后重置表单
    setTimeout(() => {
      submitSuccess.value = false
      formData.value = {
        name: '',
        phone: '',
        cafeName: '',
        serviceType: '',
        message: ''
      }
    }, 3000)
  }, 1000)
}
</script>

<template>
  <section id="contact" class="py-24 bg-[#f5f5f7]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 animate-on-scroll opacity-0 translate-y-10">
        <h2 class="text-lg font-semibold text-apple-blue mb-2">联系我们</h2>
        <p class="text-4xl md:text-5xl font-semibold tracking-tight text-apple-dark mb-4">让我们开始合作吧</p>
        <p class="text-xl text-gray-500 max-w-2xl mx-auto">填写下方表单，我们的专业顾问会在 24 小时内与您联系。</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- 联系表单 -->
        <div class="animate-on-scroll opacity-0 translate-y-10 bg-white rounded-3xl p-8 shadow-sm">
          <h3 class="text-2xl font-semibold mb-6 text-apple-dark">在线咨询</h3>
          
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">姓名 <span class="text-red-500">*</span></label>
              <input 
                v-model="formData.name"
                type="text"
                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-apple-blue focus:border-transparent transition-all"
                placeholder="请输入您的姓名"
              />
              <p v-if="errors.name" class="mt-1 text-sm text-red-500">{{ errors.name }}</p>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">联系电话 <span class="text-red-500">*</span></label>
              <input 
                v-model="formData.phone"
                type="tel"
                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-apple-blue focus:border-transparent transition-all"
                placeholder="请输入手机号码"
              />
              <p v-if="errors.phone" class="mt-1 text-sm text-red-500">{{ errors.phone }}</p>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">机构名称</label>
              <input 
                v-model="formData.cafeName"
                type="text"
                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-apple-blue focus:border-transparent transition-all"
                placeholder="请输入机构/单位名称（选填）"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">服务类型 <span class="text-red-500">*</span></label>
              <select 
                v-model="formData.serviceType"
                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-apple-blue focus:border-transparent transition-all"
              >
                <option value="">请选择服务类型</option>
                <option v-for="type in serviceTypes" :key="type" :value="type">{{ type }}</option>
              </select>
              <p v-if="errors.serviceType" class="mt-1 text-sm text-red-500">{{ errors.serviceType }}</p>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">详细需求</label>
              <textarea 
                v-model="formData.message"
                rows="4"
                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-apple-blue focus:border-transparent transition-all resize-none"
                placeholder="请描述您的具体需求..."
              ></textarea>
            </div>

            <button 
              type="submit"
              :disabled="isSubmitting"
              class="w-full py-4 bg-apple-blue text-white rounded-xl font-semibold hover:bg-blue-600 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send v-if="!isSubmitting" class="w-5 h-5 mr-2" />
              <span v-if="!isSubmitting">提交咨询</span>
              <span v-else>提交中...</span>
            </button>

            <div 
              v-if="submitSuccess"
              class="p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-center"
            >
              提交成功！我们会在 24 小时内与您联系。
            </div>
          </form>
        </div>

        <!-- 联系方式 -->
        <div class="animate-on-scroll opacity-0 translate-y-10 space-y-8">
          <div class="bg-white rounded-3xl p-8 shadow-sm">
            <h3 class="text-2xl font-semibold mb-6 text-apple-dark">联系方式</h3>
            
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 rounded-xl bg-apple-blue/10 flex items-center justify-center flex-shrink-0">
                  <Phone class="w-6 h-6 text-apple-blue" />
                </div>
                <div>
                  <h4 class="font-semibold text-apple-dark mb-1">客服热线</h4>
                  <a href="tel:400-888-6666" class="text-apple-blue hover:underline">400-888-6666</a>
                  <p class="text-sm text-gray-500 mt-1">7x24 小时服务</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 rounded-xl bg-apple-blue/10 flex items-center justify-center flex-shrink-0">
                  <MessageSquare class="w-6 h-6 text-apple-blue" />
                </div>
                <div>
                  <h4 class="font-semibold text-apple-dark mb-1">在线咨询</h4>
                  <p class="text-gray-600">微信：zhiwei-tech</p>
                  <p class="text-gray-600">QQ：123456789</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 rounded-xl bg-apple-blue/10 flex items-center justify-center flex-shrink-0">
                  <Mail class="w-6 h-6 text-apple-blue" />
                </div>
                <div>
                  <h4 class="font-semibold text-apple-dark mb-1">邮箱地址</h4>
                  <a href="mailto:support@zhiwei.com" class="text-apple-blue hover:underline">support@zhiwei.com</a>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 rounded-xl bg-apple-blue/10 flex items-center justify-center flex-shrink-0">
                  <MapPin class="w-6 h-6 text-apple-blue" />
                </div>
                <div>
                  <h4 class="font-semibold text-apple-dark mb-1">公司地址</h4>
                  <p class="text-gray-600">深圳市南山区科技园南区技术产业园 101 室</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-apple-blue/5 to-blue-50 rounded-3xl p-8">
            <h4 class="font-semibold text-apple-dark mb-4">工作时间</h4>
            <div class="space-y-2 text-gray-600">
              <p>周一至周日：24 小时服务</p>
              <p>节假日：正常服务</p>
              <p class="text-sm text-gray-500 mt-4">我们承诺，无论何时，您的技术问题都能得到及时响应。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

