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
  <div class="min-h-screen font-sans bg-white selection:bg-apple-blue selection:text-white">
    <Navbar />
    
    <main>
      <!-- 第一区块：核心价值与品牌 -->
      <section class="mb-20">
        <Hero />
      </section>
      
      <section id="about" class="py-32 md:py-48 bg-white overflow-hidden">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="flex flex-col md:flex-row items-center gap-16 md:gap-24 mb-32">
            <div class="flex-1 animate-on-scroll opacity-0 translate-y-6">
              <h2 class="text-5xl md:text-6xl font-semibold tracking-tight text-apple-dark mb-10 leading-[1.1]">
                十五年深耕，<br/>定义极致稳定。
              </h2>
              <p class="text-xl md:text-2xl text-gray-500 mb-10 leading-relaxed font-light">
                智维成立于 2010 年，由资深网络工程师团队创立。我们不仅提供维护，更是在为您的商业空间构建最坚实的技术底座。
              </p>
              <div class="grid grid-cols-2 gap-12 border-t border-gray-100 pt-10">
                <div>
                  <p class="text-4xl font-bold text-apple-blue mb-2">500+</p>
                  <p class="text-sm text-gray-400 uppercase tracking-widest font-medium">深度合作机构</p>
                </div>
                <div>
                  <p class="text-4xl font-bold text-apple-blue mb-2">24/7</p>
                  <p class="text-sm text-gray-400 uppercase tracking-widest font-medium">技术响应支持</p>
                </div>
              </div>
            </div>
            <div class="flex-1 animate-on-scroll opacity-0 translate-y-6">
              <div class="aspect-square bg-[#f5f5f7] rounded-[3rem] flex items-center justify-center p-12">
                 <div class="w-full h-full bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-10 transform -rotate-2 hover:rotate-0 transition-all duration-700">
                    <div class="space-y-6">
                      <div class="h-3 w-1/3 bg-gray-50 rounded-full"></div>
                      <div class="h-3 w-full bg-gray-50 rounded-full"></div>
                      <div class="h-3 w-2/3 bg-gray-50 rounded-full"></div>
                      <div class="h-40 w-full bg-apple-blue/5 rounded-2xl flex items-center justify-center">
                         <div class="text-apple-blue font-bold tracking-[0.2em] text-xl">ZHIWEI TECH</div>
                      </div>
                      <div class="h-3 w-full bg-gray-50 rounded-full"></div>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          <!-- 极简历程 -->
          <div class="animate-on-scroll opacity-0 translate-y-6 border-t border-gray-100 pt-32">
            <h3 class="text-4xl font-semibold text-center mb-20 text-apple-dark tracking-tight">我们的足迹</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-16">
              <div class="group">
                <div class="text-sm text-apple-blue font-semibold mb-4 tracking-widest uppercase">Phase 01</div>
                <h4 class="text-2xl font-semibold mb-4 text-apple-dark">起步</h4>
                <p class="text-gray-500 leading-relaxed font-light">建立服务标准，专注于本地单体网吧的技术突围。</p>
              </div>
              <div class="group">
                <div class="text-sm text-apple-blue font-semibold mb-4 tracking-widest uppercase">Phase 02</div>
                <h4 class="text-2xl font-semibold mb-4 text-apple-dark">扩张</h4>
                <p class="text-gray-500 leading-relaxed font-light">自研远程管理体系，无盘系统覆盖率达到行业领先。</p>
              </div>
              <div class="group">
                <div class="text-sm text-apple-blue font-semibold mb-4 tracking-widest uppercase">Phase 03</div>
                <h4 class="text-2xl font-semibold mb-4 text-apple-dark">现在</h4>
                <p class="text-gray-500 leading-relaxed font-light">赋能电竞酒店、教育与企业办公，构建全场景运维生态。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 第二区块：解决方案 (更宽的间距与背景交替) -->
      <section id="solutions" class="py-32 md:py-48 bg-[#f5f5f7]">
        <Scenarios />
        <div class="h-32"></div>
        <Services />
      </section>

      <!-- 第三区块：专业深度 -->
      <section class="py-32 md:py-48 bg-white">
        <Workflow />
        <div class="h-32"></div>
        <Advantages />
      </section>

      <section id="config" class="py-32 md:py-48 bg-[#f5f5f7]">
        <ConfigSection />
      </section>

      <section class="py-32 md:py-48 bg-white">
        <CaseStudies />
      </section>

      <!-- 第四区块：信任与行动 -->
      <section class="py-32 md:py-48 bg-[#f5f5f7]">
        <Testimonials />
        <div class="h-32"></div>
        <FAQ />
      </section>

      <section class="py-32 md:py-48 bg-white border-t border-gray-100">
        <Guarantee />
      </section>

      <section id="contact-action" class="py-32 md:py-48 bg-apple-dark">
        <ContactForm />
      </section>
    </main>

    <Footer />
  </div>
</template>

<style>
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
  @apply text-apple-dark;
  -webkit-font-smoothing: antialiased;
}
</style>
