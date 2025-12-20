<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Hero from './views/Hero.vue'
import Services from './views/Services.vue'
import Scenarios from './views/Scenarios.vue'
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
    // 简单的淡入动画观察者
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // 使用 requestAnimationFrame 确保动画流畅
          requestAnimationFrame(() => {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            entry.target.classList.remove('opacity-0', 'translate-y-10')
          })
        }
      })
    }, { 
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px' // 提前触发，减少抖动
    })

    // 检查已经在视口内的元素，立即显示
    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect()
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0
      
      if (isVisible) {
        // 已经在视口内的元素，延迟一点显示，避免闪烁
        setTimeout(() => {
          el.classList.add('opacity-100', 'translate-y-0')
          el.classList.remove('opacity-0', 'translate-y-10')
        }, 50)
      }
      
      observer.observe(el)
    })
  })
})
</script>

<template>
  <div class="min-h-screen font-sans">
    <Navbar />
    
    <main>
      <Hero />
      
      <section id="about" class="py-24 bg-white overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row items-center gap-16 mb-20">
            <div class="flex-1 animate-on-scroll opacity-0 translate-y-10">
              <h2 class="text-4xl md:text-5xl font-semibold tracking-tight text-apple-dark mb-8 leading-tight">
                十余年行业深耕，<br/>只为那一线极致的稳定。
              </h2>
              <p class="text-xl text-gray-500 mb-8 leading-relaxed">
                智维网吧维护成立于 2010 年，由一群热爱技术的网络工程师组成。我们专注于集中管理解决方案，服务范围涵盖网吧、电竞酒店、洗浴中心、学校、企业等各类场景。从单机维护到万兆无盘系统，我们始终站在技术的最前沿。经过十余年的发展，我们已服务超过 500 家客户，积累了丰富的实战经验。
              </p>
              <div class="grid grid-cols-2 gap-8">
                <div>
                  <p class="text-3xl font-bold text-apple-blue mb-1">500+</p>
                  <p class="text-sm text-gray-400 uppercase">合作网吧</p>
                </div>
                <div>
                  <p class="text-3xl font-bold text-apple-blue mb-1">24/7</p>
                  <p class="text-sm text-gray-400 uppercase">技术响应</p>
                </div>
                <div>
                  <p class="text-3xl font-bold text-apple-blue mb-1">98%</p>
                  <p class="text-sm text-gray-400 uppercase">客户满意度</p>
                </div>
                <div>
                  <p class="text-3xl font-bold text-apple-blue mb-1">15年</p>
                  <p class="text-sm text-gray-400 uppercase">行业经验</p>
                </div>
              </div>
            </div>
            <div class="flex-1 animate-on-scroll relative opacity-0 translate-y-10">
              <div class="aspect-square bg-gradient-to-tr from-apple-blue/10 to-blue-500/5 rounded-3xl flex items-center justify-center">
                 <div class="w-2/3 h-2/3 bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div class="space-y-4">
                      <div class="h-2 w-1/2 bg-gray-100 rounded"></div>
                      <div class="h-2 w-full bg-gray-100 rounded"></div>
                      <div class="h-2 w-3/4 bg-gray-100 rounded"></div>
                      <div class="h-24 w-full bg-apple-blue/5 rounded-xl flex items-center justify-center">
                         <div class="text-apple-blue font-bold">ZHIWEI TECH</div>
                      </div>
                      <div class="h-2 w-full bg-gray-100 rounded"></div>
                      <div class="h-2 w-2/3 bg-gray-100 rounded"></div>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          <!-- 发展历程 -->
          <div class="animate-on-scroll opacity-0 translate-y-10">
            <h3 class="text-3xl font-semibold text-center mb-12 text-apple-dark">发展历程</h3>
            <div class="relative">
              <div class="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200 hidden md:block"></div>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="relative bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <div class="absolute -left-3 top-6 w-6 h-6 bg-apple-blue rounded-full border-4 border-white hidden md:block"></div>
                  <div class="text-sm text-apple-blue font-semibold mb-2">2010-2015</div>
                  <h4 class="text-lg font-semibold mb-2">创业起步</h4>
                  <p class="text-gray-600 text-sm">公司成立，专注单机维护，积累首批客户，建立服务标准。</p>
                </div>
                <div class="relative bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <div class="absolute -left-3 top-6 w-6 h-6 bg-apple-blue rounded-full border-4 border-white hidden md:block"></div>
                  <div class="text-sm text-apple-blue font-semibold mb-2">2015-2020</div>
                  <h4 class="text-lg font-semibold mb-2">技术突破</h4>
                  <p class="text-gray-600 text-sm">引入无盘系统，建立远程维护体系，服务网吧数量突破 200 家。</p>
                </div>
                <div class="relative bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <div class="absolute -left-3 top-6 w-6 h-6 bg-apple-blue rounded-full border-4 border-white hidden md:block"></div>
                  <div class="text-sm text-apple-blue font-semibold mb-2">2020-至今</div>
                  <h4 class="text-lg font-semibold mb-2">行业领先</h4>
                  <p class="text-gray-600 text-sm">万兆网络部署，电竞酒店服务拓展，客户覆盖 500+ 家，技术团队 30+ 人。</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 技术团队 -->
          <div class="mt-20 animate-on-scroll opacity-0 translate-y-10">
            <h3 class="text-3xl font-semibold text-center mb-12 text-apple-dark">核心团队</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="text-center p-6 bg-apple-gray rounded-2xl">
                <div class="w-20 h-20 bg-apple-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-2xl">👨‍💻</span>
                </div>
                <h4 class="font-semibold mb-2">技术总监</h4>
                <p class="text-sm text-gray-600">15年网络工程经验，CCIE认证，精通无盘系统与万兆网络架构。</p>
              </div>
              <div class="text-center p-6 bg-apple-gray rounded-2xl">
                <div class="w-20 h-20 bg-apple-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-2xl">👨‍🔧</span>
                </div>
                <h4 class="font-semibold mb-2">运维团队</h4>
                <p class="text-sm text-gray-600">30+ 专业工程师，平均 8 年行业经验，7x24 小时待命响应。</p>
              </div>
              <div class="text-center p-6 bg-apple-gray rounded-2xl">
                <div class="w-20 h-20 bg-apple-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-2xl">👨‍💼</span>
                </div>
                <h4 class="font-semibold mb-2">客户服务</h4>
                <p class="text-sm text-gray-600">专业客服团队，快速响应客户需求，提供贴心的一对一服务。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Services id="services" />
      <Scenarios />
      <Workflow />
      <Advantages />
      <ConfigSection id="config" />
      <CaseStudies />
      <Testimonials />
      <FAQ />
      <Guarantee />
      <ContactForm />
    </main>

    <Footer />
  </div>
</template>

<style>
.animate-on-scroll {
  @apply transition-all duration-1000 ease-out;
  will-change: opacity, transform;
}

/* 初始状态：隐藏，等待动画触发 */
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

/* 防止页面加载时的闪烁 */
body {
  visibility: visible;
}
</style>
