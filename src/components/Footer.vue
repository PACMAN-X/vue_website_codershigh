<template>
  <div class="footerBackground">
    <footer class="page-footer">
      <b-row>
        <b-col>
          <h4>회사 소개</h4>
          <div class="hline-w"></div>
          <p>
            코더스하이는 iOS/macOS 교육 콘텐츠 제작 그룹입니다.
            <br />코더들이 짜릿한 즐거움을 느끼도록 하는 것이 <br />우리의
            목표입니다.
          </p>
        </b-col>
        <b-col>
          <h4>소셜 네트워크</h4>
          <div class="hline-w"></div>
          <a :href="codershighFacebook">
            <i class="fab fa-facebook-f" style="font-size:36px"></i>
          </a>
          |
          <a :href="codershighMailchimp">
            <i class="fab fa-mailchimp" style="font-size:36px"></i>
          </a>
        </b-col>
        <b-col>
          <h4>회사 위치</h4>
          <div class="hline-w"></div>
          <p>서울시 강남구 논현로127길 13-3 태림빌딩 3층</p>
        </b-col>
      </b-row>
      <h4>2017 ⓒ CodersHigh</h4>
      <p>대표이사 윤성관 | 사업자등록번호 740-81-00581</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      codershighFacebook: "https://www.facebook.com/codershighteam",
      codershighMailchimp:
        "https://us3.campaign-archive.com/home/?u=0823b2402b36f258c57c2d2d4&id=e066983150"
    };
  }
};
</script>

<style>
.footerBackground {
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: #082236;
}
.hline-w {
  border-bottom: 1px solid #979797;
  margin-bottom: 25px;
  margin-top: 20px;
}
.footerBackground p {
  color: #bfc9d3;
  text-align: center;
  font-size: 14px;
}
.footerBackground h4 {
  color: #bfc9d3;
  text-align: center;
  font-size: 1.1rem;
}
a i {
  color: #bfc9d3;
}
a i:hover {
  color: white;
}
</style>
