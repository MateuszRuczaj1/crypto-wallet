<script setup>
   import { ref } from 'vue';
  const title =  ref("Crypto wallet")
  const name = ref("Mateusz Ruczaj")
  const showLoginForm = ref(false)
  function hello(){
       showLoginForm.value = !showLoginForm.value
  }
  import Crypto from './components/Crypto.vue';
</script>

<template>
  <header>
    <p class="title">{{ title }}</p>  
    <div class="flex items-center justify-between max-md:w-full gap-5">
      <p class="name">Witaj, {{ name }}</p>
    <button class="px-12 py-2 bg-[#1f2948] hover:bg-[#28355c] hover:cursor-pointer hover:-translate-y-0.5 transition-all duration-150 rounded-xl text-white hover:shadow-amber-200 hover:shadow-md" @click="hello">Zaloguj</button>
  
    </div>
  </header>

  <main class="flex-1 flex items-center py-2 justify-center">
    <p v-if="showLoginForm" class="text-white font-bold mx-auto">Logowanie</p>
    <Crypto crypto-name="Bitcoin" />
  </main>
</template>

<style scoped>
 
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: #151d32;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}
@media (max-width: 768px){
  header{
    flex-direction: column;
    align-items: start;
    gap: 2rem;
  }
}

header p {
  color: #fff;
  margin: 0;
  align-self: center;
}
.title {
  font-size: clamp(1.2rem, 8vw, 1.8rem);
  font-weight: 600;
  letter-spacing: 1px;
}

.name {
  font-weight: 500;
  font-size: clamp(0.8rem, 4vw, 1.2rem);
}
</style>
