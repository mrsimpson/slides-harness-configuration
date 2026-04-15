<template>
  <div class="slidev-layout icon-subtitle h-full flex flex-col justify-center items-center text-center">
    <div class="mb-8">
      <slot />
    </div>
    <div class="icon-container mb-6">
      <slot name="icon">
        <div class="icon-placeholder w-20 h-20 bg-blue-500 rounded-full text-white text-4xl flex items-center justify-center mx-auto">🔧</div>
      </slot>
    </div>
    <div class="subtitle text-lg text-gray-600">
      <slot name="subtitle" />
    </div>
  </div>
</template>

<style scoped>
.icon-subtitle {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
}
.icon-placeholder {
  flex-shrink: 0;
}
</style>
