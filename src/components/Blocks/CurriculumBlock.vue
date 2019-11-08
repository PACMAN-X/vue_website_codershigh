<template>
  <div class="background-curriculum">
    <b-container>
      <b-row>
        <b-col
          class="text-center mt-3"
          v-for="level in levels"
          :key="level.id"
          cols="12"
          md="4"
        >
          <i :class="level.icon" style="font-size:25px; color: #00b3fe;;"></i>
          <h4 class="mt-3">{{ level.title }}</h4>
          <p>{{ level.description }}</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      levels: [
        {
          id: 1,
          icon: "fa fa-paper-plane",
          title: "코딩 걸음마",
          description:
            "누군가에게 코딩은 막연한 두려움일 수 있습니다.조건문과 반복문, 변수와 상수를 코딩 게임을 통해 배워보세요.초등학생부터 대학생까지, 수준에 맞는 게임과 퀴즈가 준비되어 있답니다."
        },
        {
          id: 2,
          icon: "fa fa-plane",
          title: "프로토타입 만들기",
          description:
            "앱의 아이디어를 정리하고 구체적인 UI를 구동하기 위해서 코딩 지식은 필요 없습니다. 인터페이스 가이드라인을 익히고 빠르게 프로토타입을 만들어 앱 개발을 위한 준비를 하세요. 프로토타입이 발전해 감에 따라 앱 개발 능력도 함께 발전합니다."
        },
        {
          id: 3,
          icon: "fa fa-space-shuttle",
          title: "앱 개발 프로젝트",
          description:
            "앱의 아이디어를 프로토타입으로 표현할 수 있고, 기초적인 코딩 지식이 있다면, 이제 진짜 앱을 만들어 낼 수 있습니다.팀을 이뤄 작업하는 앱 개발 프로젝트를 통해 혼자서는 할 수 없는 수준의 앱을 만들어 보세요."
        }
      ]
    };
  }
};
</script>

<style>
.background-curriculum {
  background-color: #f5f5f5;
}
</style>
