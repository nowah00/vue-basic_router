<script setup>
import { useRouter, useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';

const router = useRouter();
const route = useRoute();

const props = defineProps({ no: String });

let articleNo = ref(0);

// 라우터와 UI의 역할을 깔끔하게 분리하기 위함
// props를 썼을때, route.params보다 좋은 이유
// route를 썼을때는 index.js에 명시해놓은 루트대로만 가능하지만,
// props를 썼을때는 어디서든 값만 넘겨받으면 되기 때문에 재사용성과 유지보수가 쉬워짐
onMounted(() => {
  console.log('route.params.no :: ' + route.params.no);
  articleNo.value = props.no;
});
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">{{ articleNo }}번글 제목</h4>
      <p class="card-text">글 내용이 나와요</p>
      <button
        type="button"
        @click="router.push({ name: 'board6' })"
        class="btn btn-outline-success btn-sm"
      >
        글목록
      </button>
      <button
        type="button"
        @click="
          router.push({ name: 'boardmodify6', params: { no: articleNo } })
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
