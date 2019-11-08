<template>
  <b-container>
    <b-row>
      <b-col cols="12" md="3">
        <b-img :src="outcome.appScreen" style="width: 100%"></b-img>
      </b-col>
      <b-col cols="12" md="3">
        <h3>{{ outcome.appTitle }}</h3>
        <p>{{ outcome.appComment }}</p>
        <h5>{{ outcome.students }}</h5>
      </b-col>
      <b-col cols="12" md="6">
        <h5>발표영상</h5>
        <b-embed
          class="size"
          type="iframe"
          aspect="16by9"
          :src="outcome.youTubeAddress"
          allowfullscreen
        ></b-embed>
        <b-row>
          <b-col align="center">
            <a v-show="outcome.website" :href="outcome.website">
              <b-img class="website" :src="images.websiteIcon"></b-img>
            </a>
            <a v-show="outcome.appStoreAddress" :href="outcome.appStoreAddress">
              <b-img class="appstore" :src="images.appStore"></b-img>
            </a>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <hr style="margin-top: 20px;border-top-width: 3px;margin-bottom: 50px;" />
  </b-container>
</template>

<script>
export default {
  props: {
    outcome: Object
  },
  data() {
    return {
      images: {
        websiteIcon: require("@/assets/images/etc/websitelink.png"),
        appStore: require("@/assets/images/appleImages/app-store.png")
      }
    };
  }
};
</script>

<style scoped>
.website {
  display: inline-block;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px 0.5px;
  margin-top: 5px;
  margin-right: 5px;
  height: 38px;
  line-height: 38px;
  padding: 7px 22px;
}
.appstore {
  margin-top: 5px;
  padding: 5px 0.5px;
  height: 48px;
}
.size {
  height: 100%;
}
</style>
