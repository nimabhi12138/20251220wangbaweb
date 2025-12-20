<script setup lang="ts">
import { Phone, Mail } from 'lucide-vue-next'
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
  <section id="contact" class="max-w-7xl mx-auto px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <!-- 文字导引 -->
      <div class="animate-on-scroll opacity-0 translate-y-6">
        <h2 class="text-lg font-semibold text-apple-blue mb-6 tracking-widest uppercase">联系我们</h2>
        <p class="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-10 leading-[1.1]">
          准备好升级<br/>您的运维吗？
        </p>
        <p class="text-xl text-gray-400 font-light leading-relaxed mb-16 max-w-lg">
          填写右侧表单，我们的资深技术专家将在 24 小时内为您制定专属的技术演进方案。
        </p>
        
        <div class="space-y-10">
          <div class="flex items-center space-x-6 group">
            <div class="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-apple-blue transition-all duration-500">
              <Phone class="w-6 h-6 text-white" />
            </div>
            <div>
              <p class="text-xs text-gray-500 uppercase tracking-widest mb-1">专属热线</p>
              <p class="text-xl text-white font-medium">400-888-6666</p>
            </div>
          </div>
          <div class="flex items-center space-x-6 group">
            <div class="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-apple-blue transition-all duration-500">
              <Mail class="w-6 h-6 text-white" />
            </div>
            <div>
              <p class="text-xs text-gray-500 uppercase tracking-widest mb-1">官方邮箱</p>
              <p class="text-xl text-white font-medium">support@zhiwei.com</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 联系表单 -->
      <div class="animate-on-scroll opacity-0 translate-y-6 bg-white rounded-[3rem] p-12 md:p-16 shadow-2xl">
        <form @submit.prevent="handleSubmit" class="space-y-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="space-y-2">
              <label class="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">您的姓名</label>
              <input 
                v-model="formData.name"
                type="text"
                class="w-full px-6 py-4 bg-[#f5f5f7] border-transparent rounded-2xl focus:bg-white focus:ring-2 focus:ring-apple-blue outline-none transition-all"
                placeholder="张先生 / 李女士"
              />
            </div>
            <div class="space-y-2">
              <label class="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">联系电话</label>
              <input 
                v-model="formData.phone"
                type="tel"
                class="w-full px-6 py-4 bg-[#f5f5f7] border-transparent rounded-2xl focus:bg-white focus:ring-2 focus:ring-apple-blue outline-none transition-all"
                placeholder="138 **** ****"
              />
            </div>
          </div>

          <div class="space-y-2">
            <label class="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">服务场景</label>
            <select 
              v-model="formData.serviceType"
              class="w-full px-6 py-4 bg-[#f5f5f7] border-transparent rounded-2xl focus:bg-white focus:ring-2 focus:ring-apple-blue outline-none transition-all appearance-none"
            >
              <option value="">请选择应用场景</option>
              <option v-for="type in serviceTypes" :key="type" :value="type">{{ type }}</option>
            </select>
          </div>

          <div class="space-y-2">
            <label class="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">详细需求</label>
            <textarea 
              v-model="formData.message"
              rows="4"
              class="w-full px-6 py-4 bg-[#f5f5f7] border-transparent rounded-2xl focus:bg-white focus:ring-2 focus:ring-apple-blue outline-none transition-all resize-none"
              placeholder="请简单描述您的设备规模或当前痛点..."
            ></textarea>
          </div>

          <button 
            type="submit"
            :disabled="isSubmitting"
            class="w-full py-6 bg-apple-blue text-white rounded-2xl font-bold text-lg hover:bg-blue-600 shadow-xl shadow-apple-blue/20 transition-all duration-500 disabled:opacity-50"
          >
            <span v-if="!isSubmitting">发送咨询请求</span>
            <span v-else>正在传输...</span>
          </button>

          <p v-if="submitSuccess" class="text-center text-green-500 font-medium animate-pulse">
            感谢您的信任，我们已收到您的请求。
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

