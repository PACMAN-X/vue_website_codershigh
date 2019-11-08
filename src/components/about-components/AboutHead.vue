<template>
  <div style="background-color: #00b3fe">
    <b-container>
      <b-row>
        <b-col cols="12" md="6">
          <h4 class="top">코더스하이 소개</h4>
          <h1 class="medium">
            <span style="color: #ffeb8c">코더스하이</span>는
            <br />
            <span style="color: #ffeb8c">코딩하는 사람</span>을 위한
            <br />
            <span style="color: #ffeb8c">교육 콘텐츠</span> 제작 그룹입니다.
            <br />
          </h1>

          <p class="longtime">
            오랜시간 힘겨운 코딩 끝에 정상동작하는
            <br />코드를 얻어낸 희열을 느껴보세요.
          </p>
          <br />

          <h1 class="medium">
            <span style="color: #ffeb8c">코더스 하이</span>의 미션
          </h1>

          <p class="longtime">
            + 앱 프로토타입 제작 방식을 개발/공유하여 디자이너 - 프로그래머 간
            소통을 원활하게 한다.
            <br />+ 대학생들을 위한 iOS/macOS 앱 개발 교육을 통해 프로그래머로서
            사회진출을 돕는다. <br />+ 초등/중학생을 위한 코딩 (스위프트
            플레이그라운드) 교육으로 계산적 사고와 추상화 능력 배양을 돕는다.
          </p>
          <p></p>
          <b-button
            variant="warning"
            size="sm"
            href="mailto:codershigh@lingostar.co.kr?subject=CodersHigh%20웹사이트를%20통해%20연락드립니다"
            >Contact Us</b-button
          >
        </b-col>
        <b-col cols="12" md="3">
          <b-row class="justify-content-md-center">
            <img class="img-responsive" :src="logoURL" />
          </b-row>
          <b-row class="justify-content-md-center">
            <b-button
              variant="warning"
              size="sm"
              :href="logoFile"
              style="
    margin-right: 10px;
"
            >
              <i class="fa fa-arrow-circle-down" aria-hidden="true"></i>다운로드
            </b-button>
            <b-button variant="warning" size="sm" :href="logoBrandGuide">
              <i class="fa fa-arrow-circle-down" aria-hidden="true"></i>브랜드
              가이드
            </b-button>
          </b-row>
        </b-col>
        <b-col cols="12" md="3">
          <b-row class="justify-content-md-center">
            <img class="img-responsive" :src="simpleLogoURL" />
          </b-row>
          <b-row class="justify-content-md-center">
            <b-button
              class="buttonClass"
              variant="warning"
              size="sm"
              :href="simpleLogoFile"
              style="
    margin-right: 10px;
"
            >
              <i class="fa fa-arrow-circle-down" aria-hidden="true"></i>다운로드
            </b-button>
            <b-button variant="warning" size="sm" :href="simpleLogoBrandGuide">
              <i class="fa fa-arrow-circle-down" aria-hidden="true"></i>브랜드
              가이드
            </b-button>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logoURL: require("@/assets/images/codershighAssets/codersHighMain.png"),
      logoFile: "",
      logoBrandGuide: "",
      simpleLogoURL: require("@/assets/images/codershighAssets/codersHighSimple.png"),
      simpleLogoFile: "",
      simpleLogoBrandGuide: ""
    };
  }
};
</script>

<style scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 700;
  font-family: "Lato", sans-serif;
}
h1.medium {
  line-height: 1.3;
  font-size: 28px;
  color: white;
}

h4.top {
  color: white;
  margin-left: 30px;
  margin-top: 50px;
  margin-bottom: 20px;
}
p.longtime {
  font-size: 13px;
  font-family: "applesdgothicneo-light";
  line-height: 1.4;
  color: white;
}
button {
  font-size: 12px;
  margin-top: 30px;
}
.img-responsive {
  display: block;
  width: auto;
  height: 244px;
}
</style>
