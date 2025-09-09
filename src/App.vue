<script setup>
import Header from './components/Header.vue'
import FrontPage from './components/FrontPage.vue'
import ArticleCard from './components/ArticleCard.vue'
import Footer from './components/Footer.vue'

import data from './assets/articles.json'
</script>

<template>
  <div>
    <Header />
    <FrontPage :frontPage="data.frontPage" />
    <ArticleCard :articlesList="data.articlesList" />
    <Footer />
  </div>
</template>

<style scoped></style>
