<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

// "viewArticle(article.articleNo)"이라는 함수에 no로 파라미터를 받아,
//  BoardDetail 컴포넌트를 가져옴
function viewArticle(no) {
  router.push({ name: 'boardview4', params: { no } });
}

let articles = [
  { articleNo: 5, subject: '5번글입니다.', registerTime: '30.12.31' },
  { articleNo: 4, subject: '4번글입니다.', registerTime: '30.12.30' },
  { articleNo: 3, subject: '3번글입니다.', registerTime: '30.12.29' },
  { articleNo: 2, subject: '2번글입니다.', registerTime: '30.12.28' },
  { articleNo: 1, subject: '1번글입니다.', registerTime: '30.12.27' },
];
</script>

<template>
  <div class="container text-center mt-3">
    <h1>router04(프로그래밍 방식 탐색)</h1>
    <div class="alert alert-info" role="alert">자유롭게 글쓰는 공간</div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>글번호</th>
          <th>제목</th>
          <th>작성일</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="article in articles" :key="article.articleNo">
          <td>{{ article.articleNo }}</td>
          <td>
            <!-- "viewArticle(article.articleNo)"이라는 함수로 BoardDetail 컴포넌트를 가져옴 -->
            <a @click="viewArticle(article.articleNo)">
              {{ article.subject }}
            </a>
          </td>
          <td>{{ article.registerTime }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
a:hover {
  cursor: pointer;
}
</style>
