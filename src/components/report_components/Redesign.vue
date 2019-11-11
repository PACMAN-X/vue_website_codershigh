<template>
  <b-container>
    <div class="background-white">
      <div class="container">
        <b-row>
          <b-col align="center">
            <h3 class="report-subtitle" style="margin-bottom: 50px;">프로젝트 1 : 기존 앱의 reDesign</h3>
            <h4 style="margin-bottom: 100px;">iOS HIG에 기반한 앱 디자인 비판 및 reDesign</h4>
            <p style="margin-bottom: 150px;">
              현재 앱스토어에 올라가 있는 앱들 중 자주 사용하는 앱을 하나 골라
              <br />iOS Human Interface Guideline 에 기초해 사용성을 개선하는
              reDesign 프로젝트를 수행하였다.
            </p>
          </b-col>
        </b-row>

        <b-row style="margin-bottom: 100px;">
          <b-col md="6" cols="12">
            <b-row>
              <b-col md="8" cols="12">
                <iframe
                  width="340"
                  height="250"
                  src="https://www.youtube.com/embed/KE6f7daJb10"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </b-col>
              <b-col md="4" cols="12">
                <h3>팟빵</h3>
                <h4>Da In Kim</h4>
                <a class="appComment download" :href="url_1" target="_blank">Poster Image</a>
              </b-col>
            </b-row>
          </b-col>
          <b-col md="6" cols="12">
            <b-row>
              <b-col md="8" cols="12">
                <iframe
                  width="340"
                  height="250"
                  src="https://www.youtube.com/embed/Paan2VPPmrk"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </b-col>
              <b-col md="4" cols="12">
                <h3>CGV</h3>
                <h4>Philian Choi</h4>
                <a class="appComment download" :href="url_2" target="_blank">Poster Image</a>
              </b-col>
            </b-row>
          </b-col>
        </b-row>

        <!-- 2 -->
        <b-row style="margin-bottom: 100px;">
          <b-col md="6" cols="12">
            <b-row>
              <b-col md="8" cols="12">
                <iframe
                  width="340"
                  height="250"
                  src="https://www.youtube.com/embed/tBMW8XE0K-c"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </b-col>
              <b-col md="4" cols="12">
                <h3>Craigslist</h3>
                <h4>Chiwon Lee</h4>
                <a class="appComment download" :href="url_3" target="_blank">Poster Image</a>
              </b-col>
            </b-row>
          </b-col>
          <b-col md="6" cols="12">
            <b-row>
              <b-col md="8" cols="12">
                <iframe
                  width="340"
                  height="250"
                  src="https://www.youtube.com/embed/9xBk4J-FwQg"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </b-col>
              <b-col md="4" cols="12">
                <h3>아시아나항공</h3>
                <h4>Jooyeon Shon</h4>
                <a class="appComment download" :href="url_4" target="_blank">Poster Image</a>
              </b-col>
            </b-row>
          </b-col>
        </b-row>

        <!-- 3 -->
        <b-row style="margin-bottom: 100px;">
          <b-col md="6" cols="12">
            <b-row>
              <b-col md="8" cols="12">
                <iframe
                  width="340"
                  height="250"
                  src="https://www.youtube.com/embed/IlnTTQfMxpo"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </b-col>
              <b-col md="4" cols="12">
                <h3>버거킹</h3>
                <h4>Jaeyoon Lee</h4>
                <a class="appComment download" :href="url_5" target="_blank">Poster Image</a>
              </b-col>
            </b-row>
          </b-col>
          <b-col md="6" cols="12">
            <b-row>
              <b-col md="8" cols="12">
                <iframe
                  width="340"
                  height="250"
                  src="https://www.youtube.com/embed/gRHVVDSGoQs"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </b-col>
              <b-col md="4" cols="12">
                <h3>알바몬</h3>
                <h4>Hyun Jung Oh</h4>
                <a class="appComment download" :href="url_6" target="_blank">Poster Image</a>
              </b-col>
            </b-row>
          </b-col>
        </b-row>

        <!-- 4 -->

        <b-row style="margin-bottom: 100px;">
          <b-col md="6" cols="12">
            <b-row>
              <b-col md="8" cols="12">
                <iframe
                  width="340"
                  height="250"
                  src="https://www.youtube.com/embed/wdtbZQN_3Xg"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </b-col>
              <b-col md="4" cols="12">
                <h3>미세미세</h3>
                <h4>Seungpil Hyun</h4>
                <a class="appComment download" :href="url_7" target="_blank">Poster Image</a>
              </b-col>
            </b-row>
          </b-col>
          <b-col md="6" cols="12">
            <b-row>
              <b-col md="8" cols="12">
                <iframe
                  width="340"
                  height="250"
                  src="https://www.youtube.com/embed/qjZhcNTaZ-U"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </b-col>
              <b-col md="4" cols="12">
                <h3>코레일</h3>
                <h4>Soohyun Yoon</h4>
                <a class="appComment download" :href="url_8" target="_blank">Poster Image</a>
              </b-col>
            </b-row>
          </b-col>
        </b-row>

        <!-- 5 -->
        <b-row>
          <b-col md="12" cols="12" align="center">
            <iframe
              width="340"
              height="250"
              src="https://www.youtube.com/embed/4qh-fFZrBZQ"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <h3 class="appTitle margin-none">한국투어앱</h3>
            <h4>selinazzzan</h4>
          </b-col>
        </b-row>
      </div>
      <div class="hline mb-5"></div>
      <b-row>
        <b-col align="center">
          <h3 class="report-subtitle" style="margin-bottom: 50px;">프로젝트 2 : 나의 아이디어로 앱 프로토타입 제작</h3>
          <h4 style="margin-bottom: 100px;">내가 만들고 싶은 앱을 보여드립니다.</h4>
          <p style="margin-bottom: 150px;">
            본인의 아이디어로 앱을 정의하고 사용자를 모델링한 뒤,
            <br />자유로운 프로토타입 도구를 이용해 앱의 프로토타입을 제작한다.
            <br />앱 개발 도구인 Xcode를 살펴봄으로써 현실적으로 구현 가능한
            UI를 제작하는 데 초점을 맞추었다.
          </p>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      url_1: require("@/assets/redesignResources/ysu_19_01/04.jpg"),
      url_2: require("@/assets/redesignResources/ysu_19_01/02.jpg"),
      url_3: require("@/assets/redesignResources/ysu_19_01/07.jpg"),
      url_4: require("@/assets/redesignResources/ysu_19_01/06.jpg"),
      url_5: require("@/assets/redesignResources/ysu_19_01/09.jpg"),
      url_6: require("@/assets/redesignResources/ysu_19_01/05.jpg"),
      url_7: require("@/assets/redesignResources/ysu_19_01/01.jpg"),
      url_8: require("@/assets/redesignResources/ysu_19_01/03.jpg"),
      url_9: require("@/assets/redesignResources/ysu_19_01/03.jpg")
    };
  }
};
</script>

<style></style>
