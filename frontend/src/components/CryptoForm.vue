
<script setup>
import { computed, ref, watch } from "vue";
const emit = defineEmits(["onsubmit","onlocalstorage"])
import Button from "./Button.vue";
const text = ref("");
function onAdd(){
  emit("onsubmit", text.value)
  text.value = ""
}
function onAddToLocalStorage(){
  emit("onlocalstorage", text.value)
  text.value
}
// watch(confirmed, (newConfirmed, oldConfirmed) => {
//   console.log(`Zmieniłeś z : ${oldConfirmed} na ${newConfirmed}`);
// });
</script>
<template>
  <div class="flex justify-between min-w-md gap-5 my-10 ">
    <input
    placeholder="Podaj nazwę"
    class="bg-slate-300 rounded-md py-1 px-4"
    :value="text"
    @input="(event) => (text = event.target.value)"
  />
   <Button text="Dodaj" @action="onAdd"  />
   <Button text="Dodaj do localStorage" @action="onAddToLocalStorage" />
  </div>

</template>
