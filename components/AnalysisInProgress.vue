<template>
  <div class="analysis-in-progress">
    <h2>解析中...</h2>
    <div class="loading-animation"></div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'AnalysisInProgress',
}
</script>

<style scoped>
.analysis-in-progress {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.loading-animation {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #000;
  animation: loading 1s infinite;
}

@keyframes loading {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
}
</style>
