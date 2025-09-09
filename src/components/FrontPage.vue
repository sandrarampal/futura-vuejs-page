<script setup>
const props = defineProps({
  frontPage: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="container front-page">
    <img :src="frontPage.image" :alt="frontPage.title" />
    <div class="titles">
      <div class="categories">
        <span>{{ frontPage.category.toUpperCase() }}</span>
        <span>{{ frontPage.subCategory.toUpperCase() }}</span>
      </div>
      <h2>{{ frontPage.title }}</h2>
    </div>
    <div class="teaser">
      <p>{{ frontPage.teaser }}</p>
    </div>
  </div>
</template>

<style scoped>
.front-page {
  height: 550px;
  margin-top: 50px;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.titles {
  position: relative;
  bottom: 87%;
  left: 10%;
  padding-left: 5px;
  width: 10px;
  color: white;
  height: 127.5px;
  background: linear-gradient(to bottom, #be80ff, #6325ff);
}

.teaser {
  position: relative;
  z-index: 1;
  bottom: 80%;
  left: 10%;
  color: white;
  width: 70%;
  background-color: black;
  opacity: 0.8;
  padding: 20px;
  line-height: 1.5;
}

.categories {
  background-color: black;
  width: fit-content;
  padding: 10px;
}

.categories span:first-child {
  margin-right: 20px;
  background: linear-gradient(to right, #be80ff, #6325ff);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

h2 {
  font-family: 'Merriweather', serif;
  font-size: 36px;
  margin-bottom: 10px;
  background-color: black;
  width: 800px;
  padding: 10px;
}
</style>
