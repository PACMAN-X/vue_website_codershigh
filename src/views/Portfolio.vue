<template>
  <div>
    <PortfolioHead></PortfolioHead>
    <div style="background-color: #f5f5f5">
      <b-container>
        <b-row>
          <b-col class="center-block">
            <p align="center" style="color:#949494">student Products</p>
            <h3 align="center">수강생들의 작품들</h3>
            <AppStoreCard></AppStoreCard>
            <div align="center">
              <router-link :to="{ name: 'appStoreShow' }">
                <b-button style="background-color: #384452;color:white;"
                  >결과물 더보기</b-button
                >
              </router-link>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <b-container>
      <b-row>
        <b-col>
          <h3 align="center">코더스하이 교육결과 보고서</h3>
          <Collapse></Collapse>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import PortfolioHead from "@/components/portfolio-components/PortfolioHead.vue";
import AppStoreCard from "@/components/portfolio-components/AppStoreCard.vue";
import Collapse from "@/components/portfolio-components/Collapse.vue";

export default {
  components: {
    PortfolioHead,
    AppStoreCard,
    Collapse
  }
};
</script>

<style></style>
