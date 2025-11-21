<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref, onMounted } from "vue";

const router = useRouter();
const route = useRoute();

let articleNo = ref(0);

onMounted(() => {
  articleNo.value = route.params.no;
});
</script>

<template>
  <div class="text-start">
    <form action="">
      <div class="mb-3 mt-3">
        <label for="email" class="form-label">제목:</label>
        <input
          type="text"
          class="form-control"
          id="subject"
          :value="articleNo + '번글제목이 온다'"
          name="subject"
        />
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">내용:</label>
        <textarea class="form-control" rows="5" id="content" name="content">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eum aliquid ab cum commodi eaque tempora saepe rerum labore obcaecati!</textarea
        >
      </div>
      <button type="button" class="btn btn-outline-dark btn-sm">글수정</button>
      <button
        type="button"
        @click="router.push({ name: 'board5' })"
        class="btn btn-outline-success btn-sm ms-2"
      >
        글목록
      </button>
    </form>
  </div>
</template>

<style scoped></style>
