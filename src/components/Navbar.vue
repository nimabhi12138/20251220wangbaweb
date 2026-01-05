<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X, Monitor } from 'lucide-vue-next'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => { isScrolled.value = window.scrollY > 20 }
onMounted(() => { window.addEventListener('scroll', handleScroll) })
onUnmounted(() => { window.removeEventListener('scroll', handleScroll) })

const navLinks = [
  { name: '解决方案', href: '#solutions' },
  { name: '专业实力', href: '#professional' },
  { name: '实战案例', href: '#evidence' },
  { name: '联系我们', href: '#contact' }
]
</script>

<template>
  <nav 
    :class="[
      'fixed top-0 w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-white/80 backdrop-blur-xl border-b border-gray-100 py-2' : 'bg-transparent py-4'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-12">
        <div class="flex items-center space-x-3 group cursor-pointer">
          <div class="w-10 h-10 bg-[#0066cc] rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-all">
            <Monitor class="w-6 h-6 text-white" />
          </div>
          <div class="flex flex-col">
            <span class="text-xl font-bold tracking-tight text-[#1d1d1f] leading-none">智维网吧维护</span>
            <span class="text-[10px] text-[#0066cc] font-bold tracking-widest uppercase mt-1">Professional System</span>
          </div>
        </div>

        <div class="hidden md:flex items-center space-x-10">
          <a 
            v-for="link in navLinks" 
            :key="link.name" 
            :href="link.href"
            class="text-sm font-medium text-gray-500 hover:text-[#1d1d1f] transition-colors"
          >
            {{ link.name }}
          </a>
          <a 
            href="tel:+8615991141198" 
            class="px-6 py-2 bg-[#0066cc] text-white rounded-full text-sm font-bold hover:bg-[#0071e3] transition-all shadow-md shadow-blue-500/10"
          >
            咨询热线
          </a>
        </div>

        <div class="md:hidden">
          <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="text-[#1d1d1f] p-2">
            <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
            <X v-else class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0"
    >
      <div v-if="isMobileMenuOpen" class="md:hidden bg-white border-b border-gray-100 shadow-xl">
        <div class="px-4 pt-2 pb-6 space-y-1">
          <a 
            v-for="link in navLinks" 
            :key="link.name" 
            :href="link.href"
            class="block px-3 py-4 text-base font-medium text-[#1d1d1f] border-b border-gray-50"
            @click="isMobileMenuOpen = false"
          >
            {{ link.name }}
          </a>
        </div>
      </div>
    </Transition>
  </nav>
</template>
