<template>
  <div class="flex flex-row gap-8 justify-center">
   <div class="flex items-center">
     <div class="text-center bg-gray-200 text-4xl p-2 rounded-full shadow-lg rotate-6">
       <font-awesome-icon :icon="['fas', 'cookie-bite']" size="2xl" />
     </div>
   </div>
   <div>
     <div class="text-2xl font-bold mb-2">YC News</div>
     <p>A clone of the famous Hackernews website, but with a nicer design and without infinite articles because we need to get back to work at some point, right?</p>
     <div class="my-2">Check it out: <a href="https://ycnews.tech" target="_blank" class="font-bold">www.ycnews.tech</a></div>
     <div class="flex flex-row items-center">
       Technologies: 
       <img src="/icons/vue.svg" class="technology-icon" />
       <img src="/icons/stylus.svg" class="technology-icon" />
       <img src="/icons/vercel.svg" class="technology-icon" />
     </div>
   </div>
  </div>
</template>

<style scoped>
</style>
