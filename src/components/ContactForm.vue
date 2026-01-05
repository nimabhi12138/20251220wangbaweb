<script setup lang="ts">
import { Phone, Mail } from 'lucide-vue-next'
import { ref } from 'vue'

const formData = ref({
  name: '',
  phone: '',
  serviceType: '',
  message: ''
})

const serviceTypes = ['网吧维护', '电竞酒店', '无盘系统', '网络布线', '开业指导', '其他需求']
const isSubmitting = ref(false)
const submitSuccess = ref(false)

const handleSubmit = async () => {
  if (!formData.value.name || !formData.value.phone) return
  isSubmitting.value = true
  
  try {
    const response = await fetch('http://localhost:3001/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData.value),
    });

    const result = await response.json();

    if (result.success) {
      submitSuccess.value = true
      setTimeout(() => {
        submitSuccess.value = false
        formData.value = { name: '', phone: '', serviceType: '', message: '' }
      }, 3000)
    } else {
      alert('发送失败: ' + result.message);
    }
  } catch (error) {
    console.error('发送请求失败:', error);
    alert('发送咨询请求失败，请稍后重试。');
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-2xl relative overflow-hidden">
    <div class="mb-10">
      <h2 class="text-3xl font-bold text-[#1d1d1f] mb-3 tracking-tight">立即开启合作</h2>
      <p class="text-gray-500 font-light">填写以下信息，我们的技术专家将在 24 小时内为您提供方案。</p>
    </div>
    
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="space-y-2">
          <label class="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">您的姓名</label>
          <input 
            v-model="formData.name"
            type="text"
            class="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-[#0066cc] focus:ring-4 focus:ring-blue-100 outline-none transition-all text-sm"
            placeholder="张先生 / 李女士"
          />
        </div>
        <div class="space-y-2">
          <label class="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">联系电话</label>
          <input 
            v-model="formData.phone"
            type="tel"
            class="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-[#0066cc] focus:ring-4 focus:ring-blue-100 outline-none transition-all text-sm"
            placeholder="138 **** ****"
          />
        </div>
      </div>

      <div class="space-y-2">
        <label class="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">意向场景</label>
        <select 
          v-model="formData.serviceType"
          class="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-[#0066cc] focus:ring-4 focus:ring-blue-100 outline-none transition-all appearance-none text-sm text-gray-600"
        >
          <option value="">请选择应用场景</option>
          <option v-for="type in serviceTypes" :key="type" :value="type">{{ type }}</option>
        </select>
      </div>

      <div class="space-y-2">
        <label class="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">详细需求 (可选)</label>
        <textarea 
          v-model="formData.message"
          rows="4"
          class="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-[#0066cc] focus:ring-4 focus:ring-blue-100 outline-none transition-all resize-none text-sm"
          placeholder="简单描述您的当前规模或痛点..."
        ></textarea>
      </div>

      <button 
        type="submit"
        :disabled="isSubmitting"
        class="w-full py-5 bg-[#0066cc] text-white rounded-2xl font-bold text-lg hover:bg-[#0071e3] shadow-xl shadow-blue-500/20 transition-all duration-500 disabled:opacity-50 active:scale-95"
      >
        <span v-if="!isSubmitting">发送咨询请求</span>
        <span v-else>正在传输...</span>
      </button>

      <div class="flex items-center justify-center gap-8 pt-8 border-t border-gray-100">
        <a href="tel:4008886666" class="flex items-center gap-2 text-sm text-gray-400 hover:text-[#0066cc] transition-colors font-medium">
          <Phone class="w-4 h-4" /> 400-888-6666
        </a>
        <a href="mailto:support@zhiwei.com" class="flex items-center gap-2 text-sm text-gray-400 hover:text-[#0066cc] transition-colors font-medium">
          <Mail class="w-4 h-4" /> support@zhiwei.com
        </a>
      </div>

      <p v-if="submitSuccess" class="text-center text-[#0066cc] font-bold animate-pulse text-sm">
        感谢您的信任！我们的专家将尽快为您回复。
      </p>
    </form>
  </div>
</template>
