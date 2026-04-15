<template>
  <div class="slidev-layout image-lower-third-video h-full relative overflow-hidden">
    <!-- Full screen background image (shown after video ends) -->
    <div 
      class="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
      :class="{ 'opacity-0': showVideo, 'opacity-100': !showVideo }"
      :style="{ backgroundImage: `url(${resolveAssetUrl(image)})` }"
    />
    
    <!-- Full screen video (shown initially) -->
    <div v-if="video" class="absolute inset-0 bg-black flex items-center justify-center transition-opacity duration-1000"
         :class="{ 'opacity-100': showVideo, 'opacity-0': !showVideo }">
      <video 
        ref="videoElement"
        controls 
        autoplay
        class="w-full h-full object-contain"
        @ended="onVideoEnded"
      >
        <source :src="resolveAssetUrl(video)" type="video/mp4">
      </video>
    </div>
    
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
import { ref } from 'vue'

const props = defineProps({
  image: {
    type: String,
    required: true
  },
  video: {
    type: String,
    required: false
  }
})

const showVideo = ref(true)

const onVideoEnded = () => {
  showVideo.value = false
}

const resolveAssetUrl = (url) => {
  if (url.startsWith('/')){
    return import.meta.env.BASE_URL + url.slice(1)
  }
  return url
}
</script>

<style scoped>
.image-lower-third-video {
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
