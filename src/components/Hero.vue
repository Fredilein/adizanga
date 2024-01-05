<template>
  <div class="card">
    <div class="picture-container">
      <div class="memoji-bg"></div>
      <img src="/memoji.png" class="memoji" />
    </div>
    <div class="title-container">
      <div class="name">
        Adi Zanga
      </div>
      <div class="label">
        My personal website
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  @apply bg-gray-50 rounded-xl shadow-2xl my-16 p-4 sm:p-8 flex justify-center gap-8 sm:gap-16
}

.picture-container {
  @apply relative
}

.memoji {
  @apply w-24 sm:w-32 relative -rotate-6
}

.memoji-bg {
  @apply w-24 h-24 sm:w-32 sm:h-32 bg-blue-500 absolute rounded-lg shadow-lg -rotate-6 sm:scale-110
}

.title-container {
  @apply flex flex-col justify-center
}

.name {
  @apply text-2xl sm:text-6xl font-bold text-gray-950
}

.label {
  @apply text-xl sm:text-3xl font-hand font-semibold text-gray-600 -rotate-1
}
</style>
