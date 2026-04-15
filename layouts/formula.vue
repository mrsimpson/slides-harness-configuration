<template>
  <div class="slidev-layout formula h-full flex flex-col justify-center items-center text-center">
    <h1 class="mb-12"><slot name="title" /></h1>
    
    <div class="formula-content space-y-8 text-2xl">
      <div class="flex items-center justify-center space-x-4">
        <div class="icon-placeholder w-8 h-8 bg-blue-500 rounded text-white text-xs flex items-center justify-center">🔧</div>
        <span>**Technical Skills**</span>
        <span class="text-gray-400">+</span>
        <uim-clock class="text-green-500" />
        <span>**Experience**</span>
        <span class="text-gray-400">=</span>
        <div class="icon-placeholder w-8 h-8 bg-purple-500 rounded text-white text-xs flex items-center justify-center">🎓</div>
        <span>**Maturity**</span>
      </div>
      
      <div class="text-4xl text-gray-400">↓</div>
      
      <div class="flex items-center justify-center space-x-4">
        <div class="icon-placeholder w-8 h-8 bg-purple-500 rounded text-white text-xs flex items-center justify-center">🎓</div>
        <span>**Maturity**</span>
        <span class="text-gray-400">+</span>
        <div class="icon-placeholder w-8 h-8 bg-orange-500 rounded text-white text-xs flex items-center justify-center">💾</div>
        <span>**Available Knowledge**</span>
        <span class="text-gray-400">=</span>
        <uim-check-circle class="text-red-500" />
        <span>**Good Guessing**</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.formula {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
}
.icon-placeholder {
  flex-shrink: 0;
}
</style>
