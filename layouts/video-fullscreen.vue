<template>
  <div
    class="slidev-layout video-fullscreen h-full relative overflow-hidden bg-black"
  >
    <div class="absolute inset-0 flex items-center justify-center">
      <video ref="videoElement" controls class="w-full h-full object-contain">
        <source :src="resolveAssetUrl(video)" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { onSlideLeave } from "@slidev/client";

const props = defineProps({
  video: {
    type: String,
    required: true,
  },
});

const videoElement = ref(null);

// Pause video when navigating away from slide
onSlideLeave(() => {
  if (videoElement.value) {
    videoElement.value.pause();
  }
});

const resolveAssetUrl = (url) => {
  if (url.startsWith("/")) {
    return import.meta.env.BASE_URL + url.slice(1);
  }
  return url;
};
</script>
