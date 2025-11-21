<script setup>
import { RouterLink, useRouter } from 'vue-router';
import IconHome from '@/components/icons/IconHome.vue';
import IconBoard from '@/components/icons/IconBoard.vue';
import IconPicture from '@/components/icons/IconPicture.vue';
import IconFile from '@/components/icons/IconFile.vue';
import DropDownIconMenuSlot from '@/components/common/DropDownIconMenuSlot.vue';

const router = useRouter();

// Router04 함수로 컴포넌트 가져옴
function moveMain() {
  router.push({ name: 'main' });
}
function moveBoard() {
  router.push('/r04/board');
}
</script>

<template>
  <nav class="navbar navbar-expand-md bg-body-tertiary sticky-top">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">
        <img
          src="@/assets/mmcafe.png"
          class="rounded mx-auto d-block"
          id="logo"
          alt="..."
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- ==================== -->
      <!-- ===== Router01 ===== -->
      <!-- ==================== -->
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul
          class="navbar-nav me-auto my-2 my-md-0 navbar-nav-scroll"
          style="--bs-scroll-height: 100px"
        >
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Router 기본
            </a>
            <ul class="dropdown-menu">
              <!-- ex1-2)'Home' 선택시, 'router-link'의 to="/"를 [App.vue]의 'router-view'에 띄움 -->
              <li>
                <router-link to="/" class="dropdown-item">
                  <!-- 'DropDownIconMenuSlot' 만들어놓은 아이콘과 라벨 컴포넌트로 생성 -->
                  <DropDownIconMenuSlot>
                    <template v-slot:icon>
                      <IconHome></IconHome>
                    </template>
                    <template v-slot:label> Home </template>
                  </DropDownIconMenuSlot>
                </router-link>
              </li>
              <li>
                <router-link to="/r01/board" class="dropdown-item">
                  <DropDownIconMenuSlot>
                    <template v-slot:icon>
                      <IconBoard></IconBoard>
                    </template>
                    <template v-slot:label> 자유글 </template>
                  </DropDownIconMenuSlot>
                </router-link>
              </li>
              <li>
                <router-link to="/r01/picture" class="dropdown-item">
                  <DropDownIconMenuSlot>
                    <template v-slot:icon>
                      <IconPicture></IconPicture>
                    </template>
                    <template v-slot:label> 사진자랑 </template>
                  </DropDownIconMenuSlot>
                </router-link>
              </li>
              <li>
                <router-link to="/r01/file" class="dropdown-item">
                  <DropDownIconMenuSlot>
                    <template v-slot:icon>
                      <IconFile></IconFile>
                    </template>
                    <template v-slot:label> 파일공유 </template>
                  </DropDownIconMenuSlot>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- ==================== -->
      <!-- ===== Router02 ===== -->
      <!-- ==================== -->
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul
          class="navbar-nav me-auto my-2 my-md-0 navbar-nav-scroll"
          style="--bs-scroll-height: 100px"
        >
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              동적경로매칭
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link to="/r02/board" class="dropdown-item">
                  <DropDownIconMenuSlot>
                    <template v-slot:icon>
                      <IconBoard></IconBoard>
                    </template>
                    <template v-slot:label> 자유글 </template>
                  </DropDownIconMenuSlot>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- ==================== -->
      <!-- ===== Router03 ===== -->
      <!-- ==================== -->
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul
          class="navbar-nav me-auto my-2 my-md-0 navbar-nav-scroll"
          style="--bs-scroll-height: 100px"
        >
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              이름이있는라우트
            </a>
            <ul class="dropdown-menu">
              <li>
                <!-- 원래는 to="/" 였는데, {name:'main'} 이름으로 컴포넌트를 가져옴 -->
                <!-- 이름은 index.js에서 name: ? 으로 명시한 것을 씀 -->
                <router-link :to="{ name: 'main' }" class="dropdown-item">
                  <DropDownIconMenuSlot>
                    <template v-slot:icon>
                      <IconHome></IconHome>
                    </template>
                    <template v-slot:label> Home </template>
                  </DropDownIconMenuSlot>
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'board3' }" class="dropdown-item">
                  <DropDownIconMenuSlot>
                    <template v-slot:icon>
                      <IconBoard></IconBoard>
                    </template>
                    <template v-slot:label> 자유글 </template>
                  </DropDownIconMenuSlot>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- ==================== -->
      <!-- ===== Router04 ===== -->
      <!-- ==================== -->
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul
          class="navbar-nav me-auto my-2 my-md-0 navbar-nav-scroll"
          style="--bs-scroll-height: 100px"
        >
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              프로그래밍방식탐색
            </a>
            <ul class="dropdown-menu">
              <li>
                <!-- "moveMain()"이라는 함수로 Main 컴포넌트를 가져옴 -->
                <a @click="moveMain()" class="dropdown-item">
                  <DropDownIconMenuSlot>
                    <template v-slot:icon>
                      <IconHome></IconHome>
                    </template>
                    <template v-slot:label> Home </template>
                  </DropDownIconMenuSlot>
                </a>
              </li>
              <li>
                <a @click="moveBoard()" class="dropdown-item">
                  <DropDownIconMenuSlot>
                    <template v-slot:icon>
                      <IconBoard></IconBoard>
                    </template>
                    <template v-slot:label> 자유글 </template>
                  </DropDownIconMenuSlot>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- ==================== -->
      <!-- ===== Router05 ===== -->
      <!-- ==================== -->
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul
          class="navbar-nav me-auto my-2 my-md-0 navbar-nav-scroll"
          style="--bs-scroll-height: 100px"
        >
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              중첩된라우트
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link :to="{ name: 'main' }" class="dropdown-item">
                  <DropDownIconMenuSlot>
                    <template v-slot:icon>
                      <IconHome></IconHome>
                    </template>
                    <template v-slot:label> Home </template>
                  </DropDownIconMenuSlot>
                </router-link>
              </li>
              <li>
                <!-- 
                index.js를 보면 'views/TheBoardView.vue' 컴포넌트를 띄우고,
                redirect를 BoardList로 설정하여 바로 'BoardList.vue' 컴포넌트를 띄움
                이때, TheBoardView 아래 띄우는 컴포넌트들은 TheBoardView의 자식 컴포넌트로 설정해야함.(index.js에서) 
                -->
                <router-link :to="{ name: 'board5' }" class="dropdown-item">
                  <DropDownIconMenuSlot>
                    <template v-slot:icon>
                      <IconBoard></IconBoard>
                    </template>
                    <template v-slot:label> 자유글 </template>
                  </DropDownIconMenuSlot>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- ==================== -->
      <!-- ===== Router06 ===== -->
      <!-- ==================== -->
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul
          class="navbar-nav me-auto my-2 my-md-0 navbar-nav-scroll"
          style="--bs-scroll-height: 100px"
        >
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              props로 데이터전달
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link :to="{ name: 'main' }" class="dropdown-item">
                  <DropDownIconMenuSlot>
                    <template v-slot:icon>
                      <IconHome></IconHome>
                    </template>
                    <template v-slot:label> Home </template>
                  </DropDownIconMenuSlot>
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'board6' }" class="dropdown-item">
                  <DropDownIconMenuSlot>
                    <template v-slot:icon>
                      <IconBoard></IconBoard>
                    </template>
                    <template v-slot:label> 자유글 </template>
                  </DropDownIconMenuSlot>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
#logo {
  width: 9.375rem;
}
</style>
