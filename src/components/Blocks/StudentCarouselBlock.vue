<template>
  <div>
    <h3 style="font-size: 36px;">수강생 결과물</h3>

    <div>
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        fade
        indicators
        img-width="1024"
        img-height="480"
      >
        <b-carousel-slide :img-src="firstImageURL"></b-carousel-slide>
        <b-carousel-slide :img-src="secondImageURL"></b-carousel-slide>
        <b-carousel-slide :img-src="thirdImageURL"></b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstImageURL: require("@/assets/images/carousel/item1.jpg"),
      secondImageURL: require("@/assets/images/carousel/item2.jpg"),
      thirdImageURL: require("@/assets/images/carousel/item3.jpg")
    };
  }
};
</script>

<style></style>
