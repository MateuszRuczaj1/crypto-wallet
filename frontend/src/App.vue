<script setup>
const name = "Mateusz"
const title = "Crypto wallet"
</script>

<template>
  <header>
    <p class="title">{{ title }}</p>  
    <p class="name">Witaj, {{ name }}</p>
  </header>

  <main>
  </main>
</template>

<style scoped>
 
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  border-radius: 12px;
  background-color: #430a3e;
  
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}
header p {
  color: #fff;
  margin: 0;
}
.title {
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 1px;
}

.name {
  font-weight: 500;
  font-size: 1.2rem;
}
</style>
