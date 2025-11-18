<script setup>
import { computed, ref, watch } from "vue";

const text = ref("");
const textEnter = ref("");
const confirmed = ref("");
function handleEnter() {
  confirmed.value = textEnter.value;
}
watch(confirmed, (newConfirmed, oldConfirmed) => {
  console.log(`Zmieniłeś z : ${oldConfirmed} na ${newConfirmed}`);
});
const showConfirm = computed(() => confirmed.value.length > 0);
</script>
<template>
  <input
    placeholder="Podaj nazwę"
    class="bg-slate-300 rounded-md py-1 px-4"
    :value="text"
    @input="(event) => (text = event.target.value)"
  />
  <p v-if="text.length" class="text-white">
    {{ text }}
  </p>
  <input
    placeholder="Podaj nazwę, ale z enterem"
    :value="textEnter"
    @input="(event) => (textEnter = event.target.value)"
    class="bg-slate-300 rounded-md py-1 px-4"
    @keyup.enter="handleEnter"
  />
  <p v-if="showConfirm" class="text-white">
    {{ confirmed }}
  </p>
</template>
