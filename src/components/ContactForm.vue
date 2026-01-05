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
  <div class="animate-on-scroll opacity-0 translate-y-6 bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl">
    <div class="mb-8">
      <h2 class="text-3xl font-black text-white mb-2 italic tracking-tighter uppercase">Get In Touch</h2>
      <p class="text-gray-500 text-sm">立即开启您的智慧运维之旅</p>
    </div>
    
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="space-y-1">
          <input 
            v-model="formData.name"
            type="text"
            class="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue outline-none text-white transition-all text-sm"
            placeholder="您的姓名"
          />
        </div>
        <div class="space-y-1">
          <input 
            v-model="formData.phone"
            type="tel"
            class="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue outline-none text-white transition-all text-sm"
            placeholder="联系电话"
          />
        </div>
      </div>

      <div class="space-y-1">
        <select 
          v-model="formData.serviceType"
          class="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue outline-none text-white/50 transition-all appearance-none text-sm"
        >
          <option value="" class="bg-cyber-dark text-white">请选择服务场景</option>
          <option v-for="type in serviceTypes" :key="type" :value="type" class="bg-cyber-dark text-white">{{ type }}</option>
        </select>
      </div>

      <div class="space-y-1">
        <textarea 
          v-model="formData.message"
          rows="3"
          class="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue outline-none text-white transition-all resize-none text-sm"
          placeholder="简单描述您的需求..."
        ></textarea>
      </div>

      <button 
        type="submit"
        :disabled="isSubmitting"
        class="w-full py-4 bg-cyber-blue text-black rounded-xl font-black text-sm hover:bg-white hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] transition-all duration-500 disabled:opacity-50 uppercase tracking-widest"
      >
        <span v-if="!isSubmitting">发送请求 / SEND REQUEST</span>
        <span v-else>TRANSMITTING...</span>
      </button>

      <div class="flex items-center justify-center gap-6 pt-4 border-t border-white/5">
        <a href="tel:4008886666" class="flex items-center gap-2 text-xs text-gray-400 hover:text-cyber-blue transition-colors">
          <Phone class="w-3 h-3" /> 400-888-6666
        </a>
        <a href="mailto:support@zhiwei.com" class="flex items-center gap-2 text-xs text-gray-400 hover:text-cyber-blue transition-colors">
          <Mail class="w-3 h-3" /> support@zhiwei.com
        </a>
      </div>

      <p v-if="submitSuccess" class="text-center text-cyber-blue text-xs font-bold animate-pulse">
        传输成功！我们将尽快与您取得联系。
      </p>
    </form>
  </div>
</template>

