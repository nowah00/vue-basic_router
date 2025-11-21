<script setup>
import { useRouter, useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';

// 궁금증: router과 route의 차이는?
// router : “페이지를 이동시키고, 라우터 설정 전체를 다룰 때 사용” -> “지금 말고 다른 페이지로 가라!”
// route : “현재 라우트의 상태 정보” → 지금 보고 있는 페이지 관련 데이터 -> “지금 네가 있는 페이지 정보는 이거야.”
const router = useRouter();
const route = useRoute();

let articleNo = ref(0);

onMounted(() => {
  console.log(router); // router 전체의 정보
  console.log(route); // 현재 호출된 해당 라우트의 정보 (Proxy)
  console.log(route.path); // 현재 호출된 라우트의 경로
  console.log(route.query); // 쿼리 정보
  console.log(route.params); // 파라미터 정보
  articleNo.value = route.params.no;
});
</script>

<template>
  <div class="container text-center mt-3">
    <h1>router02(파라미터를 사용한 동적 경로 매칭)</h1>
    <div class="alert alert-info" role="alert">자유롭게 글쓰는 공간</div>
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">{{ articleNo }}번글 제목</h4>
        <p class="card-text">글 내용이 나와요</p>
        <!-- 다시 리스트를 App.vue의 router-link에 띄움 -->
        <router-link to="/r02/board">목록</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
