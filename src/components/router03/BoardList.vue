<script setup>
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
    <h1>router03(이름이 있는 라우트)</h1>
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
            <!-- 기존에는 아래와 같이 파라매터를 넘겼는데, 이름으로 가져올때는 파라미터를 지정 -->
            <!-- <router-link :to="`/r02/board/${article.articleNo}`"> -->
            <router-link
              :to="{ name: 'boardview3', params: { no: article.articleNo } }"
            >
              {{ article.subject }}
            </router-link>
            <!-- <a @click="router.push({ name: 'boardview3', params: { no: article.articleNo } })">
              {{ article.subject }}
            </a> -->
          </td>
          <td>{{ article.registerTime }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
