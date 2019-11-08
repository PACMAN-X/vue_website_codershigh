<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="12" lg="4" v-for="cardNew in cardNews" :key="cardNew.id">
          <b-card
            :img-src="cardNew.newsImage"
            :sub-title="cardNew.intervieweeInfo"
            align="center"
          >
            <b-card-text>{{ cardNew.students }}</b-card-text>
            <b-button :href="cardNew.newsAddress" variant="primary"
              >더 알아보기</b-button
            >
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardNews: [
        {
          id: 1,
          newsImage:
            "https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-9/69204175_1228815657321102_4695989749637185536_o.jpg?_nc_cat=107&_nc_oc=AQlE1OEo5lr9Bqv6KFgA-JGgyQEUh26CaUN5IDTO4DQH5RfoSsgNatNrl6AALtmHly4&_nc_ht=scontent-icn1-1.xx&oh=ec174ebf80e69f43bf866581b23296fb&oe=5E236E5C",
          intervieweeInfo: "현)한양대학교 재학생",
          students: "전하영, 정상운, 최준호",
          newsAddress:
            "https://www.facebook.com/codershighteam/posts/1228818117320856"
        },
        {
          id: 2,
          newsImage:
            "https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-9/69604115_1237509153118419_368907063314612224_o.jpg?_nc_cat=110&_nc_oc=AQk1HMehJjteB9SK1ylIaKOOwvwdvgbVSgfviXz_f9GdVrODVC6wbR8nZEycJG4ty1o&_nc_ht=scontent-icn1-1.xx&oh=56b48564d51da9a0f31d198b8abef48e&oe=5DF2B4BD",
          intervieweeInfo: "현)중앙대학교 재학생",
          students: "안웅기, 서보민, 이지우",
          newsAddress:
            "https://www.facebook.com/codershighteam/posts/1237510246451643"
        },
        {
          id: 3,
          newsImage:
            "https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-9/70042096_1249196911949643_6488045784238391296_o.jpg?_nc_cat=105&_nc_oc=AQkim7hQWpT5dyGlGel1KxZ1YUBi56qLR4wDSbmQhK4ScraXcCOHeqNiVHkYQOJRQlA&_nc_ht=scontent-icn1-1.xx&oh=5aad606fd6cb0277fe1ede12d81e397d&oe=5E21E8F7",
          intervieweeInfo: "현)삼성전자 앱 개발부",
          students: "염혜리",
          newsAddress:
            "https://www.facebook.com/codershighteam/posts/1249197898616211"
        }
      ]
    };
  }
};
</script>

<style>
.container {
  padding-top: 40px;
  padding-bottom: 40px;
}
</style>
