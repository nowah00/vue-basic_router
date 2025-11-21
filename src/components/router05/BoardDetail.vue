<script setup>
import { useRouter, useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';

const router = useRouter();
const route = useRoute();

let articleNo = ref(0);

// onMounted() : DOM이 완전히 렌더링된 다음에 실행되는 코드 넣는 곳.
onMounted(() => {
  articleNo.value = route.params.no;
});
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">{{ articleNo }}번글 제목</h4>
      <p class="card-text">글 내용이 나와요</p>
      <button
        type="button"
        @click="router.push({ name: 'board5' })"
        class="btn btn-outline-success btn-sm"
      >
        글목록
      </button>
      <button
        type="button"
        @click="
          router.push({ name: 'boardmodify5', params: { no: articleNo } })
        "
        class="btn btn-outline-dark btn-sm ms-2"
      >
        글수정
      </button>
    </div>
  </div>
</template>

<style scoped>
a:hover {
  cursor: pointer;
}
</style>
