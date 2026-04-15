<template>
  <div class="slidev-layout image-fullwidth h-full relative overflow-hidden flex flex-col">
    <!-- Full width image (constrained to width, height auto) -->
    <div class="flex-1 flex items-center justify-center bg-gray-100">
      <img 
        :src="resolveAssetUrl(image)"
        class="max-w-full max-h-full w-full object-contain"
        alt="Screenshot"
      />
    </div>
    
    <!-- Lower third overlay for title/caption -->
    <div class="bg-white bg-opacity-90 backdrop-blur-sm border-t border-gray-200">
      <div class="px-8 py-4">
        <div class="prose prose-sm text-gray-900">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  image: {
    type: String,
    required: true
  }
})

const resolveAssetUrl = (url) => {
  if (url.startsWith('/')){
    return import.meta.env.BASE_URL + url.slice(1)
  }
  return url
}
</script>

<style scoped>
.image-fullwidth {
  background: #f3f4f6;
}

.prose h1 {
  @apply text-xl font-bold mb-1 text-gray-900;
}

.prose h2 {
  @apply text-lg font-semibold mb-1 text-gray-800;
}

.prose p {
  @apply text-sm leading-relaxed text-gray-700 mb-1;
}

.prose a {
  @apply text-blue-600 hover:text-blue-800 underline;
}

.prose em {
  @apply italic text-gray-600;
}

.prose strong {
  @apply font-semibold text-gray-900;
}
</style>
