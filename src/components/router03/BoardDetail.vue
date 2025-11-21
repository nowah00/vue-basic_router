<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";

const route = useRoute();

let articleNo = ref(0);

onMounted(() => {
  articleNo.value = route.params.no;
});
</script>

<template>
  <div class="container text-center mt-3">
    <h1>router03(이름이 있는 라우트)</h1>
    <div class="alert alert-info" role="alert">자유롭게 글쓰는 공간</div>
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">{{ articleNo }}번글 제목</h4>
        <p class="card-text">글 내용이 나와요</p>
        <router-link :to="{ name: 'board3' }">목록</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
