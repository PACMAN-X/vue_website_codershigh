<template>
  <b-container align="center">
    <img class="mb-4" :src="appstoreIcon" height="64" width="64" />
    <div>
      <h2>앱스토어에 등록된</h2>
      <h2>수강생들의 작품들</h2>
      <p>{{ description1 }}</p>
      <p>{{ description2 }}</p>
      <p>{{ description3 }}</p>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      appstoreIcon: require("@/assets/images/appleImages/appstore.jpg"),
      description1:
        "7주라는 기간 동안 여러분은 놀라운 결과물을 만들어 낼 수도 있습니다.",
      description2:
        "모두가 세상을 바꿀 수는 없지만 바꿀 수 있는 기회는 가져야 한다고 생각합니다.",
      description3: "여러분안에 있는 창조의 열정을 발현해 보세요."
    };
  }
};
</script>

<style></style>
