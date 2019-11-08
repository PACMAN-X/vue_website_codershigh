<template>
  <div>
    <MainBlock></MainBlock>
    <CardNews></CardNews>
    <CurriculumBlock></CurriculumBlock>
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-6">
          <StudentCarouselBlock></StudentCarouselBlock>
        </div>
        <div class="col-12 col-sm-6">
          <ListBlock blogName="교육결과물"></ListBlock>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-sm-6">
          <ListBlock blogName="기술블로그"></ListBlock>
        </div>
        <div class="col-12 col-sm-6">
          <ListBlock blogName="교육블로그"></ListBlock>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardNews from "@/components/home-components/CardNews.vue";
import StudentCarouselBlock from "@/components/Blocks/StudentCarouselBlock.vue";
import ListBlock from "@/components/Blocks/ListBlock.vue";
import CurriculumBlock from "@/components/Blocks/CurriculumBlock.vue";
import MainBlock from "@/components/Blocks/MainBlock.vue";

export default {
  components: {
    CardNews,
    StudentCarouselBlock,
    ListBlock,
    CurriculumBlock,
    MainBlock
  }
};
</script>

<style>
.hline {
  border-bottom: 2px solid #384452;
}
</style>
