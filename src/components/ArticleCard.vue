<script setup>
const props = defineProps({
  articlesList: {
    type: Object,
    required: true,
  },
})

const getBackgroundColors = (category) => {
  const categoriesColors = {
    sciences: ['#be80ff', '#6325ff'],
    sante: ['#ff6b9f', '#ff4e52'],
    planete: ['#9fcb5c', '#069849'],
    maison: ['#fa9761', '#ff5957'],
    tech: ['#49adfa', '#2a3df7'],
  }
  return categoriesColors[category] || ['#000', '#000']
}
</script>

<template>
  <div class="container article-card">
    <div v-for="article in articlesList" :key="article.id" class="card">
      <img :src="article.image" :alt="article.title" />
      <div class="info">
        <div class="categories">
          <span
            :style="{
              background: `linear-gradient(to right, ${getBackgroundColors(article.category)})`,
              '-webkit-background-clip': 'text',
              '-webkit-text-fill-color': 'transparent',
            }"
            >{{ article.category.toUpperCase() }}</span
          >
          <span> {{ article.subCategory.toUpperCase() }}</span>
        </div>
        <h3>{{ article.title }}</h3>

        <span>{{ article.date }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.article-card {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-top: 50px;
  margin-bottom: 40px;
}

.card {
  height: 480px;
}
img {
  width: 100%;
  height: 70%;
  object-fit: cover;
  object-position: center;
}

.info {
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.categories span:first-child {
  margin-right: 10px;
  font-weight: bold;
}

h3 {
  font-family: 'Merriweather', serif;
  font-weight: bold;
}

.info span {
  color: gray;
}
</style>
