<script setup lang="ts">
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-vue-next'
</script>

<template>
  <footer id="contact" class="bg-apple-gray pt-24 pb-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <!-- Brand -->
        <div class="space-y-6">
          <h3 class="text-2xl font-semibold tracking-tight">智维网吧维护</h3>
          <p class="text-gray-500 leading-relaxed">
            致力于为网吧、电竞酒店、洗浴中心、学校、企业等各类集中管理场景提供最专业、最可靠的技术支持服务。您的稳定，我们的追求。
          </p>
          <div class="flex space-x-4">
            <a href="#" class="p-2 bg-white rounded-full text-gray-400 hover:text-apple-blue transition-colors">
              <MessageSquare class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Services -->
        <div>
          <h4 class="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-6">核心业务</h4>
          <ul class="space-y-4 text-gray-500">
            <li><a href="#" class="hover:text-apple-blue transition-colors">本地故障排除</a></li>
            <li><a href="#" class="hover:text-apple-blue transition-colors">远程系统优化</a></li>
            <li><a href="#" class="hover:text-apple-blue transition-colors">无盘系统部署</a></li>
            <li><a href="#" class="hover:text-apple-blue transition-colors">网络架构设计</a></li>
          </ul>
        </div>

        <!-- Support -->
        <div>
          <h4 class="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-6">技术支持</h4>
          <ul class="space-y-4 text-gray-500">
            <li><a href="#" class="hover:text-apple-blue transition-colors">7x24小时报修</a></li>
            <li><a href="#" class="hover:text-apple-blue transition-colors">开业技术顾问</a></li>
            <li><a href="#" class="hover:text-apple-blue transition-colors">硬件升级方案</a></li>
            <li><a href="#" class="hover:text-apple-blue transition-colors">防病毒安全策略</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-6">联系我们</h4>
          <ul class="space-y-4">
            <li class="flex items-center space-x-3 text-gray-500">
              <Phone class="w-5 h-5 text-apple-blue" />
              <span>400-888-6666</span>
            </li>
            <li class="flex items-center space-x-3 text-gray-500">
              <Mail class="w-5 h-5 text-apple-blue" />
              <span>support@zhiwei.com</span>
            </li>
            <li class="flex items-center space-x-3 text-gray-500">
              <MapPin class="w-5 h-5 text-apple-blue" />
              <span>深圳市南山区科技园南区技术产业园 101 室</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="pt-8 border-t border-gray-200 text-center">
        <p class="text-xs text-gray-400">
          © 2025 智维网吧维护有限公司. 保留所有权利. | 粤 ICP 备 2024001234 号
        </p>
      </div>
    </div>
  </footer>
</template>

