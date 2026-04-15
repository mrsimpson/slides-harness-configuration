<template>
  <div class="slidev-layout icon-center h-full flex flex-col justify-center items-center text-center">
    <div class="mb-8">
      <slot />
    </div>
    <div class="icon-placeholder w-20 h-20 bg-blue-500 rounded-full text-white text-4xl flex items-center justify-center mx-auto">
      <slot name="icon">🔧</slot>
    </div>
  </div>
</template>

<style scoped>
.icon-center {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}
</style>
