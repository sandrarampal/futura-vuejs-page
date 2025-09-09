<script setup></script>

<template>
  <header>
    <div class="container header-main">
      <div>
        <img src="../assets/logo-futura-dark.svg" alt="" />
      </div>
      <nav>
        <ul>
          <li>SCIENCES <font-awesome-icon :icon="['fas', 'chevron-down']" /></li>

          <li>SANTE <font-awesome-icon :icon="['fas', 'chevron-down']" /></li>

          <li>TECH <font-awesome-icon :icon="['fas', 'chevron-down']" /></li>

          <li>MAISON <font-awesome-icon :icon="['fas', 'chevron-down']" /></li>

          <li>PLANETE <font-awesome-icon :icon="['fas', 'chevron-down']" /></li>
        </ul>
      </nav>
      <button>JE M'ABONNE</button>
    </div>
  </header>
</template>

<style scoped>
header {
  background: linear-gradient(to right, #be80ff, #6325ff);
  padding: 10px 20px;
  font-family: 'Roboto', sans-serif;
}

.header-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  display: flex;
  list-style: none;
  gap: 20px;

  font-size: 16px;
  text-transform: uppercase;
  color: white;
}

li {
  cursor: pointer;
}

button {
  background-color: #feb00e;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
}
</style>
