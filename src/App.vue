<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Hero from './views/Hero.vue'
import Scenarios from './views/Scenarios.vue'
import Advantages from './views/Advantages.vue'
import CaseStudies from './views/CaseStudies.vue'
import Guarantee from './views/Guarantee.vue'
import ContactForm from './components/ContactForm.vue'
import Footer from './components/Footer.vue'
import { onMounted, nextTick } from 'vue'

onMounted(() => {
  nextTick(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            entry.target.classList.remove('opacity-0', 'translate-y-6')
          })
        }
      })
    }, { 
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px' 
    })

    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight) {
        el.classList.add('opacity-100', 'translate-y-0')
        el.classList.remove('opacity-0', 'translate-y-6')
      }
      observer.observe(el)
    })
  })
})
</script>

<template>
  <div class="min-h-screen font-sans bg-cyber-dark text-white selection:bg-cyber-blue selection:text-black overflow-x-hidden">
    <Navbar />
    
    <main class="snap-y snap-mandatory h-screen overflow-y-auto scroll-smooth">
      <!-- 第一屏：核心价值与英雄位 -->
      <section class="snap-start min-h-screen flex flex-col items-center justify-center relative px-6 overflow-hidden">
        <Hero />
        <!-- 装饰性背景 -->
        <div class="absolute -top-24 -left-24 w-96 h-96 bg-cyber-blue/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-cyber-purple/10 rounded-full blur-[120px] pointer-events-none"></div>
      </section>
      
      <!-- 第二屏：解决方案与业务场景 (高度压缩) -->
      <section id="solutions" class="snap-start min-h-screen py-20 flex flex-col justify-center bg-gradient-to-b from-cyber-dark to-[#0a0a0c] px-6">
        <div class="max-w-7xl mx-auto w-full">
          <div class="text-center mb-12 animate-on-scroll opacity-0 translate-y-6">
            <h2 class="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent uppercase italic">
              Omni-Scenario Solutions
            </h2>
            <p class="text-gray-400 text-lg">十五年深耕，为您的商业空间构建最坚实的技术底座</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <Scenarios class="compact-view" />
            <Advantages class="compact-view" />
          </div>
        </div>
      </section>

      <!-- 第三屏：信任、案例与联系 (高度压缩) -->
      <section id="contact" class="snap-start min-h-screen py-20 flex flex-col justify-center bg-cyber-dark relative px-6">
        <div class="max-w-7xl mx-auto w-full">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div class="space-y-8">
              <CaseStudies class="compact-view" />
              <div class="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <Guarantee class="compact-view" />
              </div>
            </div>
            <div class="lg:sticky lg:top-24">
              <ContactForm class="compact-view" />
            </div>
          </div>
        </div>
        
        <Footer class="mt-12" />
        
        <!-- 底部背景装饰 -->
        <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-cyber-blue/5 to-transparent pointer-events-none"></div>
      </section>
    </main>
  </div>
</template>

<style>
/* 针对压缩视图的全局微调 */
.compact-view :deep(section) {
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
  background: transparent !important;
}

.compact-view :deep(h2) {
  font-size: 1.5rem !important;
  margin-bottom: 1.5rem !important;
  text-align: left !important;
}

.animate-on-scroll {
  @apply transition-all duration-[1200ms] ease-out;
  will-change: opacity, transform;
}

.animate-on-scroll.opacity-0 {
  opacity: 0 !important;
}

.animate-on-scroll.translate-y-6 {
  transform: translateY(1.5rem) !important;
}

.animate-on-scroll.opacity-100 {
  opacity: 1 !important;
}

.animate-on-scroll.translate-y-0 {
  transform: translateY(0) !important;
}

html {
  scroll-behavior: smooth;
}

body {
  @apply bg-cyber-dark text-white;
  -webkit-font-smoothing: antialiased;
}
</style>
