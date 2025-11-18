<script setup>
defineProps(["text"]);
const emit = defineEmits(["action"]);
function handleClick() {
  emit("action");
}
</script>
<template>
  <button
    class="px-12 py-2 bg-[#1f2948] hover:bg-[#28355c] hover:cursor-pointer hover:-translate-y-0.5 transition-all duration-150 rounded-xl text-white hover:shadow-amber-200 hover:shadow-md"
    @click="handleClick"
  >
    {{ text }}
  </button>
</template>
