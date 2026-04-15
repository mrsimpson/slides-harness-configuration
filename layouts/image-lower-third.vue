<template>
  <div class="slidev-layout image-lower-third h-full relative overflow-hidden">
    <!-- Full screen background image -->
    <div 
      class="absolute inset-0 bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: `url(${resolveAssetUrl(image)})` }"
    />
    
    <!-- Lower third overlay -->
    <div class="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 backdrop-blur-sm">
      <div class="px-8 py-6 max-w-4xl">
        <div class="prose prose-lg text-gray-900">
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
.image-lower-third {
  background: #000;
}

.prose h1 {
  @apply text-2xl font-bold mb-2 text-gray-900;
}

.prose h2 {
  @apply text-xl font-semibold mb-2 text-gray-800;
}

.prose p {
  @apply text-base leading-relaxed text-gray-700 mb-2;
}

.prose em {
  @apply italic text-gray-600;
}

.prose strong {
  @apply font-semibold text-gray-900;
}
</style>
