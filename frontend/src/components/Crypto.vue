<script setup>
defineProps(["cryptoName"])
</script>

<template>
  <div class="crypto md:min-w-2xl min-w-md flex flex-row justify-between px-3 rounded-md">
    <!-- kontener dla obrazka i nazwy -->
    <div class="flex items-center gap-3">
      <img src="../assets/bitcoin.webp" class="object-contain w-16 h-16"/>
      <p class="text-white font-light">{{ cryptoName }}</p>
    </div>
  </div>
</template>

<style scoped>
.crypto {
  background: linear-gradient(90deg, rgba(222, 104, 0, 1) 11%, rgba(45, 63, 103, 1) 27%);
}
</style>
