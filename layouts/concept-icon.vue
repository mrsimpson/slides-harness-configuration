<template>
  <div class="slidev-layout concept-icon h-full flex items-center justify-center">
    <div class="content-area max-w-4xl mx-auto px-8">
      <div class="text-content mb-8">
        <slot />
      </div>
      <div class="icon-area text-center">
        <slot name="icon">
          <div class="icon-placeholder w-20 h-20 bg-blue-500 rounded-full text-white text-4xl flex items-center justify-center mx-auto">🔧</div>
        </slot>
        <div class="icon-caption text-sm text-gray-600 mt-4">
          <slot name="caption" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.concept-icon {
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
}
.icon-placeholder {
  flex-shrink: 0;
}
</style>
