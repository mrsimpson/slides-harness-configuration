<template>
  <div class="slidev-layout approach h-full flex items-center">
    <div class="content-grid grid grid-cols-2 gap-12 w-full px-8">
      <div class="approach-description">
        <slot />
      </div>
      <div class="approach-visual text-center">
        <slot name="visual">
          <div class="icon-placeholder w-20 h-20 bg-blue-500 rounded-full text-white text-4xl flex items-center justify-center mx-auto mb-4">🔧</div>
        </slot>
        <div class="visual-caption text-sm text-gray-600">
          <slot name="caption" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.approach {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
}
.content-grid {
  max-width: 1000px;
  margin: 0 auto;
}
.icon-placeholder {
  flex-shrink: 0;
}
</style>
