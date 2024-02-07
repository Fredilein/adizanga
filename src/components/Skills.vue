<template>
  <div class="card">
    <div class="w-full flex justify-center items-center">
      <div class="bg-indigo-500 text-gray-950 rounded-xl p-4 -mt-24 rotate-6 h-20 w-20 flex items-center justify-center">
        <font-awesome-icon :icon="['fas', 'dumbbell']" size="2xl" class="text-4xl text-center" />
      </div>
      <div class="bg-gray-50 text-gray-950 p-4 text-2xl font-bold rounded-xl -mt-24 -rotate-2">Skills</div>
    </div>
    <div class="skills">

      <div class="name">
        <font-awesome-icon :icon="['fab', 'square-js']" size="xl" class="mr-2 text-yellow-400"/><span class="language">JS + Web</span>
      </div>
      <div class="progress">
        <div class="progress-outer">
          <div class="progress-inner" style="width: 88%"></div>
        </div>
      </div>

      <div class="name">
        <font-awesome-icon :icon="['fab', 'python']" size="xl" class="mr-2 text-blue-500"/><span class="language">Python</span>
      </div>
      <div class="progress">
        <div class="progress-outer">
          <div class="progress-inner" style="width: 80%"></div>
        </div>
      </div>

      <div class="name">
        <font-awesome-icon :icon="['fab', 'java']" size="xl" class="mr-2 text-orange-500"/><span class="language">Java</span>
      </div>
      <div class="progress">
        <div class="progress-outer">
          <div class="progress-inner" style="width: 73%"></div>
        </div>
      </div>

      <div class="name">
        <font-awesome-icon :icon="['fab', 'golang']" size="xl" class="mr-2 text-blue-300"/><span class="language">Go</span>
      </div>
      <div class="progress">
        <div class="progress-outer">
          <div class="progress-inner" style="width: 70%"></div>
        </div>
      </div>

      <div class="name">
        <font-awesome-icon :icon="['fas', 'database']" size="xl" class="mr-2 text-orange-300"/><span class="language">SQL</span>
      </div>
      <div class="progress">
        <div class="progress-outer">
          <div class="progress-inner" style="width: 56%"></div>
        </div>
      </div>

      <div class="name">
        <font-awesome-icon :icon="['fab', 'swift']" size="xl" class="mr-2 text-orange-500"/><span class="language">Swift</span>
      </div>
      <div class="progress">
        <div class="progress-outer">
          <div class="progress-inner" style="width: 37%"></div>
        </div>
      </div>

      <div class="name">
        <font-awesome-icon :icon="['fas', 'c']" size="xl" class="mr-2 text-blue-600"/><span class="language">C/C++</span>
      </div>
      <div class="progress">
        <div class="progress-outer">
          <div class="progress-inner" style="width: 35%"></div>
        </div>
      </div>

      <div class="name">
        <font-awesome-icon :icon="['fab', 'unity']" size="xl" class="mr-2 text-white"/><span class="language">Unity</span>
      </div>
      <div class="progress">
        <div class="progress-outer">
          <div class="progress-inner" style="width: 25%"></div>
        </div>
      </div>

      <div class="name">
        <font-awesome-icon :icon="['fab', 'rust']" size="xl" class="mr-2 text-black"/><span class="language">Rust</span>
      </div>
      <div class="progress">
        <div class="progress-outer">
          <div class="progress-inner" style="width: 20%"></div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.card {
  @apply w-full mt-8 bg-gray-800 text-gray-50 rounded-xl p-8
}

.skills {
  @apply w-full grid grid-cols-2 gap-4
}

.name {
  @apply w-32 grid grid-cols-4 gap-3
}

.language {
  @apply col-span-3
}

.progress {
  @apply h-full flex items-center
}

.progress-outer {
  @apply bg-gray-950 rounded-full h-4 w-full shadow-inner
}

.progress-inner {
  @apply bg-indigo-500 h-4 rounded-full shadow-sm
}
</style>
