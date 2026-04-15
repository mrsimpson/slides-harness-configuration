<template>
  <div class="slidev-layout three-stages h-full flex flex-col justify-center">
    <h1 class="text-center mb-12"><slot name="title" /></h1>
    
    <div class="grid grid-cols-3 gap-8 px-8">
      <div class="text-center">
        <div class="icon-placeholder w-12 h-12 bg-blue-500 rounded-full text-white text-2xl flex items-center justify-center mx-auto mb-4">👶</div>
        <uim-arrow-circle-right class="text-2xl text-gray-400 mx-auto mb-4"/>
        <div class="icon-placeholder w-12 h-12 bg-blue-700 rounded-full text-white text-2xl flex items-center justify-center mx-auto mb-4">👤</div>
        <div class="text-lg font-bold">A child?</div>
      </div>

      <div class="text-center">
        <uim-android class="text-6xl text-green-500 mx-auto mb-4"/>
        <uim-arrow-circle-right class="text-2xl text-gray-400 mx-auto mb-4"/>
        <div class="icon-placeholder w-12 h-12 bg-green-700 rounded-full text-white text-2xl flex items-center justify-center mx-auto mb-4">🧠</div>
        <div class="text-lg font-bold">An LLM?</div>
      </div>

      <div class="text-center">
        <div class="icon-placeholder w-12 h-12 bg-purple-500 rounded-full text-white text-2xl flex items-center justify-center mx-auto mb-4">💻</div>
        <uim-arrow-circle-right class="text-2xl text-gray-400 mx-auto mb-4"/>
        <uim-rocket class="text-6xl text-purple-700 mx-auto mb-4"/>
        <div class="text-lg font-bold">Software?</div>
      </div>
    </div>

    <div class="text-center mt-12 text-xl text-gray-600">
      <slot name="subtitle" />
    </div>
  </div>
</template>

<style scoped>
.three-stages {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}
.icon-placeholder {
  flex-shrink: 0;
}
</style>
