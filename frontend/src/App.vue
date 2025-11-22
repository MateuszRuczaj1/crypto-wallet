<script setup>
import { ref } from "vue";
const title = ref("Crypto wallet");
const name = ref("Mateusz Ruczaj");
const cryptoValues = ref([])
const showLoginForm = ref(false);
const showCryptoForm = ref(false);
const showCryptoList = ref(true)
function hello() {
  showLoginForm.value = !showLoginForm.value;
}
function handleShowCryptoForm() {
  showCryptoForm.value = true;
}
function handleToggleCryptoList(){
    showCryptoList.value = !showCryptoList.value
}
function handleAddNewCrypto(cryptoName){
  console.log(cryptoName)
  cryptoValues.value.push(cryptoName)
  
}
function handleAddNewCryptoToLocalStorage(cryptoName){
  const items = JSON.parse(localStorage.getItem("cryptoValues") || "[]")
  items.push(cryptoName)
  localStorage.setItem("cryptoValues", JSON.stringify(items))
}
function handleGetItemsFromLocalStorage(){
  const items = JSON.parse(localStorage.getItem("cryptoValues"))
  if(items){
    console.log(items)
    cryptoValues.value.push(items)
  }
  else{
    alert("Brak danych w localStorage")
  }
  localStorage.removeItem("cryptoValues")
}
import Crypto from "./components/Crypto.vue";
import CryptoForm from "./components/CryptoForm.vue";
import Button from "./components/Button.vue";
console.log(cryptoValues.value)
</script>

<template>
  <header>
    <p class="title">{{ title }}</p>
    <div class="flex items-center justify-between max-md:w-full gap-5">
      <p class="name">Witaj, {{ name }}</p>
      <Button text="Zaloguj" @action="hello" />
    </div>
  </header>

  <main class="flex-1 flex items-center py-2 justify-center flex-col gap-2">
    <p v-if="showLoginForm" class="text-white font-bold mx-auto">Logowanie</p>
    <Crypto crypto-name="Bitcoin" />

    <Button text="Dodaj nową kryptowalutę" @action="handleShowCryptoForm" />
    <CryptoForm v-if="showCryptoForm" @onsubmit = "handleAddNewCrypto" @onlocalstorage="handleAddNewCryptoToLocalStorage" />
    <div v-show="showCryptoList">
      <ul>
      <li v-for="(value,index) in cryptoValues" :key="index">
       <Crypto :crypto-name="value" />
      </li>
       
    </ul>
      <p class="my-10">
        <Button text="Ukryj listę" @action="handleToggleCryptoList" v-if="showCryptoList" />
        
      </p>
    </div>
    <div class="my-15">
          <Button text="Pokaż listę" @action="handleToggleCryptoList" v-if="!showCryptoList" />
    <Button text="Pobierz waluty z localStorage" @action="handleGetItemsFromLocalStorage"/>
    </div>
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
@media (max-width: 768px) {
  header {
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
