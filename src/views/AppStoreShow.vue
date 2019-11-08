<template>
  <div style="background-color: #f5f5f5">
    <b-container>
      <p align="center" style="color:#949494">student Products</p>
      <h3 align="center">수강생들의 작품들</h3>
      <AppStoreCard></AppStoreCard>
    </b-container>
  </div>
</template>

<script>
import AppStoreCard from "@/components/portfolio-components/AppStoreCard.vue";
export default {
  components: {
    AppStoreCard
  }
};
</script>

<style></style>
