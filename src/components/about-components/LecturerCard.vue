<template>
  <b-row>
    <b-col cols="12" md="3" v-for="lecturer in lecturers" :key="lecturer.id">
      <b-card
        :title="lecturer.name"
        :sub-title="lecturer.nickName"
        :img-src="lecturer.image"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-5"
        align="center"
        sub-title-text-variant="info"
      >
        <b-card-text>{{ lecturer.career1 }}</b-card-text>
        <b-card-text>{{ lecturer.career2 }}</b-card-text>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
export default {
  data() {
    return {
      lecturers: [
        {
          id: 1,
          image: require("@/assets/images/teamImages/team_lingostar.jpg"),
          name: "윤성관",
          nickName: "lingostar",
          career1: " Distinguished Educator",
          career2: "한양대학교 겸임교수"
        },
        {
          id: 2,
          image: require("@/assets/images/teamImages/team_devkang.jpg"),
          name: "강희종",
          nickName: "devkang",
          career1: "(주)카루랩 CTO",
          career2: "iOS / Web Developer"
        },
        {
          id: 3,
          image: require("@/assets/images/teamImages/team_goya.jpg"),
          name: "고준일",
          nickName: "goya",
          career1: "모카포트 대표",
          career2: "(전)호서대 겸임교수"
        },
        {
          id: 4,
          image: require("@/assets/images/teamImages/team_gwang.jpg"),
          name: "김광호",
          nickName: "활어광어",
          career1: "Apple & TED & NG Educator",
          career2: "미래교실네트워크 / 거꾸로캠퍼스 교사"
        },
        {
          id: 5,
          image: require("@/assets/images/teamImages/team_pacman.jpg"),
          name: "김태선",
          nickName: "pacman",
          career1: " Professional Learning Specialist",
          career2: "(전) NHN Connect "
        },
        {
          id: 6,
          image: require("@/assets/images/teamImages/team_black.jpg"),
          name: "남장혁",
          nickName: "black",
          career1: "코더스하이 강사"
        },
        {
          id: 7,
          image: require("@/assets/images/teamImages/team_mocona.jpg"),
          name: "박종영",
          nickName: "mocona",
          career1: "이바닥닷컴 대표"
        },
        {
          id: 8,
          image: require("@/assets/images/teamImages/team_wannabewize.jpg"),
          name: "이재훈",
          nickName: "wannabewize",
          career1: "T 아카데미 iOS 강사",
          career2: "VanillaStep 대표"
        }
      ]
    };
  }
};
</script>

<style scoped>
.img-responsive {
  display: block;
  width: auto;
  height: 244px;
}
.card {
  height: 90%;
}
</style>
