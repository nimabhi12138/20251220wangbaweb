<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Hero from './views/Hero.vue'
import Scenarios from './views/Scenarios.vue'
import Services from './views/Services.vue'
import Workflow from './views/Workflow.vue'
import Advantages from './views/Advantages.vue'
import ConfigSection from './views/ConfigSection.vue'
import CaseStudies from './views/CaseStudies.vue'
import Testimonials from './views/Testimonials.vue'
import FAQ from './views/FAQ.vue'
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
            entry.target.classList.remove('opacity-0', 'translate-y-10')
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
        el.classList.remove('opacity-0', 'translate-y-10')
      }
      observer.observe(el)
    })
  })
})
</script>

<template>
  <div class="min-h-screen font-sans bg-[#fbfbfd] text-[#1d1d1f] selection:bg-[#0066cc] selection:text-white overflow-x-hidden">
    <Navbar />
    
    <main class="snap-y snap-mandatory h-screen overflow-y-auto scroll-smooth">
      <!-- Screen 1: Hero -->
      <section class="snap-start min-h-screen flex items-center justify-center relative px-6 overflow-hidden bg-white">
        <Hero />
        <div class="absolute inset-0 bg-gradient-to-b from-blue-50/20 to-transparent pointer-events-none"></div>
      </section>
      
      <!-- Screen 2: Scenarios & Services (Solutions) -->
      <section id="solutions" class="snap-start min-h-screen py-24 flex flex-col justify-center bg-[#f5f5f7] px-6 overflow-y-auto">
        <div class="max-w-7xl mx-auto w-full">
          <div class="text-center mb-16 animate-on-scroll opacity-0 translate-y-10">
            <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[#1d1d1f]">
              全场景智慧运维解决方案
            </h2>
            <p class="text-gray-500 text-lg max-w-2xl mx-auto">十五年深耕，为您的商业空间构建最坚实的技术底座</p>
          </div>
          <div class="space-y-24">
            <Scenarios />
            <Services />
          </div>
        </div>
      </section>

      <!-- Screen 3: Workflow & Advantages (Professionalism) -->
      <section id="professional" class="snap-start min-h-screen py-24 flex flex-col justify-center bg-white px-6 overflow-y-auto">
        <div class="max-w-7xl mx-auto w-full">
          <div class="text-center mb-16 animate-on-scroll opacity-0 translate-y-10">
            <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[#1d1d1f]">
              专业流程与核心优势
            </h2>
            <p class="text-gray-500 text-lg max-w-2xl mx-auto">标准化的服务闭环，确保每一个环节都精准高效</p>
          </div>
          <div class="space-y-24">
            <Workflow />
            <Advantages />
          </div>
        </div>
      </section>

      <!-- Screen 4: Configuration & Case Studies (Evidence) -->
      <section id="evidence" class="snap-start min-h-screen py-24 flex flex-col justify-center bg-[#f5f5f7] px-6 overflow-y-auto">
        <div class="max-w-7xl mx-auto w-full">
          <div class="text-center mb-16 animate-on-scroll opacity-0 translate-y-10">
            <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[#1d1d1f]">
              配置方案与实战案例
            </h2>
            <p class="text-gray-500 text-lg max-w-2xl mx-auto">因地制宜的硬件规划，经得起考验的实战积累</p>
          </div>
          <div class="space-y-24">
            <ConfigSection />
            <CaseStudies />
          </div>
        </div>
      </section>

      <!-- Screen 5: Trust & Action (Connect) -->
      <section id="contact" class="snap-start min-h-screen py-24 flex flex-col justify-center bg-white relative px-6 overflow-y-auto">
        <div class="max-w-7xl mx-auto w-full">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div class="space-y-12 animate-on-scroll opacity-0 translate-y-10">
              <Testimonials />
              <FAQ />
              <Guarantee />
            </div>
            <div class="lg:sticky lg:top-24 animate-on-scroll opacity-0 translate-y-10">
              <ContactForm />
            </div>
          </div>
        </div>
        <Footer class="mt-24 border-t border-gray-100 pt-12" />
      </section>
    </main>
  </div>
</template>

<style>
.animate-on-scroll {
  @apply transition-all duration-[1000ms] ease-out;
  will-change: opacity, transform;
}

.animate-on-scroll.opacity-0 {
  opacity: 0 !important;
}

.animate-on-scroll.translate-y-10 {
  transform: translateY(2.5rem) !important;
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
  @apply bg-[#fbfbfd] text-[#1d1d1f];
  -webkit-font-smoothing: antialiased;
}

/* 自定义滚动条 */
main::-webkit-scrollbar {
  width: 6px;
}
main::-webkit-scrollbar-track {
  background: transparent;
}
main::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
</style>
