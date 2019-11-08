<template>
  <b-row>
    <b-col
      class="mb-5"
      cols="12"
      md="3"
      v-for="university in universities"
      :key="university.id"
      align="center"
    >
      <img class="img-responsive mb-3" :src="university.image" alt />
      <p>{{ university.name }}</p>
    </b-col>
  </b-row>
</template>

<script>
export default {
  data() {
    return {
      universities: [
        {
          id: 1,
          image: require("@/assets/images/clients/universities/korea.png"),
          name: "고려대학교"
        },
        {
          id: 2,
          image: require("@/assets/images/clients/universities/kwu.png"),
          name: "광운대학교"
        },
        {
          id: 3,
          image: require("@/assets/images/clients/universities/dongguk.png"),
          name: "동국대학교"
        },
        {
          id: 4,
          image: require("@/assets/images/clients/universities/sokang.png"),
          name: "서강대학교"
        },
        {
          id: 5,
          image: require("@/assets/images/clients/universities/seoulwomen.png"),
          name: "서울여자대학교"
        },
        {
          id: 6,
          image: require("@/assets/images/clients/universities/sukmyeongLogo.png"),
          name: "숙명여자대학교"
        },
        {
          id: 7,
          image: require("@/assets/images/clients/universities/wsu.png"),
          name: "우송대학교"
        },
        {
          id: 8,
          image: require("@/assets/images/clients/universities/cau.png"),
          name: "중앙대학교"
        },
        {
          id: 9,
          image: require("@/assets/images/clients/universities/jtp.png"),
          name: "제주도테크노파크"
        },
        {
          id: 10,
          image: require("@/assets/images/clients/universities/HYU.png"),
          name: "한양대학교"
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
h1,
h2,
h3,
h4,
h5,
h6,
p {
  font-weight: 700;
  font-family: "Lato", sans-serif;
}
</style>
