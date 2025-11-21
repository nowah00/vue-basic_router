<script setup>
import TheHeadingNavbar from './components/layout/TheHeadingNavbar.vue';
</script>

<template>
  <div>
    <!-- 'TheHeadingNavbar' 레이아웃 출력: 항상 고정 -->
    <!-- ex1-1) 네비바에서 선택함 -->
    <TheHeadingNavbar />

    <!-- 선택한 페이지가 출력되는 영역 -->
    <!-- ex1-3) 네비바에서 선택한 'Home' 'router-link'의 to="/"를 띄움 -->
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
