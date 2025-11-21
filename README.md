# 프로젝트를 통한 한 눈에 보는 Router

> study/front/day05/router/vue-basic

---

## 1. createRouter, createWebHistory ??

```jsx
import { createRouter, createWebHistory } from 'vue-router';
```

`index.js`에서 먼저 위 코드를 import 한다. createRouter, createWebHistory는 무엇일까?

<aside>

### createRouter

---

→ 라우터를 만든다

- “라우터 본체를 만드는 함수”
- vue 앱에서 페이지 이동을 관리하는 라우터 객체를 만든다.
- `main.js`에 꽂아줘야한다. `app.use(router);`
</aside>

<aside>

### createWebHistory

---

→ 브라우저 주소창처럼 동작하는 히스토리 모드로 만든다

- “브라우저 주소창 방식의 히스토리 사용”
- 브라우저가 원래 가지고 있는 “뒤로가기/앞으로가기” 히스토리를
  SPA에서도 그대로 쓰게 해줌.
- #/board ⇒ /board
</aside>

## 2. Router의 방식

### Router01_Router의 기본

---

1. `index.js`에서 라우팅할 컴포넌트들을 등록해줘야한다.

```jsx
// Main 컴포넌트
import HomeView from '../views/HomeView.vue';

// Router01에 해당하는 컴포넌트
import BoardList1 from '@/components/router01/BoardList.vue';
import FileList1 from '@/components/router01/FileList.vue';
import PictureList1 from '@/components/router01/PictureList.vue';
```

1. `index.js`에서 router 객체에 컴포넌트의 path와 name, component를 설정한다.

```jsx
    // ===== Main =====
    {
      path: '/',
      name: 'main',
      component: HomeView,
    },

    // ===== Router01 =====
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
```

1. `App.vue`에서 `TheHeadingNavbar.vue`를 통해 ‘Home’ 클릭하면, router-link to="/" 해당 path의 컴포넌트를 `App.vue`의 <router-view> 영역에 띄운다.

```jsx
<template>
  <div>
    <TheHeadingNavbar />
    <router-view></router-view>
  </div>
</template>
```

```jsx
<li>
  <router-link to="/" class="dropdown-item">
    <DropDownIconMenuSlot>
      <template v-slot:icon>
        <IconHome></IconHome>
      </template>
      <template v-slot:label> Home </template>
    </DropDownIconMenuSlot>
  </router-link>
</li>
```

### Router02\_동적 경로 매칭

---

`BoardList.vue`에서 키를 articleNo로 지정하여 값을 `BoardDetail.vue` 컴포넌트에 넘겨서 띄운다.

```jsx
<router-link :to="`/r02/board/${article.articleNo}`">{{
              article.subject
            }}</router-link>
```

### Router03\_이름이 있는 라우트

---

기존에 아래 코드처럼 <router-link>를 가져왔다면,

```jsx
<router-link to="/" class="dropdown-item">
```

이름으로 가져오는 코드는 아래 코드와 같다.

```jsx
<router-link :to="{ name: 'main' }" class="dropdown-item">
```

이 방법은 `index.js`에서 name을 지정해줘야 가능하다.

```jsx
 // ===== Main =====
    {
      path: '/',
      name: 'main', // 이거!
      component: HomeView,
    },
```

### Router04\_프로그래밍 방식 탐색

---

Route04는 Route03에서 Template에서 바로 가져오는 방식과 다르게

```jsx
<router-link :to="{ name: 'main' }" class="dropdown-item">
```

클릭시 함수를 실행되게 하여

```jsx
<a @click="moveMain()" class="dropdown-item">
	<DropDownIconMenuSlot>
		<template v-slot:icon>
			<IconHome></IconHome>
		</template>
		<template v-slot:label> Home </template>
	</DropDownIconMenuSlot>
</a>
```

router 객체를 통해 보내는 방법이다. (주로 메서드로 이름을 통해 가져오는 방식을 많이 채택한다.)

```jsx
function moveMain() {
  router.push({ name: 'main' });
}
```

### Router05\_중첩된 라우트

---

index.js를 먼저 보자.

```jsx
{
      path: '/r05/board',
      name: 'board5',
      component: TheBoardView,
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
```

위 코드를 보면 `TheBoardView.vue`를 부모 컴포넌트로 지정하고, 아래 4개의 컴포넌트를 자식 컴포넌트로 지정해놓았다. redirect에 `BoardList5`가 지정되어 있는데, 저 코드의 뜻은 아래와 같다.

App.vue와 비슷하게 `TheBoardView.vue` 또한 <route-view> 영역이 있는데,

```jsx
<template>
  <div class="container text-center mt-3">
    <h1>router05(중첩된 라우트)</h1>
    <div class="alert alert-info" role="alert">
      자유롭게 글쓰는 공간
    </div>
    <router-view></router-view>
  </div>
</template>
```

저 영역에 바로 `BoardList5`컴포넌트를 가져오겠다는 말이다. 그래서 `TheBoardView.vue`를 처음 가져올때 `BoardList5`컴포넌트를 함께 가져온다.

→ 정리하면 App.vue에 `TheHeadingNavbar.vue` 컴포넌트를 통해 `TheBoardView.vue` 컴포넌트를 가져오고, `TheBoardView.vue` 컴포넌트를 통해 자식 컴포넌트를 가져온다.

### Router06_props로 데이터 전달

---

Router05와 Router06은 List에서 Detail로 넘어가서 데이터를 받을때 차이가 있다.

```jsx
// Router05
onMounted(() => {
  articleNo.value = route.params.no;
});
```

```jsx
// Router06
const props = defineProps({ no: String });

onMounted(() => {
  articleNo.value = props.no;
});
```

Router05는 url을 통해 파라미터값을 가져와서 사용하고, Router06은 props 객체의 no값을 넣어서 사용한다.

→ 이 말은 Router05는 url로만 파라미터값을 전달받을 수 있어 index.js 구조가 바뀔때마다 수정을 해줘야한다.

→ Router06은 props 객체에 값만 어떻게든 들어온다면 쓸 수 있다. `<TheBoardView6 no="10" />` 이 방법도 가능하다.

<aside>

**route.params 방식**

> URL에 의존해서 값이 들어오기 때문에 재사용은 어렵지만, 라우터 기반으로 동작할 때는 간단하고 빠르다.

---

**props 방식**

> URL과 상관없이 값만 주면 어디서든 재사용 가능해서 확장성과 유지보수성이 훨씬 좋다.

</aside>
