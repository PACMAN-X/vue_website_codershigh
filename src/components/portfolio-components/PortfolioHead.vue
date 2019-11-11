<template>
  <b-container align="center">
    <img class="mb-4" :src="appstoreIcon" height="64" width="64" />
    <div>
      <h2>
        앱스토어에 등록된
        <br />수강생들의 작품들
      </h2>
      <p>
        7주라는 기간 동안 여러분은 놀라운 결과물을 만들어 낼 수도 있습니다.
        <br />모두가 세상을 바꿀 수는 없지만 바꿀 수 있는 기회는 가져야 한다고
        생각합니다. <br />여러분안에 있는 창조의 열정을 발현해 보세요.
      </p>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      appstoreIcon: require("@/assets/images/appleImages/appstore.jpg")
    };
  }
};
</script>

<style></style>
