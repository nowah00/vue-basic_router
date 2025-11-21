import { createRouter, createWebHistory } from 'vue-router';

// Main
import HomeView from '../views/HomeView.vue';

// Router01
import BoardList1 from '@/components/router01/BoardList.vue';
import FileList1 from '@/components/router01/FileList.vue';
import PictureList1 from '@/components/router01/PictureList.vue';

// Router02
import BoardList2 from '@/components/router02/BoardList.vue';
import BoardDetail2 from '@/components/router02/BoardDetail.vue';

// Router03
import BoardList3 from '@/components/router03/BoardList.vue';
import BoardDetail3 from '@/components/router03/BoardDetail.vue';

// Router04
import BoardList4 from '@/components/router04/BoardList.vue';
import BoardDetail4 from '@/components/router04/BoardDetail.vue';

// Router05
import TheBoardView from '@/views/TheBoardView.vue';
import BoardList5 from '@/components/router05/BoardList.vue';
import BoardDetail5 from '@/components/router05/BoardDetail.vue';
import BoardWrite5 from '@/components/router05/BoardWrite.vue';
import BoardModify5 from '@/components/router05/BoardModify.vue';

// Router06
import TheBoardView6 from '@/views/TheBoardView6.vue';
import BoardList6 from '@/components/router06/BoardList.vue';
import BoardDetail6 from '@/components/router06/BoardDetail.vue';

// Router07
import TheBoardView7 from '@/views/TheBoardView7.vue';
import BoardList7 from '@/components/router07/BoardList.vue';
import BoardDetail7 from '@/components/router07/BoardDetail.vue';
import BoardWrite7 from '@/components/router07/BoardWrite.vue';
import BoardModify7 from '@/components/router07/BoardModify.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    // ================
    // ===== Main =====
    // ================
    {
      path: '/',
      name: 'main',
      component: HomeView,
    },
    // ====================
    // ===== Router01 =====
    // ====================
    {
      path: '/r01/board',
      component: BoardList1,
    },
    {
      path: '/r01/file',
      component: FileList1,
    },
    {
      path: '/r01/picture',
      component: PictureList1,
    },
    // ====================
    // ===== Router02 =====
    // ====================
    {
      path: '/r02/board',
      component: BoardList2,
    },
    {
      path: '/r02/board/:no',
      component: BoardDetail2,
    },
    // ====================
    // ===== Router03 =====
    // ====================
    {
      path: '/r03/board',
      // 아래 이 이름으로 링크를 가져옴
      name: 'board3',
      component: BoardList3,
    },
    {
      path: '/r03/board/:no',
      name: 'boardview3',
      component: BoardDetail3,
    },
    // ====================
    // ===== Router04 =====
    // ====================
    {
      path: '/r04/board',
      name: 'board4',
      component: BoardList4,
    },
    {
      path: '/r04/board/:no',
      name: 'boardview4',
      component: BoardDetail4,
    },
    // ====================
    // ===== Router05 =====
    // ====================
    {
      path: '/r05/board',
      name: 'board5',
      component: TheBoardView,
      // redirect: "/r05/board/list",
      redirect: { name: 'boardlist5' },
      children: [
        {
          path: 'list',
          name: 'boardlist5',
          component: BoardList5,
        },
        {
          path: 'view/:no',
          name: 'boardview5',
          component: BoardDetail5,
        },
        {
          path: 'write',
          name: 'boardwrite5',
          component: BoardWrite5,
        },
        {
          path: 'modify/:no',
          name: 'boardmodify5',
          component: BoardModify5,
        },
      ],
    },
    // ====================
    // ===== Router0 =====
    // ====================
    {
      path: '/r06/board',
      name: 'board6',
      component: TheBoardView6,
      // redirect: "/r06/board/list",
      redirect: { name: 'boardlist6' },
      children: [
        {
          path: 'list',
          name: 'boardlist6',
          component: BoardList6,
        },
        {
          path: 'view/:no',
          name: 'boardview6',
          component: BoardDetail6,
          props: true,
        },
      ],
    },
    // ====================
    // ===== Router07 =====
    // ====================
    // <적용해보기>
    {
      path: '/r07/board',
      name: 'board7',
      component: TheBoardView7,
      redirect: { name: 'boardlist7' },
      children: [
        {
          path: 'list',
          name: 'boardlist7',
          component: BoardList7,
        },
        {
          path: 'view/:no',
          name: 'boardview7',
          component: BoardDetail7,
          props: true,
        },
        {
          path: 'write',
          name: 'boardwrite7',
          component: BoardWrite7,
        },
        {
          path: 'modify/:no',
          name: 'boardmodify7',
          component: BoardModify7,
          props: true,
        },
      ],
    },
  ],
});

export default router;
