<template>
  <b-container>
    <b-row class="text-center">
      <b-col>
        <h3 style="color: white">언론 보도</h3>
      </b-col>
    </b-row>
    <b-row>
      <b-col
        cols="12"
        lg="6"
        md="4"
        align="center"
        v-for="article in articles"
        :key="article.id"
      >
        <b-card
          :header="article.title"
          header-text-variant="white"
          header-tag="header"
          header-bg-variant="dark"
          style="max-width: 20rem;"
        >
          <img :src="article.imgURL" alt />
          <b-card-body>
            <b-card-text>{{ article.description }}</b-card-text>
            <b-button v-show="article.url" :href="article.url"
              >더 알아보기</b-button
            >
            <b-button v-show="article.file" :href="article.file"
              >PDF 다운로드</b-button
            >
          </b-card-body>
          <template v-slot:footer>
            <small class="text-muted">{{ article.source }}</small>
          </template>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      articles: [
        {
          id: 1,
          imgURL: require("@/assets/images/newsImages/news1.png"),
          title: "우리는 왜 소프트웨어를 배울까?",
          source: "2017.05.24 동아사이언스",
          description:
            "코더스하이 SeongKwan Yoon 대표가 운영하는 교실에 대한 기사입니다. 현재 서울대학교에서 진행하고 있는 [앱 프로토타이핑] 과정에 대한 소개가 있습니다.",
          url: "http://dongascience.donga.com/news/view/18272"
        },
        {
          id: 2,
          imgURL: require("@/assets/images/newsImages/news2.png"),
          title: "중앙대, 'iOS 기반교육'",
          source: "2017.06.01 중앙대학교",
          description:
            "코더스하이의 중앙대학교 방학특강 과정에 대한 기사입니다.",
          file: "@/assets/images/newsImages/news2.pdf"
        }
      ]
    };
  }
};
</script>

<style scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 700;
  font-family: "Lato", sans-serif;
}
img {
  width: 100%;
}
.card {
  height: 100%;
}
</style>
