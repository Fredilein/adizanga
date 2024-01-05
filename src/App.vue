<script setup>
import Hero from './components/Hero.vue'
import Letter from './components/Letter.vue'
import Skills from './components/Skills.vue'
import Brudis from './components/Brudis.vue'
import Cookie from './components/Cookie.vue'
import Ycnews from './components/Ycnews.vue'
</script>

<template>
  <div class="pagesection bg-gradient-to-b from-indigo-300 to-blue-300">
    <div class="section-content sm:px-16">
      <Hero />
    </div>
  </div>
  <div class="pagesection bg-gradient-to-b from-blue-300 to-sky-300">
    <div class="section-content">
      <div class="section-title">About me</div>
      <div class="flex flex-wrap gap-8 items-center justify-center">
        <Letter class="max-w-sm -rotate-2"/>
        <Skills class="max-w-md" />
      </div>
    </div>
  </div>
  <div class="pagesection bg-gradient-to-b from-sky-300 to-teal-300">
    <div class="section-content">
      <div class="section-title">Some Projects</div>
      <div class="w-full">
        <Brudis class="max-w-2xl bg-gray-100 p-8 rounded-3xl shadow-xl mb-8" />
        <Cookie class="max-w-2xl bg-gray-100 p-8 rounded-3xl shadow-xl float-right mb-8" />
        <div class="clear-both"></div>
        <Ycnews class="max-w-2xl bg-gray-100 p-8 rounded-3xl shadow-xl mb-4 sm:ml-8" />
      </div>
    </div>
  </div>
  <div class="pagesection bg-gradient-to-b from-teal-300 to-emerald-300">
    <div class="section-content">
      <div class="section-title">Contact me</div>
      <div class="flex flex-wrap gap-8 items-center justify-center">
       <div class="contact-button">
         <a href="https://www.github.com/fredilein" target="_blank">
           <font-awesome-icon :icon="['fab', 'github']" size="2xl" />
         </a>
       </div>
       <div class="contact-button">
         <a href="https://www.t.me/adi_z" target="_blank">
           <font-awesome-icon :icon="['fab', 'telegram']" size="2xl" />
         </a>
       </div>
       <div class="contact-button">
         <a href="mailto:zanga.adi@gmail.com" target="_blank">
           <font-awesome-icon :icon="['fas', 'at']" size="2xl" />
         </a>
       </div>
      </div>
    </div>
    <div class="h-16 flex items-center justify-center mt-8">Website made by me | © 2023</div>
  </div>
</template>

<style scoped>
.contact-button {
  @apply text-center bg-gray-200 text-4xl p-2 rounded-full shadow-lg hover:scale-110 transition
}
</style>
