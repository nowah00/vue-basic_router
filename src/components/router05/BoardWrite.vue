<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="text-start">
    <form action="">
      <div class="mb-3 mt-3">
        <label for="email" class="form-label">제목:</label>
        <input type="text" class="form-control" id="subject" placeholder="제목..." name="subject" />
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">내용:</label>
        <textarea class="form-control" rows="5" id="content" name="content"></textarea>
      </div>
      <button type="button" class="btn btn-outline-primary btn-sm">글쓰기</button>
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
