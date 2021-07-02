<template>
  <div className="spinner"></div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .spinner {
  border: 4px solid rgba(0, 0, 0, .1);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border-right-color: black;
  position: absolute;
  right: calc(50% - 18px);
  top: 40%;
  animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>