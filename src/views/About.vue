<template>
  <div>
    <AboutHead></AboutHead>
    <b-container>
      <b-row class="text-center">
        <b-col>
          <h3>강사진</h3>
        </b-col>
      </b-row>
      <LecturerCard></LecturerCard>
    </b-container>
    <div style="background-color: #c1c4c9">
      <b-container>
        <b-row class="text-center">
          <b-col>
            <h3>고객사</h3>
          </b-col>
        </b-row>
        <CompanyCard></CompanyCard>
        <b-row class="text-center">
          <b-col>
            <h3>교육기관</h3>
          </b-col>
        </b-row>
        <UniversityCard></UniversityCard>
      </b-container>
    </div>
    <div style="background-color: #103f62">
      <NewsCard></NewsCard>
    </div>
  </div>
</template>

<script>
import AboutHead from "@/components/about-components/AboutHead.vue";
import LecturerCard from "@/components/about-components/LecturerCard.vue";
import CompanyCard from "@/components/about-components/CompanyCard.vue";
import UniversityCard from "@/components/about-components/UniversityCard.vue";
import NewsCard from "@/components/about-components/NewsCard.vue";
export default {
  components: {
    AboutHead,
    LecturerCard,
    CompanyCard,
    UniversityCard,
    NewsCard
  }
};
</script>

<style></style>
