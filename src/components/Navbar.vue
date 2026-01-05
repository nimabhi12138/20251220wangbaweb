<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X, Monitor } from 'lucide-vue-next'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const navLinks = [
  { name: '首页', href: '#' },
  { name: '核心服务', href: '#services' },
  { name: '配置方案', href: '#config' },
  { name: '关于我们', href: '#about' },
  { name: '联系我们', href: '#contact' }
]
</script>

<template>
  <nav 
    :class="[
      'fixed top-0 w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-cyber-dark/80 backdrop-blur-xl border-b border-white/10 py-2' : 'bg-transparent py-4'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-12">
        <!-- Logo -->
        <div class="flex items-center space-x-3 group cursor-pointer">
          <div class="w-10 h-10 bg-cyber-blue rounded-lg flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(0,242,255,0.6)] transition-all">
            <Monitor class="w-6 h-6 text-black" />
          </div>
          <div class="flex flex-col">
            <span class="text-xl font-black tracking-tighter text-white uppercase leading-none">ZhiWei</span>
            <span class="text-[10px] text-cyber-blue font-bold tracking-[0.3em] uppercase leading-none mt-1">Maintenance</span>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-10">
          <a 
            v-for="link in navLinks" 
            :key="link.name" 
            :href="link.href"
            class="text-xs font-bold text-gray-400 hover:text-cyber-blue tracking-widest uppercase transition-colors"
          >
            {{ link.name }}
          </a>
          <a 
            href="#contact" 
            class="px-6 py-2 bg-white/5 border border-white/10 rounded-lg text-xs font-black text-white hover:bg-cyber-blue hover:text-black transition-all"
          >
            START PROJECT
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button 
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="text-apple-text p-2"
          >
            <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
            <X v-else class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0"
    >
      <div v-if="isMobileMenuOpen" class="md:hidden bg-white border-b">
        <div class="px-4 pt-2 pb-6 space-y-1">
          <a 
            v-for="link in navLinks" 
            :key="link.name" 
            :href="link.href"
            class="block px-3 py-4 text-base font-medium text-apple-text border-b border-gray-100"
            @click="isMobileMenuOpen = false"
          >
            {{ link.name }}
          </a>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.glass {
  @apply backdrop-blur-xl bg-white/80 border-white/20;
}
</style>

