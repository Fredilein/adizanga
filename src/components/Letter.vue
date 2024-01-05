<template>
  <div class="letter">
    <div class="w-full h-12 -mt-16 mb-4 flex justify-center">
      <div class="w-32 h-full bg-sky-400/75"></div>
    </div>
    <div class="letter-content">
      <p>Awesome to see you here!</p>
      <p>I'm a computer science student currently in the master's program.</p>
      <p>I like webdev, CTFs, vim and sports.</p>
    </div>
  </div>
</template>

<style scoped>
.letter {
  @apply font-hand text-3xl font-semibold bg-yellow-50 shadow-xl p-8 
}

.letter-content {
  @apply flex flex-col justify-center gap-4

}
</style>
