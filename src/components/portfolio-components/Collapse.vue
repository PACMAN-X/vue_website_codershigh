<template>
  <div role="tablist">
    <b-card no-body class="mb-1" v-for="outcome in outcomes" :key="outcome.id">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle="outcome.title" variant="light">
          {{ outcome.title }}
        </b-button>
      </b-card-header>
      <b-collapse
        :id="outcome.title"
        visible
        accordion="my-accordion"
        role="tabpanel"
      >
        <ReportList
          class="m-3"
          v-for="report in outcome.reports"
          :report="report"
          :key="report.title"
        ></ReportList>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
import ReportList from "@/components/portfolio-components/ReportList.vue";
export default {
  components: { ReportList },
  data() {
    return {
      isOpen: true,
      outcomes: [
        {
          id: 1,
          title: "2019년",
          reports: [
            { title: "2019 여름방학 광운대학교 iOS 특강" },
            { title: "2019 1학기 연세대학교 UIC IID 학과" },
            {
              title: "2019 1학기 한양대학교 공과대학 컴퓨터/SW 전공"
            },
            { title: "2019 겨울방학 중앙대 iOS 특강" },
            { title: "2019 겨울방학 동국대 iOS 특강" }
          ]
        },
        {
          id: 2,
          title: "2018년",
          reports: [
            { title: "2018 여름방학 중앙대 iOS 특강" },
            { title: "2018 여름방학 고려대학교 iOS 특강" },
            { title: "2018 여름방학 서울여대 iOS 특강" },
            { title: "2018 1학기 한양대학교 공과대학 컴퓨터/SW 전공" },
            { title: "2018 겨울방학 중앙대학교 iOS 특강" },
            { title: "2018 겨울방학 고려대학교 iOS 특강" },
            { title: "2018 겨울방학 동국대학교 iOS 특강" }
          ]
        },
        {
          id: 3,
          title: "2017년",
          reports: [
            { title: "2017 2학기 서울대학교 정보문화학과" },
            { title: "2017 여름방학 고려대학교 iOS 특강" },
            { title: "2017 여름방학 중앙대학교 iOS 특강" },
            { title: "2017 1학기 한양대학교 공과대학 컴퓨터/SW 전공" },
            { title: "2017 1학기 서울대학교 정보문화학과" },
            { title: "2017 1학기 연세대학교 UIC IID 학과" },
            { title: "2017 겨울방학 고려대학교 iOS 특강" },
            { title: "2017 겨울방학 중앙대학교 iOS 특강" }
          ]
        },
        {
          id: 4,
          title: "2016년",
          reports: [
            { title: "2016 2학기 서울대학교 정보문화학과" },
            { title: "2016 2학기 한양대학교 공과대학 컴퓨터/SW 전공" },
            { title: "2016 2학기 연세대학교 UIC IID 학과" },
            { title: "2016 2학기 동국대학교 멀티미디어학과" },
            { title: "2016 1학기 서울대학교 정보문화학과" },
            { title: "2016 겨울방학 고려대학교 iOS 특강" }
          ]
        }
      ]
    };
  }
};
</script>

<style></style>
