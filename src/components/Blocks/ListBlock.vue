<template>
  <div>
    <h3 style="font-size: 36px;">{{ blogName }}</h3>
    <div class="hline"></div>
    <div v-if="blogName == '교육결과물'">
      <ReportList
        v-for="article in articles[blogName]"
        :key="article.id"
        :report="article"
      ></ReportList>
    </div>
    <div v-else>
      <BlogCard
        v-for="article in articles[blogName]"
        :key="article.id"
        :article="article"
      ></BlogCard>
    </div>
  </div>
</template>

<script>
import BlogCard from "@/components/blog-components/BlogCard.vue";
import ReportList from "@/components/portfolio-components/ReportList.vue";
export default {
  components: {
    BlogCard,
    ReportList
  },
  props: {
    blogName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      articles: {
        교육블로그: [
          {
            id: 1,
            title: "회고: 지금까지의 인스티튜트들 by 윤성관",
            url:
              "https://codershigh.dscloud.biz/edublogs/eb_003_ade_flashback/eb003_script.html"
          },
          {
            id: 2,
            title: "ADE Global Institute 2018 Austin을 다녀와서 by 윤성관",
            url:
              "https://codershigh.dscloud.biz/edublogs/eb_002_ade_austin/eb002_script.html"
          },
          {
            id: 3,
            title: "코더스하이 커리큘럼 회의 리뷰 by 윤성관",
            url:
              "https://codershigh.dscloud.biz/edublogs/eb_001_chc005review/eb001_script.html"
          }
        ],
        기술블로그: [
          {
            id: 4,
            title: "TJBot IBM Dev Day by 윤성관",
            url:
              "https://codershigh.dscloud.biz/techblogs/tb_010_IBMDevDay/tb0010_script.html"
          },
          {
            id: 5,
            title: "UISearchController로 검색 개발하기 by 송동욱",
            url:
              "https://codershigh.dscloud.biz/techblogs/tb_009_UISearchController/tb009_script.html"
          },
          {
            id: 6,
            title: "3d 스크롤이 가능한 태그 클라우드 만들기 by 김소연",
            url:
              "https://codershigh.dscloud.biz/techblogs/tb_008_tagCloud/tb008_script.html"
          },
          {
            id: 7,
            title:
              "네이버 오픈 API를 이용한 영화 검색 애플리케이션 만들기 by 김수진",
            url:
              "https://codershigh.dscloud.biz/techblogs/tb_007_movieSearcher/tb007_script.html"
          },
          {
            id: 8,
            title: "플레이그라운드 북 만들기 by 윤성관",
            url:
              "https://codershigh.dscloud.biz/techblogs/tb_005_playgroundbook/tb005_script.html"
          },
          {
            id: 9,
            title: "Firebase를 이용하여 Timeline만들기 by 박병욱",
            url:
              "https://codershigh.dscloud.biz/techblogs/tb_004_firebaseTimeline/tb004_script.html"
          },
          {
            id: 10,
            title: "Firebase를 이용하여 채팅창 만들기 by 박현수",
            url:
              "https://codershigh.dscloud.biz/techblogs/tb_003_firebaseChat/tb003_script.html"
          },
          {
            id: 11,
            title: "ReplayKit을 이용해 여행 떠나기 by 유준영",
            url:
              "https://codershigh.dscloud.biz/techblogs/tb_002_replykit/tb002_script.html"
          },
          {
            id: 12,
            title: "메시지 익스텐션을 이용한 Calendar-Vot 제작기",
            url:
              "https://codershigh.dscloud.biz/techblogs/tb_001_calendarvot/tb001_script.html"
          }
        ],
        교육결과물: [
          {
            id: 13,
            title: "2019 여름방학 광운대학교 iOS 특강",
            url: ""
          },
          {
            id: 14,
            title: "2019 1학기 연세대학교 UIC IID 학과",
            url: ""
          },
          {
            id: 15,
            title: "2019 겨울방학 중앙대 iOS 특강",
            url: ""
          },
          {
            id: 16,
            title: "2019 겨울방학 동국대 iOS 특강",
            url: ""
          },
          {
            id: 17,
            title: "2018 여름방학 중앙대 iOS 특강",
            url: ""
          },
          {
            id: 18,
            title: "2018 여름방학 고려대 iOS 특강",
            url: ""
          },
          {
            id: 19,
            title: "2018 여름방학 서울여대 iOS 특강",
            url: ""
          },
          {
            id: 20,
            title: "결과물 더 보기",
            url: "/portfolio"
          }
        ]
      }
    };
  }
};
</script>

<style></style>
