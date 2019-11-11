<template>
  <div class="background-curriculum">
    <b-container>
      <b-row>
        <b-col
          class="text-left mt-3"
          v-for="level in levels"
          :key="level.id"
          cols="12"
          md="4"
        >
          <h4>
            {{ level.step }}
            <br />
            {{ level.title }}
          </h4>
          <p v-html="level.description"></p>
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
          step: "STEP 1",
          title: "코딩 걸음마",
          description: "누구에게나 코딩은 막연한 두려움일 수 \n 있습니다.조건문과 반복문, 변수와 상수를 \n 코딩 게임을 통해 배워보세요.초등학생부터 \n 대학생까지, 수준에 맞는 게임과 퀴즈가 \n 준비되어 있답니다. 하나씩 해결해가다 보면 \n 두려움은 점점 호기심으로 변할 거예요."
            .split("\n")
            .join("<br />")
        },
        {
          id: 2,
          step: "STEP 2",
          title: "프로토타입 만들기",
          description: "앱의 아이디어를 정리하고 구체적인 UI를 \n 구동하기 위해서 코딩 지식은 필요 없습니다. \n 인터페이스 가이드라인을 익히고 빠르게 \n 프로토타입을 만들어 앱 개발을 위한 준비를 \n 하세요. 프로토타입이 발전해 감에 따라 앱 \n 개발 능력도 함께 발전합니다."
            .split("\n")
            .join("<br />")
        },
        {
          id: 3,
          step: "STEP 3",
          title: "앱 개발 프로젝트",
          description: "앱의 아이디어를 프로토타입으로 표현할 수 \n 있고, 기초적인 코딩 지식이 있다면, 이제 \n 진짜 앱을 만들어 낼 수 있습니다.팀을 이뤄 \n 작업하는 앱 개발 프로젝트를 통해 혼자서는 \n 할 수 없는 수준의 앱을 만들게 됩니다. \n 상상이 현실이 되는 과정을 함께하세요."
            .split("\n")
            .join("<br />")
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
