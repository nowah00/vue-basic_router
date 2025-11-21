<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';

const router = useRouter();
let articleNo = ref(0);

const props = defineProps({ no: String });

function moveBoard() {
  router.push({ name: 'board7' });
}
function moveBoardModify() {
  router.push({ name: 'boardmodify7', params: { no: articleNo.value } });
}

onMounted(() => {
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
        @click="moveBoard"
        class="btn btn-outline-success btn-sm"
      >
        글목록
      </button>
      <button
        type="button"
        @click="moveBoardModify"
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
