<template>
  <b-row>
    <b-col
      class="mb-4"
      cols="12"
      md="3"
      v-for="company in companies"
      align="center"
      :key="company.id"
    >
      <img class="img-responsive" :src="company.image" />
    </b-col>
  </b-row>
</template>

<script>
export default {
  data() {
    return {
      companies: [
        {
          id: 1,
          image: require("@/assets/images/clients/companies/Apple.png")
        },
        {
          id: 2,
          image: require("@/assets/images/clients/companies/LINE.png")
        },
        {
          id: 3,
          image: require("@/assets/images/clients/companies/SAP.png")
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
  height: 100px;
}
</style>
