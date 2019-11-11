<template>
  <div>
    <div style="background-color: #f5f5f5">
      <b-container>
        <b-row>
          <b-col class="center-block">
            <h2 align="center">{{ title }}</h2>
            <div class="hline"></div>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="m-5" align="center">
            <img :src="currentOutcome.classContents.image" style="width: 80%" />
          </b-col>
          <b-col class="m-5" align="center" align-self="center">
            <b-row class="mb-3">
              <span id="rectangle"></span>
              {{ currentOutcome.classContents.classTitle }}
            </b-row>
            <b-row class="mb-3">
              <span id="rectangle"></span>
              {{ currentOutcome.classContents.targetStudents }}
            </b-row>
            <b-row class="mb-3">
              <span id="rectangle"></span>
              기간: {{ currentOutcome.classContents.duration }}
            </b-row>
            <b-row class="mb-3">
              <span id="rectangle"></span>
              시간: {{ currentOutcome.classContents.time }}
            </b-row>
            <b-row class="mb-3">
              <span id="rectangle"></span>
              인원: {{ currentOutcome.classContents.numberOfStudents }}
            </b-row>
            <b-row class="mb-3">
              <span id="rectangle"></span>
              강사: {{ currentOutcome.classContents.lecturers }}
            </b-row>
          </b-col>
        </b-row>
        <hr
          style="margin-top: 20px;border-top-width: 3px;margin-bottom: 50px;"
        />
        <b-row>
          <b-col class="center-block mb-5">
            <h2 align="center">교육과정</h2>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            v-show="currentOutcome.classContents.curriculum.time1 != ''"
            align="center"
          >
            <img :src="t0" style="width: 60%; max-width: 200px" />
            <h5 class="mt-4">Learn to Code</h5>
            <p>{{ currentOutcome.classContents.curriculum.time1 }}</p>
          </b-col>
          <b-col
            v-show="currentOutcome.classContents.curriculum.time2 != ''"
            align="center"
          >
            <img :src="t1" style="width: 60%; max-width: 200px" />
            <h5 class="mt-4">Application Prototyping</h5>
            <p>{{ currentOutcome.classContents.curriculum.time2 }}</p>
          </b-col>

          <b-col
            v-show="currentOutcome.classContents.curriculum.time3 != ''"
            align="center"
          >
            <img :src="t2" style="width: 60%; max-width: 200px" />
            <h5 class="mt-4">Swift-iOS App Development</h5>
            <p>{{ currentOutcome.classContents.curriculum.time3 }}</p>
          </b-col>
        </b-row>
        <hr
          style="margin-top: 20px;border-top-width: 3px;margin-bottom: 50px;"
        />
        <b-row>
          <b-col class="center-block mb-3">
            <h2 align="center">수료학생</h2>
          </b-col>
        </b-row>
        <b-row>
          <b-col align="center">
            <h5>수강신청</h5>
            <div class="circleBase-none">
              <h3>
                {{
                  currentOutcome.classContents.studentsCompletion.enrollment
                }}명
              </h3>
            </div>
          </b-col>
          <b-col
            align="center"
            v-show="currentOutcome.classContents.curriculum.time1 !== ''"
          >
            <h5>Track 0 수강생</h5>
            <div class="circleBase-none">
              <h3>
                {{ currentOutcome.classContents.studentsCompletion.track0 }}명
              </h3>
            </div>
          </b-col>
          <b-col
            align="center"
            v-show="currentOutcome.classContents.curriculum.time2 !== ''"
          >
            <h5>Track 1 수강생</h5>
            <div class="circleBase-none">
              <h3>
                {{ currentOutcome.classContents.studentsCompletion.track1 }}명
              </h3>
            </div>
          </b-col>
          <b-col
            align="center"
            v-show="currentOutcome.classContents.curriculum.time3 !== ''"
          >
            <h5>Track 2 수강생</h5>
            <div class="circleBase">
              <h3>
                {{
                  currentOutcome.classContents.studentsCompletion.track2
                    .students
                }}명
              </h3>
              <div class="hline"></div>
              <h3>
                {{
                  currentOutcome.classContents.studentsCompletion.track2.teams
                }}팀
              </h3>
            </div>
          </b-col>
          <b-col align="center">
            <h5>최종 수료</h5>
            <div class="circleBase">
              <h3>
                {{
                  currentOutcome.classContents.studentsCompletion.completion
                    .number
                }}명
              </h3>
              <div
                v-show="
                  currentOutcome.classContents.studentsCompletion.completion
                    .presentation != ''
                "
                class="hline"
              ></div>
              <h3
                v-show="
                  currentOutcome.classContents.studentsCompletion.completion
                    .presentation != ''
                "
              >
                {{
                  currentOutcome.classContents.studentsCompletion.completion
                    .presentation
                }}팀
              </h3>
            </div>
            <!-- <h5>수료</h5>
            <div class="circleBase">
              <h3>
                {{
                  currentOutcome.classContents.studentsCompletion.completion
                    .number
                }}명
              </h3>
              <div class="hline"></div>
              <h3>
                {{
                  currentOutcome.classContents.studentsCompletion.completion
                    .presentation
                }}명
              </h3>
            </div>-->
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div>
      <b-row>
        <b-col class="center-block mt-5">
          <h2 align="center">교육결과</h2>
        </b-col>
      </b-row>
      <Redesign
        v-show="
          currentOutcome.classContents.targetStudents ===
            '연세대학교 UIC IID 학과'
        "
      ></Redesign>
      <div v-for="outcome in currentOutcome.studentsOutcome" :key="outcome.id">
        <ReportCard :outcome="outcome"></ReportCard>
      </div>
    </div>
  </div>
</template>

<script>
import ReportCard from "@/components/report_components/ReportCard.vue";
import Redesign from "@/components/report_components/Redesign.vue";

export default {
  components: {
    ReportCard,
    Redesign
  },
  props: ["title"],
  data() {
    return {
      outcomes: {},
      currentOutcome: {},
      t0: require("@/assets/images/track/00.png"),
      t1: require("@/assets/images/track/02.png"),
      t2: require("@/assets/images/track/03.png")
    };
  },
  created() {
    this.outcomes = [
      {
        curriculumName: "2019 여름방학 광운대학교 iOS 특강",
        data: {
          classContents: {
            image: require("@/assets/images/report-client/kw.png"),
            classTitle: "iOS App Design - Develop",
            targetStudents: "광운대학교 학생 누구나",
            duration: "6월 24일 ~ 8월 9일",
            time: "매일 오후 3시 ~ 6시, 총 91시간",
            numberOfStudents: "14명 (수료율 38%)",
            lecturers: "박종영 | 윤성관 | 김태선",
            curriculum: {
              time1: "",
              time2: 39 + "시간",
              time3: 52 + "시간"
            },
            studentsCompletion: {
              enrollment: 32,
              track0: 0,
              track1: 14,
              track2: { students: 14, teams: 5 },
              completion: { number: 12, presentation: 5 }
            }
          },
          studentsOutcome: [
            {
              appScreen: require("@/assets/images/report-appscreen/kwu_19_01/01.jpg"),
              appTitle: "알바할일",
              appComment:
                "누르기만 해, 우리가 다 관리해줄게알바생과 관리자의 고민을 해결해드립니다.",
              students: "최유림, 전효희, 엄태현",
              youTubeAddress: "https://www.youtube.com/embed/ve6pIlwuQT4",
              website: "https://projectintheclass.github.io/Parttime_Job/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/kwu_19_01/02.jpg"),
              appTitle: "HiMoveIt",
              appComment:
                "사진 전문가가 아니더라도 손쉽게 시네마 그래프 콘텐츠를 만들 수 있는 애플리케이션",
              students: "정재완, 오성수, 강경훈",
              youTubeAddress: "https://www.youtube.com/embed/xZ8Cp7iZ8i8",
              website: "https://projectintheclass.github.io/HiMoveIt/."
            },
            {
              appScreen: require("@/assets/images/report-appscreen/kwu_19_01/03.jpg"),
              appTitle: "여~행님",
              appComment:
                "뚜벅이 여행자를 위한, 대중교통만을 이용하여 여행을 즐길 수 있도록 도와주는 어플리케이션",
              students: "김진구, 전정준, 최세린",
              youTubeAddress: "https://www.youtube.com/embed/1r0FFDm_d2I",
              website: "https://projectintheclass.github.io/Ayo-Bro/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/kwu_19_01/04.jpg"),
              appTitle: "학생Check",
              appComment:
                "학원 강사분들 에게 편리한 학생 관리를 지원하는 애플리케이션",
              students: "강지현, 이주혁, 정연희",
              youTubeAddress: "https://www.youtube.com/embed/j3BJwkXkkVo",
              website: "https://projectintheclass.github.io/CheckStudent/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/kwu_19_01/05.jpg"),
              appTitle: "한강flex",
              appComment:
                "한강 공원에 대해 새롭게 알아보세요! 심플한 기능, 필요한 것만 담았다",
              students: "신준형, 최현목",
              youTubeAddress: "https://www.youtube.com/embed/R-lnhy6mFRo",
              website: "https://projectintheclass.github.io/HanRiverFlex/"
            }
          ]
        }
      },
      {
        curriculumName: "2019 1학기 연세대학교 UIC IID 학과",
        data: {
          classContents: {
            image: require("@/assets/images/report-client/ysu.png"),
            classTitle: "2019 iOS 프로토타이핑 과정",
            targetStudents: "연세대학교 UIC IID 학과",
            duration: "기간 : 2019년 3월 6일 ~ 2019년 6월 12일",
            time: "시간 : 10:00~14:00 총 60시간",
            numberOfStudents: "인원 : 9명 (수료율 100%)",
            lecturers: "강사 : 윤성관",
            curriculum: {
              time1: "",
              time2: 60 + "시간",
              time3: ""
            },
            studentsCompletion: {
              enrollment: 9,
              track0: 0,
              track1: 9,
              track2: { students: 14, teams: 5 },
              completion: { number: 9, presentation: "" }
            }
          },
          studentsOutcome: [
            {
              appScreen: require("@/assets/images/report-appscreen/ysu_19_01/04.png"),
              appTitle: "Survey",
              appComment:
                "This app is a platform for surveys; users can get more respondents, easily create & answer the surveys, and are ensured reward for answering the surveys.",
              students: "Da In Kim",
              youTubeAddress: "https://www.youtube.com/embed/Y343qCDZ89g",
              website: "https://projectintheclass.github.io/Survey/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/ysu_19_01/07.png"),
              appTitle: "MyInterview",
              appComment:
                "MyInterview is an application for job applicants who have to practice for job interviews; it asks popular interview questions to its users so that users can do unlimited mock interviews. The differentiator is that it is a voice-activated app that interacts with the user using basic artificial intelligence to give a more realistic mock interview experience.",
              students: "Chiwon Lee",
              youTubeAddress: "https://www.youtube.com/embed/bEweBERctjo",
              website: "https://projectintheclass.github.io/MyInterview/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/ysu_19_01/02.png"),
              appTitle: "Memoment",
              appComment:
                "Memoment is an application for users who want to\nwrite reviews of movie, performance, and exhibition.",
              students: "Philian Choi",
              youTubeAddress: "https://www.youtube.com/embed/7hX4slvBx5g",
              website: "https://projectintheclass.github.io/Memoment/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/ysu_19_01/05.png"),
              appTitle: "Semester Diary",
              appComment:
                "Semester Diary allows students to manage assignments by each deadline. The user can keep track on the progress of each assignment by organizing everyday schedule..",
              students: "Hyun Jung Oh",
              youTubeAddress: "https://www.youtube.com/embed/ClxnmpitjHE",
              website: "https://projectintheclass.github.io/SemesterDiary/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/ysu_19_01/09.png"),
              appTitle: "QuotesPlease",
              appComment:
                "Quotesplease is an application that provides daily commuters with a chance to freshen up their minds with quotes from books, movies, lyrics, and poems.",
              students: "Jaeyoon Lee",
              youTubeAddress: "https://www.youtube.com/embed/EggWov6Mq2Y",
              website: "https://projectintheclass.github.io/QuotesPlease/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/ysu_19_01/06.png"),
              appTitle: "Cheat Diet",
              appComment:
                "A diet app for sweet toothed’s cheat days. \nInforms users of desert calories and a workout that complies with cheat day: hours of sleep required to burn it off.\n\n",
              students: "Jooyeon Shon",
              youTubeAddress: "https://www.youtube.com/embed/6XPIrYaUaW4",
              website: "https://projectintheclass.github.io/ultimatesleepdiet/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/ysu_19_01/01.png"),
              appTitle: "TwoGo",
              appComment:
                "TwoGo is a delivery application for users who want to share the cost of a meal without having to pay extra to reach the minimum price",
              students: "Seungpil Hyun",
              youTubeAddress: "https://www.youtube.com/embed/JINAGZS3ToM",
              website: "https://projectintheclass.github.io/TwoGo/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/ysu_19_01/03.png"),
              appTitle: "Coffee Book",
              appComment:
                "An App to collect Recipe & write recipe, and look friend's favorite coffee\n\n",
              students: "Soohyun Yoon",
              youTubeAddress: "https://www.youtube.com/embed/7jIHV12mELQ",
              website: "https://projectintheclass.github.io/CoffeeBook/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/ysu_19_01/08.png"),
              appTitle: "OutFit Weather",
              appComment:
                "An app mainly focus on weather forecast that can help people easily make decision about their daily outfits depending on the weather conditions.",
              students: "selinazzzan",
              youTubeAddress: "https://www.youtube.com/embed/39k2pu_qFkA",
              website: "https://projectintheclass.github.io/Outfit-Weather/"
            }
          ]
        }
      },
      {
        curriculumName: "2019 1학기 한양대학교 공과대학 컴퓨터/SW 전공",
        data: {
          classContents: {
            image: require("@/assets/images/report-client/hyu.png"),
            classTitle: "iOS App Develop Course (한양대 소프트웨어 스튜디오)",
            targetStudents: "SW 스튜디오 (컴퓨터/SW 3학년 전공과목)",
            duration: "2019년 3월 ~ 2019년 6월",
            time: "주 5시간, 총 75시간",
            numberOfStudents: "수료율 100%",
            lecturers: "윤성관 | 이재훈",
            curriculum: {
              time1: "",
              time2: 25 + "시간",
              time3: 50 + "시간"
            },
            studentsCompletion: {
              enrollment: 24,
              track0: 0,
              track1: 24,
              track2: { students: 24, teams: 8 },
              completion: { number: 24, presentation: 8 }
            }
          },
          studentsOutcome: [
            {
              appScreen: require("@/assets/images/report-appscreen/hyu_19_01/01.png"),
              appTitle: "MinZzengE",
              appComment:
                "민쯩이는 당신이 지갑에서 신분증을 꺼낼 수고를 덜어줍니다.",
              students: "김정모, 김효일, 최성인",
              youTubeAddress: "https://www.youtube.com/embed/_h4c24Bd6p0",
              website: "https://projectintheclass.github.io/MinZzeungE/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/hyu_19_01/02.png"),
              appTitle: "Hanyang Smart Order",
              appComment:
                "한양대학교 교내 카페 주문 결제 / 쿠폰 관리 어플리케이션",
              students: "전하영, 최준호, 정서운",
              youTubeAddress: "https://www.youtube.com/embed/F-LaJpYToKw",
              appStoreAddress:
                "https://apps.apple.com/kr/app/한양-스마트오더/id1470195139",
              website: "https://projectintheclass.github.io/QueueOrder/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/hyu_19_01/03.png"),
              appTitle: "UniAlarmee",
              appComment:
                "매일 학교 홈페이지에서 과제를 확인하느라 지친 당신을 위한 한양대학교 블랙보드 사이트 공지, 과제 리스트 불러오기 어플리케이션",
              students: "서윤희, 최예찬, 한다진",
              youTubeAddress: "https://www.youtube.com/embed/QTDXY4F6BTY",
              website: "https://projectintheclass.github.io/UniAlarmeeProject/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/hyu_19_01/04.png"),
              appTitle: "IFFY",
              appComment:
                "답이 정해지지 않은 질문\n당신에게 IFFY를 선물합니다.",
              students: "김영수, 이봉석, 이승재",
              youTubeAddress: "https://www.youtube.com/embed/kbgRqqqJwBY",
              website:
                "https://projectintheclass.github.io/Iffy-iOSApplication/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/hyu_19_01/05.png"),
              appTitle: "안주나요",
              appComment: "이 시대의 결정장애들을 위한, 날씨 기반 안주 추천 앱",
              students: "송연종, 안재은, 윤세령",
              youTubeAddress: "https://www.youtube.com/embed/NLVtbWNPiLU",
              website:
                "https://projectintheclass.github.io/Anjunayo/docs/index.html"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/hyu_19_01/06.png"),
              appTitle: "AboutHanyang",
              appComment:
                "AboutHanyang은 한양대 내의 시설 정보를 공유하고 의견을 나누는 앱입니다.",
              students: "김태형, 이성주, 정재윤",
              youTubeAddress: "https://www.youtube.com/embed/51AC4AyospE",
              appStoreAddress:
                "https://apps.apple.com/kr/app/about-hanyang/id1469853999"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/hyu_19_01/07.png"),
              appTitle: "Latte",
              appComment: "커플을 위한 채팅앱",
              students: "Nam Hyebin, Lee Hyunji, Sim Sangyong",
              youTubeAddress: "https://www.youtube.com/embed/pjiu97W7XFI",
              website:
                "https://projectintheclass.github.io/Messenger-for-Couple/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/hyu_19_01/08.png"),
              appTitle: "체크홈",
              appComment:
                "집을 처음으로 구하는 사람이 신경써야 하는 사항을 배우고 확인할 수 있는 체크리스트 앱",
              students: "김범수, 강재원, 고태영",
              youTubeAddress: "https://www.youtube.com/embed/Mmk1ezsSjCI",
              website: "https://projectintheclass.github.io/CheckHome/"
            }
          ]
        }
      },
      {
        curriculumName: "2019 겨울방학 중앙대 iOS 특강",
        data: {
          classContents: {
            image: require("@/assets/images/report-client/cau.png"),
            classTitle: "CAU iOS기반 App개발 특성화교육",
            targetStudents: "전공 & 학년 무관",
            duration: "기간 : 2018년 12월 26일 ~ 2018년 2월 15일",
            time: "시간 : 매일 오전 10시 ~ 13시 총 135시간",
            numberOfStudents: "인원 : 30명 (수료율 90%)",
            lecturers: "고준일 | 남장혁 | 김태선 | 윤성관",
            curriculum: {
              time1: "24시간 (12월 26일 - 12월 31일)",
              time2: "40시간 (1월 2일 - 1월 16일)",
              time3: "71시간 (1월 17일 - 2월 15일)"
            },
            studentsCompletion: {
              enrollment: 30,
              track0: 30,
              track1: 27,
              track2: { students: 27, teams: 9 },
              completion: { number: 27, presentation: 9 }
            }
          },
          studentsOutcome: [
            {
              appScreen: require("@/assets/images/report-appscreen/cau_19_01/01.png"),
              appTitle: "SketchWord",
              appComment: "간단한 캐치마인드게임을 어플로 해보자",
              students: "배경빈 정진혁 손희덕",
              youTubeAddress: "https://www.youtube.com/embed/Zoi-rPAUneE",
              appStoreAddress:
                "https://itunes.apple.com/kr/app/sketchword/id1453309917?mt=8",
              website: "https://projectintheclass.github.io/iOS_Heads_Up/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/cau_19_01/02.png"),
              appTitle: "거꾸로 레시피",
              appComment:
                "자취생의 냉장고 속 재료로 조합할 수 있는 적절한 음식의 레시피와 재료들의 수명을 알려 주는 앱",
              students: "손재형 이채운 최기수",
              youTubeAddress: "https://www.youtube.com/embed/RzrtIUk4EQg"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/cau_19_01/03.png"),
              appTitle: "전국 ATM",
              appComment: "전국의 ATM을 수수료와 함께 지도에 나타내는 앱",
              students: "윤진 이지호 홍재우",
              youTubeAddress: "https://www.youtube.com/embed/b5WA3GQofJw",
              appStoreAddress:
                "https://itunes.apple.com/kr/app/전국-atm-찾기/id1454131770?mt=8",
              website: "https://projectintheclass.github.io/jeonguk_ATM/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/cau_19_01/04.png"),
              appTitle: "편한Calendar",
              appComment:
                "여러 일정입력을 위한 조작을 줄여주고 이를 피드백해주는 어플",
              students: "박정훈 윤종원 이지나",
              youTubeAddress: "https://www.youtube.com/embed/PActdaWm9Ec",
              website:
                "https://projectintheclass.github.io/convenient_calendar/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/cau_19_01/05.png"),
              appTitle: "미니약국",
              appComment: "약 먹는 시간을 알려주는 어플리케이션, 미니약국",
              students: "서보민 안웅기 이지우",
              youTubeAddress: "https://www.youtube.com/embed/jnm_ygQXK4A",
              appStoreAddress:
                "https://apps.apple.com/kr/app/미니약국/id1469902368",
              website: "https://projectintheclass.github.io/mini-pharmacy/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/cau_19_01/06.png"),
              appTitle: "버블 메모(BubbleMemo)",
              appComment: "메모에서부터 오는 감각적인 경험을 가능하게 하는 앱",
              students: "고안나 이혜미 조예진",
              youTubeAddress: "https://www.youtube.com/embed/POG0OzV0tqE",
              website: "https://projectintheclass.github.io/BubbleMemo/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/cau_19_01/09.png"),
              appTitle: "인생적금",
              appComment:
                "한장, 두장 찍을 때는 잘 모르겠지만, 적금이 만기되었을 때 생기는 인생이 담긴 영상 과 뿌듯함 .",
              students: "박세연 박준영 이민지",
              youTubeAddress: "https://www.youtube.com/embed/F4EkTb5-EXs",
              website: "https://projectintheclass.github.io/life-deposit/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/cau_19_01/08.png"),
              appTitle: "EYEhealth",
              appComment: "콘텍트렌즈 착용자를 위한 렌즈착용 권장시간 알람 앱",
              students: "김혜성 임재확 조혜진",
              youTubeAddress: "https://www.youtube.com/embed/YBojEyf_GXo",
              website: "https://projectintheclass.github.io/EYEhealth/"
            }
          ]
        }
      },
      {
        curriculumName: "2019 겨울방학 동국대 iOS 특강",
        data: {
          classContents: {
            image: require("@/assets/images/report-client/dgu.png"),
            classTitle: "2018 iOS App 개발 교육",
            targetStudents: "전공 & 학년 무관",
            duration: "기간 : 2018년 12월 27일 ~ 2019년 1월 31일",
            time: "시간 : 14:00~18:00 총 100시간",
            numberOfStudents: "인원 : 23명 (수료율 78%)",
            lecturers: "강사 : 김영후 | 윤성관 | 남장혁",
            curriculum: {
              time1: "",
              time2: "32시간",
              time3: "68시간"
            },
            studentsCompletion: {
              enrollment: 23,
              track0: "",
              track1: 21,
              track2: { students: 18, teams: 7 },
              completion: { number: 18, presentation: 7 }
            }
          },
          studentsOutcome: [
            {
              appScreen: require("@/assets/images/report-appscreen/dgu_19_01/1.png"),
              appTitle: "동국아 졸업하자",
              appComment: "졸업요건 정보제공/계획관리 앱",
              students: "유현지 육지수 김효서",
              youTubeAddress: "https://www.youtube.com/embed/JJY5sWZlvx8",
              appStoreAddress:
                "https://itunes.apple.com/kr/app//id1452125551?mt=8",
              website: "https://projectintheclass.github.io/DonggukGraduation/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/dgu_19_01/2.png"),
              appTitle: "Movie Planet",
              appComment:
                "영화 마니아들을 위해 사용자의 영화 관람 이력과 작성 평론을 관리해 주는 앱",
              students: "박민주 박지호 조인택",
              youTubeAddress: "https://www.youtube.com/embed/Ct7PdTHW-sg",
              appStoreAddress:
                "https://itunes.apple.com/kr/app/movieplanet/id1452124136?mt=8",
              website: "https://projectintheclass.github.io/MovieDialog/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/dgu_19_01/3.png"),
              appTitle: "이거모향",
              appComment: "향수를 잘 모르는 사람을 위한 분위기별 향수 추천 앱",
              students: "임성환 조봉민 유선경",
              youTubeAddress: "https://www.youtube.com/embed/FCYB4HuR4dc",
              website: "https://projectintheclass.github.io/WTS/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/dgu_19_01/4.png"),
              appTitle: "코동포동",
              appComment:
                "동국대학교 학생들을 위해 학교 근처 음식점들을 카테고리별로 분류하여 정보를 제공하는 앱",
              students: "이민주 정유나 박재현",
              youTubeAddress: "https://www.youtube.com/embed/BnbTprFI-Z0",
              appStoreAddress:
                "https://itunes.apple.com/kr/app/코동포동/id1453124118?mt=8",
              website: "https://github.com/ProjectInTheClass/kdpd"
            }
          ]
        }
      },
      {
        curriculumName: "2019 겨울방학 동국대 iOS 특강",
        data: {
          classContents: {
            image: require("@/assets/images/report-client/dgu.png"),
            classTitle: "2018 iOS App 개발 교육",
            targetStudents: "전공 & 학년 무관",
            duration: "기간 : 2018년 12월 27일 ~ 2019년 1월 31일",
            time: "시간 : 14:00~18:00 총 100시간",
            numberOfStudents: "인원 : 23명 (수료율 78%)",
            lecturers: "강사 : 김영후 | 윤성관 | 남장혁",
            curriculum: {
              time1: "",
              time2: "32시간",
              time3: "68시간"
            },
            studentsCompletion: {
              enrollment: 23,
              track0: "",
              track1: 21,
              track2: { students: 18, teams: 7 },
              completion: { number: 18, presentation: 7 }
            }
          },
          studentsOutcome: [
            {
              appScreen: require("@/assets/images/report-appscreen/dgu_19_01/1.png"),
              appTitle: "동국아 졸업하자",
              appComment: "졸업요건 정보제공/계획관리 앱",
              students: "유현지 육지수 김효서",
              youTubeAddress: "https://www.youtube.com/embed/JJY5sWZlvx8",
              appStoreAddress:
                "https://itunes.apple.com/kr/app//id1452125551?mt=8",
              website: "https://projectintheclass.github.io/DonggukGraduation/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/dgu_19_01/2.png"),
              appTitle: "Movie Planet",
              appComment:
                "영화 마니아들을 위해 사용자의 영화 관람 이력과 작성 평론을 관리해 주는 앱",
              students: "박민주 박지호 조인택",
              youTubeAddress: "https://www.youtube.com/embed/Ct7PdTHW-sg",
              appStoreAddress:
                "https://itunes.apple.com/kr/app/movieplanet/id1452124136?mt=8",
              website: "https://projectintheclass.github.io/MovieDialog/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/dgu_19_01/3.png"),
              appTitle: "이거모향",
              appComment: "향수를 잘 모르는 사람을 위한 분위기별 향수 추천 앱",
              students: "임성환 조봉민 유선경",
              youTubeAddress: "https://www.youtube.com/embed/FCYB4HuR4dc",
              website: "https://projectintheclass.github.io/WTS/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/dgu_19_01/4.png"),
              appTitle: "코동포동",
              appComment:
                "동국대학교 학생들을 위해 학교 근처 음식점들을 카테고리별로 분류하여 정보를 제공하는 앱",
              students: "이민주 정유나 박재현",
              youTubeAddress: "https://www.youtube.com/embed/BnbTprFI-Z0",
              appStoreAddress:
                "https://itunes.apple.com/kr/app/코동포동/id1453124118?mt=8",
              website: "https://github.com/ProjectInTheClass/kdpd"
            }
          ]
        }
      },
      {
        curriculumName: "2018 여름방학 중앙대 iOS 특강",
        data: {
          classContents: {
            image: require("@/assets/images/report-client/cau.png"),
            classTitle: "iOS App Design to Develop Course",
            targetStudents: "전공 & 학년 무관",
            duration: "기간 : 2018년 6월 25일 ~ 2018년 8월 16일",
            time: "시간 : 매일 10시 ~ 13시, 총 136시간",
            numberOfStudents: "인원 : 25명 (수료율 83%)",
            lecturers: "강사 : 고준일 | 윤성관 | 김태선 | 남장혁",
            curriculum: {
              time1: "20시간",
              time2: "39시간",
              time3: "70시간"
            },
            studentsCompletion: {
              enrollment: 30,
              track0: 27,
              track1: 27,
              track2: { students: 27, teams: 9 },
              completion: { number: 25, presentation: 8 }
            }
          },
          studentsOutcome: [
            {
              appScreen: require("@/assets/images/report-appscreen/cau_18_02/01.png"),
              appTitle: "총무다",
              appComment: "모든 학교 총무들을 위한 예산관리 APP!",
              students: "강민경 오태일 장준혁",
              youTubeAddress: "https://www.youtube.com/embed/Udt5JecZF9o",
              website: "https://projectintheclass.github.io/chongmuda/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/cau_18_01/04.png"),
              appTitle: "ForYou",
              appComment:
                "온라인 쇼핑을 주로 하는 20~30대 청년들을 위한 의류 3D 피팅 및 구매 어플리케이션. Style, Preference and 3D Model for You",
              students: "배준하 이종수 조혁만",
              youTubeAddress: "https://www.youtube.com/embed/b8HopTvKU_E",
              website: "https://projectintheclass.github.io/ForYou/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/cau_18_01/03.png"),
              appTitle: "OURSNAP",
              appComment:
                "특별한 순간을 화보처럼 간직하고싶은 분들을 위한 원하는 컨셉과 느낌의 사진을 찍어주는 사진작가와 스튜디오를 찾아주는 앱",
              students: "노수린 이윤주 김형준",
              youTubeAddress: "https://www.youtube.com/embed/MNOXz3Lmy0g",
              website: "https://projectintheclass.github.io/OURSNAPS/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/cau_18_01/02.png"),
              appTitle: "모으다",
              appComment:
                "책을 좋아하는 사람들을 위한, 책 속 문장을 남길 수 있는 기능을 가진 앱",
              students: "김수진 이예주",
              youTubeAddress: "https://www.youtube.com/embed/V6rgTDeOfwI",
              appStoreAddress:
                "https://itunes.apple.com/kr/app/1%EC%9B%94-1%EC%9D%BC-%EB%AA%A9%ED%91%9C-%EA%B4%80%EB%A6%AC-%EC%96%B4%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98/id1218696438?mt=8",
              website: "https://projectintheclass.github.io/Mouda/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/cau_18_01/07.png"),
              appTitle: "TeamWork",
              appComment:
                "세계인이 함께하는 올림픽이 있다면 우리에겐 동료와 함께할 수 있는 '팀워크'가 있습니다.",
              students: "이재준 편해윤 표경훈",
              youTubeAddress:
                "https://www.youtube.com/embed/HTLU-XUCZIg?list=PLBjx8AiS7qA3Pn8YOT6gojXrHG3hXTGoI",
              website: "https://projectintheclass.github.io/TeamWork2018/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/cau_18_01/05.png"),
              appTitle: "BestBefore",
              appComment:
                "소형가구를 위한, 냉장고 관리가 어려운 사람을 위한, 유통기한 알림 어플",
              students: "류효광 홍세정 옥재현",
              youTubeAddress: "https://www.youtube.com/embed/OG6i7-KDB44",
              website: "https://projectintheclass.github.io/bestbefore/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/cau_18_01/06.png"),
              appTitle: "기숙사알리미",
              appComment: "공지사항부터 생활정보까지, 모든 것을 한 눈에",
              students: "안재형 한진 강제순",
              youTubeAddress: "https://www.youtube.com/embed/CmXXqvfjHbg",
              appStoreAddress:
                "https://itunes.apple.com/kr/app/%EC%A4%91%EC%95%99%EB%8C%80%EA%B8%B0%EC%88%99%EC%82%AC%EC%95%8C%EB%A6%AC%EB%AF%B8/id1363880842?mt=8",
              website: "https://projectintheclass.github.io/CAUDormitory/"
            }
          ]
        }
      },
      {
        curriculumName: "2018 여름방학 고려대학교 iOS 특강",
        data: {
          classContents: {
            image: require("@/assets/images/report-client/ku.png"),
            classTitle: "iOS App Design to Develop Course",
            targetStudents: "전공 & 학년 무관",
            duration: "기간 : 2018년 7월 3일 ~ 2018년 8월 14일",
            time: "시간 : 총 120시간",
            numberOfStudents: "인원 : 32명 (수료율 83%)",
            lecturers: "강사 : 이재훈 | 윤성관 | 남장혁",
            curriculum: {
              time1: "",
              time2: "36시간",
              time3: "84시간"
            },
            studentsCompletion: {
              enrollment: 34,
              track0: 0,
              track1: 33,
              track2: { students: 32, teams: 12 },
              completion: { number: 31, presentation: 12 }
            }
          },
          studentsOutcome: [
            {
              appScreen: require("@/assets/images/report-appscreen/ku_18_02/05.png"),
              appTitle: "N-찬",
              appComment: "자취생을 위한 반찬, 과일 엔빵팟 모으기",
              students: "송동욱 정소영 김대희",
              youTubeAddress: "https://www.youtube.com/embed/VbHmA73KhJQ",
              website: "https://projectintheclass.github.io/NChan/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/ku_18_02/03.png"),
              appTitle: "꿀루",
              appComment:
                "수강신청 준비하며 클루, 수강신청 사이트, 에브리타임을 왔다갔다 하시느라 피곤하셨죠? 이제 꿀루에서 강의 검색부터 평가 열람, 시간표까지!",
              students: "조수민 김영훈 최유정",
              youTubeAddress: "https://www.youtube.com/embed/4tkX_7RDwsw",
              website: "https://projectintheclass.github.io/GGULUE/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/ku_18_02/04.png"),
              appTitle: "BASKET MATCH",
              appComment:
                "농구 경기를 진행할 대전 상대를 찾고 경기 결과를 바탕으로 실력에 대한 점수를 부여 해 주는 어플리케이션.",
              students: "이진규 최규연 최사무엘",
              youTubeAddress: "https://www.youtube.com/embed/mmTzFwPRz48",
              website: "https://projectintheclass.github.io/BasketMatch/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/ku_18_02/06.png"),
              appTitle: "Busking",
              appComment:
                "Busking application은 거리 공연에 대한 정보를 정리하여 쉽게 제공하고, 일회성으로 끝나는 거리공연에 대해 버스커- 관객이 소통할 수 있는 어플리케이션입니다.",
              students: "이서영 조준형",
              youTubeAddress: "https://www.youtube.com/embed/LlSi74zIVwA",
              website: "https://projectintheclass.github.io/Busking/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/ku_18_02/07.png"),
              appTitle: "띵동댕동",
              appComment: "띵동댕동",
              students: "노태훈 박정원 서영남",
              youTubeAddress: "https://www.youtube.com/embed/l6OBxxDvq8U",
              website: "https://projectintheclass.github.io/School1/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/ku_18_02/08.png"),
              appTitle: "Ziggle",
              appComment:
                "Ziggle은 음식이미지를 통해 칼로리와 영양 데이터를 분석하여 제공합니다.",
              students: "박은혜 김훈영",
              youTubeAddress: "https://www.youtube.com/embed/u5OFEGU8W7Q",
              website: "https://projectintheclass.github.io/Calorie_Calculator/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/ku_18_02/11.png"),
              appTitle: "암기하개",
              appComment:
                "외우지 못한 단어는 외울 때까지 매일매일 반복하도록, 외운 단어는 다시 잊어버리지 않도록 도와줍니다.",
              students: "이재욱 한수연 김규영",
              youTubeAddress: "https://www.youtube.com/embed/iCSlTDGO_kA",
              website: "https://projectintheclass.github.io/HumptyDumpty/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/ku_18_02/10.png"),
              appTitle: "DONGL",
              appComment: "글로벌 동행 매칭 서비스",
              students: "박소연 이수진 김성재",
              youTubeAddress: "https://www.youtube.com/embed/xUNDM0zv03E",
              website: "https://dongl1.wixsite.com/dongl"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/ku_18_02/02.png"),
              appTitle: "Foodle",
              appComment: "내가 원하는 카페 정보 찾기",
              students: "김정민 김태현 성다은",
              youTubeAddress: "https://www.youtube.com/embed/153SPhfknd4",
              website: "https://projectintheclass.github.io/kkukkuccacca/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/ku_18_02/09.png"),
              appTitle: "Back Keeper",
              appComment:
                "BACK KEEPER는 오랜 시간 동안 앉아 있어야 하는 학생 및 직장인들을 위해 올바른 자세를 유도하는 하드웨어와 소프트웨어로 구성된 헬스케어 IOT 서비스 입니다.",
              students: "노청리 김율",
              youTubeAddress: "https://www.youtube.com/embed/VX2AEDYwL38",
              website: "https://projectintheclass.github.io/HealthKeeper/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/ku_18_02/01.png"),
              appTitle: "공금",
              appComment:
                "모임 내 효율적인 예산 모금 및 내역 관리를 도와주는 어플리케이션",
              students: "유지민 허성욱 원혜진",
              youTubeAddress: "https://www.youtube.com/embed/-oftR4jvPM4",
              website: "https://projectintheclass.github.io/gonggeum//"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/ku_18_02/12.png"),
              appTitle: "Momment",
              appComment:
                "모든 순간을 기록하고 싶은 모두를 위한,구성부터 제작까지 내 손으로 만드는 DIY 다이어리 앱",
              students: "우경민 유지현",
              youTubeAddress: "https://www.youtube.com/embed/LNQRPL9lIKI",
              website: "https://projectintheclass.github.io/MOMENT-Diary/"
            }
          ]
        }
      },
      {
        curriculumName: "2018 여름방학 서울여대 iOS 특강",
        data: {
          classContents: {
            image: require("@/assets/images/report-client/swu.png"),
            classTitle: "iOS App Design to Develop Course",
            targetStudents: "SW사관학교 대상학생",
            duration: "기간 : 2018년 7월 2일 ~ 2018년 8월 3일",
            time: "시간 : 월요일 ~ 금요일 6시간 총 150시간",
            numberOfStudents: "인원 : 11명 (수료율 92%)",
            lecturers: "강사 : 박종영 | 윤성관 | 남장혁",
            curriculum: {
              time1: "",
              time2: "48시간",
              time3: "102시간"
            },
            studentsCompletion: {
              enrollment: 12,
              track0: "",
              track1: 12,
              track2: { students: 12, teams: 4 },
              completion: { number: 12, presentation: 4 }
            }
          },
          studentsOutcome: [
            {
              appScreen: require("@/assets/images/report-appscreen/swu_18_02/02.png"),
              appTitle: "졸뽀",
              appComment:
                "서울여자대학교 졸업생과 재학생들이 실제로 구현한 졸업프로젝트를 공유하고 커뮤니케이션을 통해 아이디어를 발산 시키기 위한 어플리케이션이다.",
              students: "김소연 박예빈 이재은",
              youTubeAddress: "https://www.youtube.com/embed/0qDu2X_l6W0",
              website: "https://projectintheclass.github.io/moongaemoongae/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/swu_18_02/03.png"),
              appTitle: "세이브 돈돈",
              appComment:
                "돈돈이와 함께라면 당신도 즐거운 저축과 신나는 소비가 가능합니다!",
              students: "배민주 홍정민",
              youTubeAddress: "https://www.youtube.com/embed/SqEodyJWKwU",
              appStoreAddress: "https://itunes.apple.com/kr/app/id1423018646",
              website: "https://projectintheclass.github.io/SaveDonDon"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/swu_18_02/04.png"),
              appTitle: "재고재고",
              appComment: "식당의 효율적인 음식재고 관리와 일정관리",
              students: "성다연 이유진 정유림",
              youTubeAddress: "https://www.youtube.com/embed/GwaGQ8tBM1M",
              appStoreAddress:
                "https://itunes.apple.com/kr/app/%EC%9E%AC%EA%B3%A0%EC%9E%AC%EA%B3%A0/id1423132116?mt=8",
              website: "https://projectintheclass.github.io/JaegoJaego"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/swu_18_02/01.png"),
              appTitle: "FOREVER REVIEW",
              appComment:
                '영어 원서에 대한 정보와 자신의 의견을 다른 사람들과 공유하고 싶은 지적인 당신을 위한 "FOREVER REVIEW"',
              students: "김문희 김수민 신은혜",
              youTubeAddress: "https://www.youtube.com/embed/lK391FiKQ4w",
              website: "https://projectintheclass.github.io/EnglishBook/"
            }
          ]
        }
      },
      {
        curriculumName: "2018 1학기 한양대학교 공과대학 컴퓨터/SW 전공",
        data: {
          classContents: {
            image: require("@/assets/images/report-client/hyu.png"),
            classTitle: "iOS App Develop Course (한양대 소프트웨어 스튜디오)",
            targetStudents: "공과대학 컴퓨터/SW전공 3학년",
            duration: "기간 : 2018년 3월 9일 ~ 2018년 6월 21일",
            time: "시간 : 총 16주 48시간 (실습 32시간)",
            numberOfStudents: "인원 : 42명 (수료율 95%)",
            lecturers: "강사 : 윤성관 | 이재훈",
            curriculum: {
              time1: "",
              time2: "12시간",
              time3: "36시간"
            },
            studentsCompletion: {
              enrollment: 42,
              track0: "",
              track1: 42,
              track2: { students: 40, teams: 14 },
              completion: { number: 40, presentation: 14 }
            }
          },
          studentsOutcome: [
            {
              appScreen: require("@/assets/images/report-appscreen/hyu_18_01/03.png"),
              appTitle: "우리집에서 주차하고갈래",
              appComment:
                "저희 ‘우리 집에서 주차하고 갈래?’, 줄여서 ‘우주차’ 모바일 어플리케이션은 어딜가나 부족한 주차공간에 문제를 겪는 서울시 내의 운전자들을 위한 솔루션입니다! 여분의 주차공간을 보유하고 있는 개인 건물주와 주차 희망자를 연결하여, 서울시 내의 숨겨져있는 주차공간을 최대로 활용합니다!",
              students: "김원준 백수영 유웅진",
              youTubeAddress:
                "https://www.youtube.com/embed/xwcb-scJK5I?list=PLBjx8AiS7qA0rtzpNCfKu_e54Kmd-A50D",
              website: "https://projectintheclass.github.io/UZuCha"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/hyu_18_01/10.png"),
              appTitle: "스마트한양",
              appComment: "한양대생들의 삶의 질 개선을 위한 시간표 프로젝트",
              students: "백종원 유지원 현경우",
              youTubeAddress:
                "https://www.youtube.com/embed/pk0O_N8N388?list=PLBjx8AiS7qA0rtzpNCfKu_e54Kmd-A50D",
              appStoreAddress:
                "https://itunes.apple.com/us/app/smarthanyang/id1420489675?ls=1&mt=8",
              website: "https://projectintheclass.github.io/SmartHanyang"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/hyu_18_01/11.png"),
              appTitle: "귀소본능",
              appComment:
                "막차가 언제더라...? 또 막차 놓쳤어? 이번 달 택시비만 얼마나 나오는거야! 막차를 놓쳐 방황하던 나날들은 이제 그만! 빠르고 간편하게 막차시간을 확인하는 나만을 위한 막차 지킴이 앱 귀소본능",
              students: "서재화 서창범 이대인",
              youTubeAddress:
                "https://www.youtube.com/embed/jBxZ9qB0ZTY?list=PLBjx8AiS7qA0rtzpNCfKu_e54Kmd-A50D",
              website: "https://projectintheclass.github.io/GSBN"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/hyu_18_01/04.png"),
              appTitle: "Clubb",
              appComment:
                "당신의 쾌적한 동아리 생활을 위한 최적의 앱. 동아리 회원 관리, 일정 공유 및 관리, 회계관리를 도와줍니다.",
              students: "임민진 신승우 윤진용",
              youTubeAddress:
                "https://www.youtube.com/embed/hs_fcZ5AIx8?list=PLBjx8AiS7qA0rtzpNCfKu_e54Kmd-A50D",
              website: "https://projectintheclass.github.io/CLUBB/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/hyu_18_01/09.png"),
              appTitle: "맵다이어리",
              appComment:
                "여행 중 순간의 사진과 느낌을 남기고 싶은 사람들을 위한 앱",
              students: "박선영 박재현 정지호",
              youTubeAddress:
                "https://www.youtube.com/embed/jKc2ZALcU6E?list=PLBjx8AiS7qA0rtzpNCfKu_e54Kmd-A50D",
              website: "https://projectintheclass.github.io/MapDiary"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/hyu_18_01/12.png"),
              appTitle: "모멘트",
              appComment:
                "여러분은 오늘 하루 얼마나 많은 생각을 하셧나요? 그리고 그 중 얼마나 많은 생각을 스쳐보냈나요? 빠르게 변화하는 세상속에서 순간의 생각을 메모하세요.",
              students: "신은정 정재용",
              youTubeAddress:
                "https://www.youtube.com/embed/pgMRwhiBDZs?list=PLBjx8AiS7qA0rtzpNCfKu_e54Kmd-A50D",
              website: "https://projectintheclass.github.io/Moment"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/hyu_18_01/01.png"),
              appTitle: "돌고래가계부",
              appComment: "쓰고싶게 만드는 가계부.",
              students: "고지훈 김정연 김태우",
              youTubeAddress:
                "https://www.youtube.com/embed/g_a8wfFSQyE?list=PLBjx8AiS7qA0rtzpNCfKu_e54Kmd-A50D",
              website: "https://projectintheclass.github.io/DolphinBook/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/hyu_18_01/02.png"),
              appTitle: "위시리스트",
              appComment:
                "가지고 싶은 물건을 사려고 돈을 모았던 적, 그러다가 생각 없이 한 지출로 꿈이 멀어진 적이 있나요? Wish List와 함께 효율적이고 편리하게 돈을 관리해보세요. Wish List는 편리하고 직관적인 저축 관리 어플리케이션입니다.",
              students: "김병주 박근태 이준호",
              youTubeAddress:
                "https://www.youtube.com/embed/AKyS17yLipU?list=PLBjx8AiS7qA0rtzpNCfKu_e54Kmd-A50D",
              appStoreAddress:
                "https://itunes.apple.com/us/app/wishlisthy/id1420501007?ls=1&mt=8",
              website: "https://projectintheclass.github.io/Wish_List"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/hyu_18_01/05.png"),
              appTitle: "혼밥하냥",
              appComment:
                "혼밥하냥은 함께 밥먹을 학우를 구하는 한양대 학생들을 위한 소셜 어플리케이션입니다.",
              students: "이호준 최솔비 송성근",
              youTubeAddress:
                "https://www.youtube.com/embed/4s-nH3PNSyY?list=PLBjx8AiS7qA0rtzpNCfKu_e54Kmd-A50D",
              website: "https://projectintheclass.github.io/Honbabhanyang"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/hyu_18_01/06.png"),
              appTitle: "유리구두",
              appComment:
                "당신에게 딱 맞는 유리구두를 찾아주기 위한 신발 정보 공유 & 사이즈 추천 어플리케이션",
              students: "김예지 윤성관 이재훈",
              youTubeAddress:
                "https://www.youtube.com/embed/VdOB_V0ksRE?list=PLBjx8AiS7qA0rtzpNCfKu_e54Kmd-A50D",
              website: "https://projectintheclass.github.io/Glass"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/hyu_18_01/13.png"),
              appTitle: "이모지",
              appComment:
                "기분대로 적어보는 감성 일기 어플리케이션! 그 날의 행복과 기쁨, 또 어느 날의 슬픔을 기록해 손 안에 간직해보세요.",
              students: "엄지혜 이기택 이정민",
              youTubeAddress:
                "https://www.youtube.com/embed/pgMRwhiBDZs?list=PLBjx8AiS7qA0rtzpNCfKu_e54Kmd-A50D",
              website: "https://projectintheclass.github.io/Emogi"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/hyu_18_01/14.png"),
              appTitle: "TriPlanner",
              appComment: "편리한 여행 플래너 앱",
              students: "이재영 이종욱 장휘수",
              youTubeAddress:
                "https://www.youtube.com/embed/MKYetiJr818?list=PLBjx8AiS7qA0rtzpNCfKu_e54Kmd-A50D",
              website: "https://projectintheclass.github.io/TriPlanner/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/hyu_18_01/07.png"),
              appTitle: "청소좀하자",
              appComment:
                "당신의 방의 모습은 어떠한가요? 지저분하지 하신가요? 깨끗하신가요? 청소를 미루고 계시지는 않았던가요? 이제 청소 일정 관리는, 이 앱으로 시작하세요!",
              students: "김장현 서문은지 이인희",
              youTubeAddress:
                "https://www.youtube.com/embed/oibZ1aAWS_I?list=PLBjx8AiS7qA0rtzpNCfKu_e54Kmd-A50D",
              website: "https://projectintheclass.github.io/CLEAN_MANAGER"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/hyu_18_01/08.png"),
              appTitle: "투위스",
              appComment:
                "내가 원하는 나의 이야기가 담긴 나만의 투어를 만들고, 진짜 재미있는 여행을 떠나자.",
              students: "김홍식 최연석",
              youTubeAddress:
                "https://www.youtube.com/embed/9_5UdSv0x8k?list=PLBjx8AiS7qA0rtzpNCfKu_e54Kmd-A50D",
              website: "https://projectintheclass.github.io/TwithS"
            }
          ]
        }
      },
      {
        curriculumName: "2018 겨울방학 중앙대학교 iOS 특강",
        data: {
          classContents: {
            image: require("@/assets/images/report-client/cau.png"),
            classTitle: "CAU iOS기반 App개발 특성화교육",
            targetStudents: "전공 & 학년 무관",
            duration: "기간 : 2017년 12월 19일 ~ 2018년 2월 12일",
            time: "시간 : 매일 오전 10시 ~ 13시 총 136시간",
            numberOfStudents: "인원 : 30명 (수료율 70%)",
            lecturers: "강사 : 고준일 | 남장혁 | 김태선 | 윤성관",
            curriculum: {
              time1: "30시간 (12월 19일 - 12월 26일)",
              time2: "39시간 (12월 26일 - 1월 15일)",
              time3: "67시간 (1월 16일 - 2월 12일)"
            },
            studentsCompletion: {
              enrollment: 30,
              track0: 30,
              track1: 25,
              track2: { students: 21, teams: 7 },
              completion: { number: 21, presentation: 7 }
            }
          },
          studentsOutcome: [
            {
              appScreen: require("@/assets/images/report-appscreen/cau_18_02/01.png"),
              appTitle: "술케줄",
              appComment: "아직도 대첵없이 술마시니? 난 술케줄로 관리해!",
              students: "공대호 임규헌 조준오",
              youTubeAddress: "https://www.youtube.com/embed/A_2NfRDa5SU",
              appStoreAddress:
                "https://itunes.apple.com/kr/app/%EC%88%A0%EC%BC%80%EC%A5%B4/id1433295127?mt=8",
              website: "https://projectintheclass.github.io/Sulchedule/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/cau_18_02/07.png"),
              appTitle: "AlbaGo",
              appComment: "아르바이트생을 위한 시급계산 및 정보제공 앱입니다.",
              students: "정다연 정소연 한명지",
              youTubeAddress: "https://www.youtube.com/embed/epHsZa06WGo",
              website: "https://projectintheclass.github.io/AlbaGo/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/cau_18_02/08.png"),
              appTitle: "꾹꾹이",
              appComment:
                "지치고 힘든, 불안한 당신을 위한 6종의 피젯토이가 한 앱에!",
              students: "박서현 고경표 고호윤",
              youTubeAddress: "https://www.youtube.com/embed/cX6GtOAQJ2g",
              website: "https://projectintheclass.github.io/GGuk/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/cau_18_02/06.png"),
              appTitle: "N빵맨",
              appComment: "모임의 마무리를 깔끔하게 지어주는 더치페이 App",
              students: "우민지 정지현 한진희",
              youTubeAddress: "https://www.youtube.com/embed/iKUJfSrh6vI",
              website:
                "https://projectintheclass.github.io/nBreadBakeryProject/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/cau_18_02/04.png"),
              appTitle: "Hard Carrot",
              appComment: "영어 회화 도우미 App",
              students: "마주한 배소연 이두호",
              youTubeAddress: "https://www.youtube.com/embed/a2vNYJk9kbM",
              website: "https://projectintheclass.github.io/ForDreamer/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/cau_18_02/02.png"),
              appTitle: "암기스택",
              appComment: "키워드와 문장으로 당신의 공부를 도와줍니다.",
              students: "곽하늘 오재현 임창성",
              youTubeAddress: "https://www.youtube.com/embed/RGv6RqEdbBs",
              website: "https://projectintheclass.github.io/Armgi/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/cau_18_02/03.png"),
              appTitle: "Noty",
              appComment: "사용자가 수정 및 직접 그리고 쓸 수 있는 다이어리앱",
              students: "김도익 안홍석 이서라",
              youTubeAddress: "https://www.youtube.com/embed/SoyasxQYNyQ",
              website: "https://projectintheclass.github.io/Noty/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/cau_18_02/05.png"),
              appTitle: "A-plus",
              appComment:
                "폴더를 통해 쉽게 분류하고 진짜 메모할 수 있는 음성메모어플리케이션",
              students: "안예림 이규백 이상민",
              youTubeAddress: "https://www.youtube.com/embed/b7jOUbAwLug",
              website: "https://projectintheclass.github.io/Aplus/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/cau_18_02/09.png"),
              appTitle: "집중",
              appComment:
                "같은 목표를 향해 함께 달릴 스터디 동료를 찾는 중앙대학교 학생을 위한, 퀄리티 있는 스터디 모집글만을 모은 심플하고 편리한 스터디 모임 플랫폼",
              students:
                "신형재 강호현 김다혜 정다예 조민정 최은정 남지민 최우리",
              youTubeAddress: "https://www.youtube.com/embed/AAG_bXx_sKU",
              appStoreAddress:
                "https://itunes.apple.com/kr/app/%EC%A7%91%EC%A4%91/id1431676325?mt=8",
              website: "https://cauios.github.io/cau_study_by_cauios/"
            }
          ]
        }
      },
      {
        curriculumName: "2018 겨울방학 고려대학교 iOS 특강",
        data: {
          classContents: {
            image: require("@/assets/images/report-client/ku.png"),
            classTitle: "iOS App Design to Develop Course",
            targetStudents: "전공 & 학년 무관",
            duration: "기간 : 2017년 12월 26일 ~ 2018년 2월 6일",
            time: "시간 : 월요일 ~ 금요일 4시간 총 120시간",
            numberOfStudents: "인원 : 정원 30명 중 수료 24명 (수료율 80%)",
            lecturers: "강사 : 이재훈 | 윤성관 | 남장혁",
            curriculum: {
              time1: "",
              time2: "36시간",
              time3: "84시간"
            },
            studentsCompletion: {
              enrollment: 30,
              track0: 0,
              track1: 24,
              track2: { students: 24, teams: 8 },
              completion: { number: 24, presentation: 8 }
            }
          },
          studentsOutcome: [
            {
              appScreen: require("@/assets/images/report-appscreen/ku_18_01/09.png"),
              appTitle: "GA Z A",
              appComment:
                "여행과 사진을 사랑하는 사람을 위한, 간단하게 여행을 포스팅하여 지도상에서 확인할 수 있는 앱",
              students: "이가은 전신영 김경린",
              youTubeAddress: "https://www.youtube.com/embed/vvakY1WjmM4",
              website: "https://kawai6214.wixsite.com/GAZZA/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/ku_18_01/07.png"),
              appTitle: "Record What You Want",
              appComment:
                "수업 내용을 녹음하는 학생들을 위한, 한 번의 터치로 수업 자료 각 포인트에 녹음을 할 수 있게 해주는, 복습을 더 편하게 할 수 있는 앱.",
              students: "김현석 엄현호 이태훈",
              youTubeAddress: "https://www.youtube.com/embed/bPU-FZ7ukpM",
              website: "https://projectintheclass.github.io/Lecture_Record/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/ku_18_01/02.png"),
              appTitle: "KUnet",
              appComment:
                "증강현실을 이용하여 고려대학교 내 한국인과 외국인 학생들의 활발한 교류를 돕는 맞춤형 매칭앱",
              students: "김재영 서정민 김미리암",
              youTubeAddress: "https://www.youtube.com/embed/fPGflvPKo0w",
              website: "https://projectintheclass.github.io/KUnet/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/ku_18_01/01.png"),
              appTitle: "잠자기5분전",
              appComment: "감수성이 풍부한 당신만을 위한 감성 생태계",
              students: "김보경 최원미 주승원",
              youTubeAddress: "https://www.youtube.com/embed/t_uXl9q_Z8o",
              website: "https://kawai6214.wixsite.com/5minutes"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/ku_18_01/06.png"),
              appTitle: "C - Lib",
              appComment:
                "다양한 패션 스타일을 구사하고 싶거나 소유하고 있는 의류를 활용하고 싶은 사람을 위한 공유 플랫폼.",
              students: "임채현 배상엽",
              youTubeAddress: "https://www.youtube.com/embed/DVR8_ijsMgw",
              website: "https://projectintheclass.github.io/Sharing-Clothes/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/ku_18_01/03.png"),
              appTitle: "문문",
              appComment:
                "당신의 삶에 영감을 불어넣을 365개의 질문! 각자의 멋진 대답으로 삶을 기록하고 공유할 수 있는 앱",
              students: "성인규 주호강 최용진",
              youTubeAddress: "https://www.youtube.com/embed/duad_W0o3t0",
              website: "https://projectintheclass.github.io/QandA/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/ku_18_01/04.png"),
              appTitle: "TODAY",
              appComment:
                "사용자 맞춤 명언앱입니다. 위젯으로 사용자가 원하는 명언을 보여줍니다. 상태설정을 통해 자신이 원하는 명언을 받을 수 있습니다.",
              students: "임민진 신승우 윤진용",
              youTubeAddress: "https://www.youtube.com/embed/ohaguY3t1PM",
              website: "https://projectintheclass.github.io/TODAY/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/ku_18_01/05.png"),
              appTitle: "OSORI",
              appComment:
                "결정장애가 있는 당신을 위한 맛집부터 메뉴까지 추천해주는 리뷰 어플",
              students: "엄세웅 이경연 오주희",
              youTubeAddress: "https://www.youtube.com/embed/fJUfvpZ6E6Q",
              website: "https://projectintheclass.github.io/OSORI/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/ku_18_01/08.png"),
              appTitle: "Out Of House",
              appComment:
                "일정에 늦지 않도록 집에서 나갈 시간을 계산해주는 알람 앱 ",
              students: "노지윤 고지윤",
              youTubeAddress: "https://www.youtube.com/embed/KxR66PxJP_c",
              website: "https://projectintheclass.github.io/OOH/"
            }
          ]
        }
      },
      {
        curriculumName: "2018 겨울방학 동국대학교 iOS 특강",
        data: {
          classContents: {
            image: require("@/assets/images/report-client/dgu.png"),
            classTitle: "iOS App Design to Develop Course",
            targetStudents: "전공 & 학년 무관",
            duration: "기간 : 2017년 12월 27일 ~ 2018년 2월 13일",
            time: "시간 : 수요일 6시간, 금요일 7시간, 총 91시간",
            numberOfStudents: "인원 : 20명 (수료율 83%)",
            lecturers: "강사 : 김영후 | 윤성관 | 남장혁",
            curriculum: {
              time1: "",
              time2: "31시간",
              time3: "60시간"
            },
            studentsCompletion: {
              enrollment: 24,
              track0: 0,
              track1: 24,
              track2: { students: 20, teams: 7 },
              completion: { number: 20, presentation: 7 }
            }
          },
          studentsOutcome: [
            {
              appScreen: require("@/assets/images/report-appscreen/dgu_18_01/05.png"),
              appTitle: "원샷톡",
              appComment:
                "여러 명에게 한번에 메시지를 전송하고 싶었던 사용자들을 위한 다수의 개인톡을 보낼 수 있도록 해주는 앱",
              students: "박신원 박지용 이다훈",
              youTubeAddress: "https://www.youtube.com/embed/pkltcxtA03w",
              appStoreAddress:
                "https://itunes.apple.com/us/app/%EC%9B%90%EC%83%B7%ED%86%A1/id1350334218?mt=8",
              website: "https://projectintheclass.github.io/OneshotTalk/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/dgu_18_01/06.png"),
              appTitle: "PillingTime",
              appComment:
                "약을 복용하는 사람들을 위한 시간을 등록하면 해당시간에 약을 복용할 수 있도록 알려주는 알람 앱",
              students: "김승주 신유리 이해준",
              youTubeAddress: "https://www.youtube.com/embed/9hZ865UkV10",
              appStoreAddress:
                "https://itunes.apple.com/us/app/%ED%95%84%EB%A7%81%ED%83%80%EC%9E%84/id1350330770?mt=8",
              website: "https://projectintheclass.github.io/PillingTime/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/dgu_18_01/01.png"),
              appTitle: "도리니티",
              appComment: "3D모델 교육을 위한 앱",
              students: "김민수 김성탁 김지수",
              youTubeAddress: "https://www.youtube.com/embed/1bBU9ReBk3E",
              appStoreAddress:
                "https://itunes.apple.com/us/app/%EB%8F%84%EB%A6%AC%EB%8B%88%ED%8B%B0/id1350340428?mt=8",
              website: "https://projectintheclass.github.io/dorinity/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/dgu_18_01/02.png"),
              appTitle: "맛집go",
              appComment:
                "증강현실을 이용하여 현장에서 맛집을 찾는 사람들을 위해 사용자 주변의 맛집 상세 정보를 보여주는 앱",
              students: "김성수 이기혁 한효병",
              youTubeAddress: "https://www.youtube.com/embed/IVPQwdd2_tI",
              website: "https://projectintheclass.github.io/MJARProject/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/dgu_18_01/04.png"),
              appTitle: "스포팅",
              appComment:
                "편리한 운동 소모임 관리, SPORTING - 축구, 야구, 수영 등 원하는 종목에 참여해 보세요. Sporting은 원하는 시간 원하는 종목의 운동 모임을 관리합니다.",
              students: "조중현 최한나 한승연",
              youTubeAddress: "https://www.youtube.com/embed/81qy6hpiwQY",
              website: "https://projectintheclass.github.io/Sporting/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/dgu_18_01/03.png"),
              appTitle: "사과장터",
              appComment:
                "중고 애플제품을 구매 또는 판매하고자 하는 사람들을 위한 마켓 앱",
              students: "강경남 박현민 추정호",
              youTubeAddress: "https://www.youtube.com/embed/TSIv-5x660w",
              website: "https://projectintheclass.github.io/AppleMarket/"
            }
          ]
        }
      },
      {
        curriculumName: "2017 2학기 서울대학교 정보문화학과",
        data: {
          classContents: {
            image: require("@/assets/images/report-client/snu.png"),
            classTitle: "고급인터페이스프로그래밍 (3학점)",
            targetStudents:
              "정보문화학 전공자 중 선수과목(인터페이스 프로그래밍) 이수자",
            duration: "기간 : 2017년 9월 5일 ~ 2017년 12월 12일",
            time: "시간 : 매주 화요일 9시 30 ~ 12시 30분 총 45시간",
            numberOfStudents: "인원 : 7명",
            lecturers: "강사 : 윤성관",
            curriculum: {
              time1: "",
              time2: "",
              time3: "48시간"
            },
            studentsCompletion: {
              enrollment: 7,
              track0: 7,
              track1: 7,
              track2: { students: 7, teams: 7 },
              completion: { number: 7, presentation: 7 }
            }
          },
          studentsOutcome: [
            {
              appScreen: require("@/assets/images/report-appscreen/snu_17_02/01.png"),
              appTitle: "DayFeel",
              appComment:
                "나 자신에 대해서 잘 알고 있나요? 감정기록 일기장을 통해 나를 이해해보세요.",
              students: "김은지",
              youTubeAddress: "https://www.youtube.com/embed/rSjonWGdGds",
              website: "https://projectintheclass.github.io/DayFeel/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/snu_17_02/02.png"),
              appTitle: "Sound Diary",
              appComment:
                "사진첩이나 일기앱처럼 녹음된 사운드를 날짜/태그단위로 플레이하며 추억을 곱씹을 수 있게 하는 앱입니다.",
              students: "정윤지",
              youTubeAddress: "https://www.youtube.com/embed/I6CZmlK7HKQ",
              website: "https://projectintheclass.github.io/SoundDiary/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/snu_17_02/03.png"),
              appTitle: "StudyBookPlanner",
              appComment:
                "STUDY BOOK PLANNER에 현재 공부 중인 학습서를 등록하고 목표일을 설정하면 학습서의 목차를 기준으로 진행상황을 기록할 수 있습니다. 또한 목표일까지 학습을 완료하려면 어느 정도의 페이스로 공부를 해야하는지 알려드립니다.",
              students: "황도정",
              youTubeAddress: "https://www.youtube.com/embed/TjDmxS5vlSE",
              website: "https://projectintheclass.github.io/StudyBookPlanner/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/snu_17_02/04.png"),
              appTitle: "Vacancy",
              appComment: "미식가 드라이버를 위한 식당 및 주차공간 예약 도우미",
              students: "",
              youTubeAddress: "https://www.youtube.com/embed/Lme-NoNZcEo",
              website: "https://projectintheclass.github.io/Vacancy/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/snu_17_02/05.png"),
              appTitle: "Hey",
              appComment: "Local Notification Service",
              students: "김태현",
              youTubeAddress: "https://www.youtube.com/embed/k9gIWSpaF88",
              website: "https://projectintheclass.github.io/HEY/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/snu_17_02/06.png"),
              appTitle: "NaggingScheduler",
              appComment:
                "랜덤한 시간에 알람을 보내 잡담에서 일로 돌려보내주는 스케쥴러",
              students: "석민창",
              youTubeAddress: "https://www.youtube.com/embed/4Y8wFzxHduk",
              website: "https://projectintheclass.github.io/NaggingScheduler/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/snu_17_02/07.png"),
              appTitle: "Shanoti",
              appComment:
                "공우리 대학의 모든 정보를 Shanoti 로 손쉽게 관리하세요",
              students: "김기현",
              youTubeAddress: "https://www.youtube.com/embed/PGSmNc3Ei9c",
              website: "https://projectintheclass.github.io/Shanoti/"
            }
          ]
        }
      },
      {
        curriculumName: "2017 여름방학 고려대학교 iOS 특강",
        data: {
          classContents: {
            image: require("@/assets/images/report-client/ku.png"),
            classTitle:
              "IT 리더십 프로그램(비전공 학생들을 위한 애플 앱개발 통합 특강)",
            targetStudents: "전공 & 학년 무관",
            duration: "기간 : 2017년 7월 10일 ~ 2017년 8월 22일",
            time: "시간 : 매일 16 시 ~ 18시 총 120시간",
            numberOfStudents: "인원 : 30명 (수료율 90%)",
            lecturers: "강사 : 윤성관 | 이재훈",
            curriculum: {
              time1: "",
              time2: "36시간",
              time3: "84시간"
            },
            studentsCompletion: {
              enrollment: 27,
              track0: 27,
              track1: 25,
              track2: { students: 27, teams: 9 },
              completion: { number: 27, presentation: 9 }
            }
          },
          studentsOutcome: [
            {
              appScreen: require("@/assets/images/report-appscreen/ku_17_01/01.png"),
              appTitle: "Bingon612",
              appComment:
                "어린왕자' 속의 장미를 모티브로 만든, 빈곤한 젊은층을 위한 단순 실용 가계부 앱",
              students: "엄수림 황서진 이다인",
              youTubeAddress: "https://www.youtube.com/embed/MHSgo6I1Pec",
              website: "https://projectintheclass.github.io/Bingon612/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/ku_17_01/02.png"),
              appTitle: "CODACO",
              appComment:
                "C O D A C O 의 해시태그 검색은 당신이 원하는 것이 무엇일지 미리 예상하고 묻기도 전에 먼저 제안해 한층 더 빠른 결과를 얻도록 도와줍니다.",
              students: "aln00 dan1002 vetajung kukukuni",
              youTubeAddress: "https://www.youtube.com/embed/8LPRPnGI5zY",
              website: "https://projectintheclass.github.io/Codaco/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/ku_17_01/03.png"),
              appTitle: "KUMO",
              appComment: "유일한 고려대학교 소모임 플랫폼",
              students: "강준우 한송림 임연재",
              youTubeAddress: "https://www.youtube.com/embed/YGdA1QWViW8",
              website: "https://projectintheclass.github.io/KUMO/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/ku_17_01/04.png"),
              appTitle: "별일",
              appComment: "고려대생들을 위한 P2P 심부름 서비스앱",
              students: "문은서 고희경 김소희",
              youTubeAddress: "https://www.youtube.com/embed/dw6seoGyj2M",
              website: "https://projectintheclass.github.io/beWithMe/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/ku_17_01/05.png"),
              appTitle: "읽다",
              appComment: "당신이 읽은 소중한 책, 그리고 구절을 기록해보세요.",
              students: "kuccc hwaaang 100g1 hannRiver",
              youTubeAddress: "https://www.youtube.com/embed/RBVcRojblwU",
              website: "https://projectintheclass.github.io/READ/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/ku_17_01/06.png"),
              appTitle: "정신차려",
              appComment: "지하철에서 내릴 역을 지나칠 '당신'을 위한.",
              students: "이재택 이종호 김세준",
              youTubeAddress: "https://www.youtube.com/embed/8usSV82aXGw",
              website: "https://projectintheclass.github.io/subway-alarm/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/ku_17_01/07.png"),
              appTitle: "다다다",
              appComment: "다같이 다이어트 다이어리",
              students: "dnwnsdldi PARKINJoChang YeonYEONG vivid950",
              youTubeAddress: "https://www.youtube.com/embed/HyICKgoMRek",
              website: "https://projectintheclass.github.io/Dietor/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/ku_17_01/08.jpg"),
              appTitle: "BookTogether",
              appComment:
                "자신의 독서기록을 서재로 남기는 동시에, 친구들과 책을 추천하고 추천받는 애플리케이션",
              students: "최수정 김동엽 이아영",
              youTubeAddress: "https://www.youtube.com/embed/lBowm2rnFVY",
              website: "https://projectintheclass.github.io/BookTogether/"
            },
            {
              appScreen: "",
              appTitle: "도라가구",
              appComment: "",
              students: "",
              youTubeAddress: "https://www.youtube.com/embed/poLb0orSaJo",
              website: ""
            }
          ]
        }
      },
      {
        curriculumName: "2017 여름방학 중앙대학교 iOS 특강",
        data: {
          classContents: {
            image: require("@/assets/images/report-client/cau.png"),
            classTitle: "CAU iOS기반 App개발 특성화교육",
            targetStudents: "전공 & 학년 무관",
            duration: "기간 : 2017년 6월 26일 ~ 2017년 8월 11일",
            time: "시간 : 매일 오전 10시 ~ 13시 총 136시간",
            numberOfStudents: "인원 : 11명",
            lecturers: "강사 : 고준일 | 남장혁 | 김태선 | 윤성관",
            curriculum: {
              time1: "20시간",
              time2: "39시간",
              time3: "70시간"
            },
            studentsCompletion: {
              enrollment: 11,
              track0: 11,
              track1: 11,
              track2: { students: 11, teams: 5 },
              completion: { number: 11, presentation: 5 }
            }
          },
          studentsOutcome: [
            {
              appScreen: "",
              appTitle: "PetD",
              appComment: "하나의 어플리케이션, 모두의 어플리케이션",
              students: "조민정 이대직 신형재",
              youTubeAddress: "https://www.youtube.com/embed/ZfHJH0RvoO8",
              website: "https://projectintheclass.github.io/petd/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/cau_17_01/02.jpg"),
              appTitle: "PlanTree",
              appComment:
                "You can plan easy 'Your ToDoList'\nOpen New World of ToDoList Plan Tree",
              students: "jungdaye JungSonga cherrypach",
              youTubeAddress: "https://www.youtube.com/embed/l0yYUNda69w",
              website: "https://projectintheclass.github.io/plan-tree/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/cau_17_01/03.png"),
              appTitle: "Sider",
              appComment:
                "일상 속 고구마처럼 답답했던 점들을\n사이다처럼 속 시원하게 말할 수 있는\n대학생들의 자유로운 소통의 장입니다.",
              students: "namjimin DahyeDarling",
              youTubeAddress: "https://www.youtube.com/embed/7pP0kJrSFIg",
              website: "https://projectintheclass.github.io/siderplease/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/cau_17_01/04.png"),
              appTitle: "PTManager",
              appComment: "트레이너분들 회원 관리 어떻게 하시나요?",
              students: "최원종, 김은지",
              youTubeAddress: "https://www.youtube.com/embed/yIEkoc4bTrU",
              website: "https://projectintheclass.github.io/ptmanager/"
            },
            {
              appScreen: "",
              appTitle: "PDFNote",
              appComment:
                "Free, Easy and Safe pdf note application which makes us free from paper books.",
              students: "",
              youTubeAddress: "https://www.youtube.com/embed/qb0rQ1szd6Y",
              website: "https://projectintheclass.github.io/pdf/"
            }
          ]
        }
      },
      {
        curriculumName: "2017 1학기 한양대학교 공과대학 컴퓨터/SW 전공",
        data: {
          classContents: {
            image: require("@/assets/images/report-client/hyu.png"),
            classTitle: "iOS App Develop Course (한양대 소프트웨어 스튜디오)",
            targetStudents: "공과대학 컴퓨터/SW전공 3학년",
            duration: "기간 : 2017년 3월 9일 ~ 2017년 6월 21일",
            time: "시간 : 총 16주 48시간 (실습 32시간)",
            numberOfStudents: "인원 : 30명",
            lecturers: "강사 : 윤성관 | 이재훈",
            curriculum: {
              time1: "",
              time2: "12시간",
              time3: "36시간"
            },
            studentsCompletion: {
              enrollment: 30,
              track0: 0,
              track1: 30,
              track2: { students: 30, teams: 11 },
              completion: { number: 30, presentation: 11 }
            }
          },
          studentsOutcome: [
            {
              appScreen: "",
              appTitle: "Materbot",
              appComment: "",
              students: "",
              youTubeAddress: "https://www.youtube.com/embed/z-mj-GoZ_kY",
              website: ""
            },
            {
              appScreen: require("@/assets/images/report-appscreen/hyu_17_01/02.png"),
              appTitle: "HYU TT",
              appComment:
                "시간표 만들기부터 과목별 메모까지,\n가장 쉽고 빠른 대학생 필수 시간표 어플리케이션",
              students: "tlsqlfhdnsdl nayong isaac56",
              youTubeAddress: "https://www.youtube.com/embed/nZmL1mT9_Ko",
              website: "https://projectintheclass.github.io/HYU-TT/"
            },
            {
              appScreen: "",
              appTitle: "Recipick",
              appComment: "",
              students: "",
              youTubeAddress: "https://www.youtube.com/embed/UYsMCEzXlVw",
              website: ""
            },
            {
              appScreen: require("@/assets/images/report-appscreen/hyu_17_01/04.png"),
              appTitle: "HyLionPost",
              appComment:
                "*.hanyang.ac.kr에 올라오는 유용한 정보들을 수집해서 사용자에게 알려주는 App",
              students: "이영식 정선욱 박선하",
              youTubeAddress: "https://www.youtube.com/embed/Qxs8z-dEVwY",
              website: "https://projectintheclass.github.io/HyLionPost/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/hyu_17_01/05.png"),
              appTitle: "HYU JOKBO",
              appComment: "한양대학교\n실시간 족보 공유 IOS 앱",
              students: "신지원 박병욱 박한솔",
              youTubeAddress: "https://www.youtube.com/embed/yrlXhO96sIU",
              website: "https://projectintheclass.github.io/HyuJokbo/"
            },
            {
              appScreen: "",
              appTitle: "몸 쪽 꽉찬 공",
              appComment: "",
              students: "",
              youTubeAddress: "https://www.youtube.com/embed/HGxDbGDxJTY",
              website: ""
            },
            {
              appScreen: require("@/assets/images/report-appscreen/hyu_17_01/07.png"),
              appTitle: "First Aid",
              appComment: "전국의 대학생들이 함께 만드는 우리들의 솔루션",
              students: "허주환, 김명진, 김기황",
              youTubeAddress: "https://www.youtube.com/embed/Ln9oiVnchjk",
              website: "https://projectintheclass.github.io/firstAid/"
            },
            {
              appScreen: "",
              appTitle: "Blade & Soul의 공략을 한 손에",
              appComment: "",
              students: "",
              youTubeAddress: "https://www.youtube.com/embed/xcLWFSuPJCw",
              website: ""
            },
            {
              appScreen: "",
              appTitle: "Lol App",
              appComment: "",
              students: "",
              youTubeAddress: "https://www.youtube.com/embed/cHGyQ1cReDI",
              website: ""
            },
            {
              appScreen: require("@/assets/images/report-appscreen/hyu_17_01/10.png"),
              appTitle: "Tribucket",
              appComment: "모든 여행을 내 손으로 설계하는 앱.",
              students: "장휘수 이재영 이종욱",
              youTubeAddress: "https://www.youtube.com/embed/ynU21dY3HJs",
              website: "https://projectintheclass.github.io/TriPlanner/"
            },
            {
              appScreen: "",
              appTitle: "Password Manager",
              appComment: "",
              students: "",
              youTubeAddress: "https://www.youtube.com/embed/gvW7OL3PvYM",
              website: ""
            }
          ]
        }
      },
      {
        curriculumName: "2017 1학기 서울대학교 정보문화학과",
        data: {
          classContents: {
            image: require("@/assets/images/report-client/snu.png"),
            classTitle: "고급인터페이스프로그래밍 (3학점)",
            targetStudents:
              "정보문화학 전공자 중 선수과목(인터페이스 프로그래밍) 이수자",
            duration: "기간 : 2017년 3월 5일 ~ 2017년 6월 12일",
            time: "시간 : 매주 화요일 9시 30 ~ 12시 30분 총 45시간",
            numberOfStudents: "인원 : 8명",
            lecturers: "강사 : 윤성관",
            curriculum: {
              time1: "",
              time2: "",
              time3: "48시간"
            },
            studentsCompletion: {
              enrollment: 8,
              track0: 0,
              track1: 14,
              track2: { students: 8, teams: 8 },
              completion: { number: 8, presentation: 8 }
            }
          },
          studentsOutcome: [
            {
              appScreen: require("@/assets/images/report-appscreen/snu_17_01/01.png"),
              appTitle: "공샤",
              appComment:
                "우리 대학의 모든 정보를 \nShanoti 로 손쉽게 \n관리하세요",
              students: "gompu123 smc219",
              youTubeAddress: "https://www.youtube.com/embed/GAfTqbLUABQ",
              website: "https://projectintheclass.github.io/Shanoti/"
            },
            {
              appScreen: "",
              appTitle: "타임어택",
              appComment: "",
              students: "",
              youTubeAddress: "https://www.youtube.com/embed/gH_WIto6EWc",
              website: ""
            },
            {
              appScreen: "",
              appTitle: "Quickway",
              appComment: "",
              students: "",
              youTubeAddress: "https://www.youtube.com/embed/8wU8Ls4jaxY",
              website: ""
            },
            {
              appScreen: "",
              appTitle: "Boarding Spot",
              appComment: "",
              students: "",
              youTubeAddress: "https://www.youtube.com/embed/33m-ACH5zRY",
              website: ""
            },
            {
              appScreen: "",
              appTitle: "양도천국",
              appComment: "",
              students: "",
              youTubeAddress: "https://www.youtube.com/embed/Q_WsbdsCNhY",
              website: ""
            },
            {
              appScreen: "",
              appTitle: "Check 한자",
              appComment: "",
              students: "",
              youTubeAddress: "https://www.youtube.com/embed/sbvk_3dTwsg",
              website: ""
            },
            {
              appScreen: "",
              appTitle: "Font Scanner",
              appComment: "",
              students: "",
              youTubeAddress: "https://www.youtube.com/embed/6Ek2HPu9-VA",
              website: ""
            },
            {
              appScreen: "",
              appTitle: "Appslock",
              appComment: "",
              students: "",
              youTubeAddress: "https://www.youtube.com/embed/W3gcMj4Qj20",
              website: ""
            }
          ]
        }
      },
      {
        curriculumName: "2017 1학기 연세대학교 UIC IID 학과",
        data: {
          classContents: {
            image: require("@/assets/images/report-client/ysu.png"),
            classTitle: "2017 iOS 프로토타이핑 과정",
            targetStudents: "연세대학교 UIC IID 학과",
            duration: "기간 : 2017년 3월 6일 ~ 2017년 6월 12일",
            time: "시간 : 10:00~14:00 총 60시간",
            numberOfStudents: "인원 : 5명 (수료율 100%)",
            lecturers: "강사 : 윤성관",
            curriculum: {
              time1: "",
              time2: "60시간",
              time3: ""
            },
            studentsCompletion: {
              enrollment: 5,
              track0: 0,
              track1: 5,
              track2: { students: 14, teams: 5 },
              completion: { number: 5, presentation: 5 }
            }
          },
          studentsOutcome: [
            {
              appScreen: require("@/assets/images/report-appscreen/ysu_17_01/01.png"),
              appTitle: "Nag",
              appComment:
                "랜덤한 시간에 알람을 보내 잡담에서 일로 돌려보내주는 스케쥴러",
              students: "smc219 ape0108792",
              youTubeAddress: "https://www.youtube.com/embed/pTzQT1ofakc",
              website: "https://projectintheclass.github.io/NaggingScheduler/"
            },
            {
              appScreen: "",
              appTitle: "Connect",
              appComment: "",
              students: "",
              youTubeAddress: "https://www.youtube.com/embed/gOX1kw9hDlk",
              website: ""
            },
            {
              appScreen: "",
              appTitle: "Yopply",
              appComment: "",
              students: "",
              youTubeAddress: "https://www.youtube.com/embed/ijP5SqfuYcg",
              website: ""
            },
            {
              appScreen: "",
              appTitle: "Family Schedule Sharing",
              appComment: "",
              students: "",
              youTubeAddress: "https://www.youtube.com/embed/7lchjZNvbNI",
              website: ""
            },
            {
              appScreen: "",
              appTitle: "Fan app",
              appComment: "",
              students: "",
              youTubeAddress: "https://www.youtube.com/embed/bLkwlOcUDGo",
              website: ""
            }
          ]
        }
      },
      {
        curriculumName: "2017 겨울방학 고려대학교 iOS 특강",
        data: {
          classContents: {
            image: require("@/assets/images/report-client/ku.png"),
            classTitle: "iOS App Design to Develop Course",
            targetStudents: "전공 & 학년 무관",
            duration: "기간 : 2016년 12월 26일 ~ 2017년 2월 6일",
            time: "시간 : 월요일 ~ 금요일 4시간 총 120시간",
            numberOfStudents: "인원 : 정원 30명 중 수료 27명 (수료율 90%)",
            lecturers: "강사 : 이재훈 | 윤성관 | 남장혁",
            curriculum: {
              time1: "",
              time2: "36시간",
              time3: "84시간"
            },
            studentsCompletion: {
              enrollment: 30,
              track0: 0,
              track1: 27,
              track2: { students: 27, teams: 9 },
              completion: { number: 27, presentation: 9 }
            }
          },
          studentsOutcome: [
            {
              appScreen: require("@/assets/images/report-appscreen/ku_17_02/01.png"),
              appTitle: "Coupon4U",
              appComment: "당신을 위한 쿠폰 관리 앱",
              students: "Hyunsub Kim dan1002 terryps",
              youTubeAddress: "https://www.youtube.com/embed/4fo8imzTIWU",
              website: "https://projectintheclass.github.io/Coupon4U/"
            },
            {
              appScreen: "",
              appTitle: "JanuaryFirst",
              appComment: "",
              students: "",
              youTubeAddress: "https://www.youtube.com/embed/YZSjCZoDPj8"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/ku_17_02/03.png"),
              appTitle: "KUMap",
              appComment: "고려대학교 구성원들을 위한 위치기반 정보공유 앱",
              students: "Kiyou Kim",
              youTubeAddress: "https://www.youtube.com/embed/ecgyKhyj7JA",
              website: "https://projectintheclass.github.io/KUMap/"
            },
            {
              appScreen: "",
              appTitle: "JiPangE",
              appComment: "나를 위한 최고의 산책로 찾기",
              students: "eatyourmeat ksh3172",
              youTubeAddress: "https://www.youtube.com/embed/6SnFTJKMS0c",
              website: "https://projectintheclass.github.io/JiPangE/"
            },
            {
              appScreen: "",
              appTitle: "Scrapper",
              appComment:
                "온라인에서 유용한 페이지를 카테고리별로 분류, 저장하여 자신이 원할 때 볼 수 있는 앱",
              students: "이영서 조일근 차준엽",
              youTubeAddress: "https://www.youtube.com/embed/7vY53YXscEo",
              website: "https://projectintheclass.github.io/scrapper/"
            },
            {
              appScreen: "",
              appTitle: "SleepStudy",
              appComment: "",
              students: "alpaca purification irishev iany12",
              youTubeAddress: "https://www.youtube.com/embed/6h7zbUE-sn0"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/ku_17_02/07.png"),
              appTitle: "Refrigrator",
              appComment:
                "남은 음식들, 유통기한이 임박한 음식들로 새롭고 간단한 요리를 탄생시켜 보세요.",
              students: "seoyeonyoon MinSeobi",
              youTubeAddress: "https://www.youtube.com/embed/y-w9jjQKR8k",
              website: "https://projectintheclass.github.io/Refrigerator/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/ku_17_02/08.png"),
              appTitle: "dDAnd",
              appComment:
                "'딴드(dAEnd)'는 사진에 필터를 씌워 사용자의 앨범 내부에 저장하고 다른 연결 프로그램을 통해 공유할 수 있는 어플리케이션이다.",
              students: "korea160210 minjujeong",
              youTubeAddress: "https://www.youtube.com/embed/9ZRsZaWYo38",
              website: "https://projectintheclass.github.io/dAEnd/"
            },
            {
              appScreen: "",
              appTitle: "시간이없다",
              appComment: "",
              students: "",
              youTubeAddress: "https://www.youtube.com/embed/tFGl8SCCuhc"
            }
          ]
        }
      },
      {
        curriculumName: "2017 겨울방학 중앙대학교 iOS 특강",
        data: {
          classContents: {
            image: require("@/assets/images/report-client/cau.png"),
            classTitle: "CAU iOS기반 App개발 특성화교육",
            targetStudents: "전공 & 학년 무관",
            duration: "기간 : 2016년 12월 19일 ~ 2017년 2월 12일",
            time: "시간 : 매일 오전 10시 ~ 13시 총 136시간",
            numberOfStudents: "인원 : 30명 (수료율 70%)",
            lecturers: "강사 : 고준일 | 남장혁 | 윤성관",
            curriculum: {
              time1: "20시간",
              time2: "39시간",
              time3: "70시간"
            },
            studentsCompletion: {
              enrollment: 30,
              track0: 30,
              track1: 25,
              track2: { students: 21, teams: 7 },
              completion: { number: 21, presentation: 7 }
            }
          },
          studentsOutcome: [
            {
              appScreen: "",
              appTitle: "Roomagery",
              appComment: "",
              students: "",
              youTubeAddress: "https://www.youtube.com/embed/nmYHZjBn5aM",
              website: "https://projectintheclass.github.io/Roomagery/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/cau_17_02/radioScreen.png"),
              appTitle: "영어 라디오 PRO",
              appComment:
                "'영어 라디오 PRO - News & Talk'는 영어권 국가의 토크, 뉴스 위주의 라디오 채널을 모아놓은 간편한 라디오 앱입니다.",
              students: " 권병수.",
              youTubeAddress: "https://www.youtube.com/embed/gS69MRKi-s4"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/cau_17_02/booknoteScreen.png"),
              appTitle: "BookNotes",
              appComment:
                "독서 노트는 책을 읽고 자신의 생각을 정리할 수 있는 앱입니다.",
              students: "신길용",
              youTubeAddress: "https://www.youtube.com/embed/mAz1SX3yTv4"
            },
            {
              appScreen: "",
              appTitle: "Memories",
              appComment: "",
              students: "",
              youTubeAddress: "https://www.youtube.com/embed/ZddK_nURi34",
              website: "https://projectintheclass.github.io/Memories/"
            },
            {
              appScreen: "",
              appTitle: "SeizeTheDay",
              appComment: "",
              students: "",
              youTubeAddress: "https://www.youtube.com/embed/8wFHh1WJjNw",
              website: "https://projectintheclass.github.io/SeizeTheDay/"
            },
            {
              appScreen: "",
              appTitle: "TravelRecorder",
              appComment: "",
              students: "",
              youTubeAddress: "https://www.youtube.com/embed/gmk1Im1qQpU",
              website: "https://projectintheclass.github.io/Review/"
            },
            {
              appScreen: "",
              appTitle: "Campuddy",
              appComment: "",
              students: "",
              youTubeAddress: "https://www.youtube.com/embed/4bwYbk2LUPE",
              website: "https://projectintheclass.github.io/Campuddy/"
            }
          ]
        }
      },
      {
        curriculumName: "2016 2학기 서울대학교 정보문화학과",
        data: {
          classContents: {
            image: require("@/assets/images/report-client/snu.png"),
            classTitle: "고급인터페이스프로그래밍 (3학점)",
            targetStudents:
              "정보문화학 전공자 중 선수과목(인터페이스 프로그래밍) 이수자",
            duration: "기간 : 2016년 9월 5일 ~ 2016년 12월 12일",
            time: "시간 : 매주 화요일 9시 30 ~ 12시 30분 총 45시간",
            numberOfStudents: "인원 : 5명",
            lecturers: "강사 : 윤성관",
            curriculum: {
              time1: "",
              time2: "",
              time3: "48시간"
            },
            studentsCompletion: {
              enrollment: 5,
              track0: 0,
              track1: 0,
              track2: { students: 5, teams: 5 },
              completion: { number: 5, presentation: 5 }
            }
          },
          studentsOutcome: [
            {
              appScreen: require("@/assets/images/report-appscreen/snu_16_02/01.png"),
              appTitle: "Zipple",
              appComment:
                "잊고 있던 아날로그 감성 디지털 시대에도 간직하세요 집사람 사진첩과 함께",
              students: "thinkBAEK",
              youTubeAddress: "https://www.youtube.com/embed/jYnAFGDr49g",
              website: "https://projectintheclass.github.io/zipple/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/snu_16_02/02.png"),
              appTitle: "Idle Timer",
              appComment:
                "집중을 도와주는 타이머 + Idle 게임 핸드폰 사용을 멈추고 자신의 일에 집중하세요. 그리고, 게임을 즐기세요",
              students: "한상훈",
              youTubeAddress: "https://www.youtube.com/embed/zorsXBlSKcg",
              website: "https://projectintheclass.github.io/IdleTimer/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/snu_16_02/03.png"),
              appTitle: "MAL",
              appComment: "INTERACTIVE APP FOR IOS DEVICES",
              students: "김민아",
              youTubeAddress: "https://www.youtube.com/embed/jhcdnKtPb6I",
              website: "https://projectintheclass.github.io/MinApp/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/snu_16_02/04.png"),
              appTitle: "엄마오늘비와",
              appComment:
                "매일매일 날씨를 확인하기는 귀찮은 사람들을 위해 어제 날씨와 오늘 날씨를 비교해 큰 차이가 있을 때에만 알림을 보내주는 날씨 앱",
              students: "KIMJYoung",
              youTubeAddress: "https://www.youtube.com/embed/SIZqe8zoR0o",
              website: "https://projectintheclass.github.io/weatherForecast/"
            },
            {
              appScreen: "",
              appTitle: "ExpCatcher",
              appComment: "",
              students: "",
              youTubeAddress: "https://www.youtube.com/embed/Ji_5afb4eAI"
            }
          ]
        }
      },
      {
        curriculumName: "2016 2학기 한양대학교 공과대학 컴퓨터/SW 전공",
        data: {
          classContents: {
            image: require("@/assets/images/report-client/hyu.png"),
            classTitle: "iOS App Develop Course (한양대 소프트웨어 스튜디오)",
            targetStudents: "공과대학 컴퓨터/SW전공 3학년",
            duration: "기간 : 2016년 9월 5일 ~ 2016년 12월 15일",
            time: "시간 : 총 16주 48시간 (실습 32시간)",
            numberOfStudents: "인원 : 23명",
            lecturers: "강사 : 윤성관",
            curriculum: {
              time1: "",
              time2: "12시간",
              time3: "36시긴"
            },
            studentsCompletion: {
              enrollment: 23,
              track0: 0,
              track1: 23,
              track2: { students: 23, teams: 8 },
              completion: { number: 23, presentation: 8 }
            }
          },
          studentsOutcome: [
            {
              appScreen: require("@/assets/images/report-appscreen/hyu_16_02/01.png"),
              appTitle: "Fruit",
              appComment: "A+를 받고싶은 대학생을 위한 어플리케이션",
              students: "박정진 박소희 오소연",
              youTubeAddress: "https://www.youtube.com/embed/Fk0pwa2z0kE",
              website: "https://projectintheclass.github.io/Fruit/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/hyu_16_02/02.png"),
              appTitle: "GameRecommender",
              appComment:
                "7개의 랜덤 게임카드들을 User에게 소개해주고 User는 해당 게임카드들에 대한 별점을 매기게 되며 이 결과를 토대로 앱에서 User가 원할만한 게임카드를 추천해 주는 시스템",
              students: "고석원 서상원",
              youTubeAddress: "https://www.youtube.com/embed/SMTsCkHoMTI",
              website: "https://projectintheclass.github.io/GameRecommender/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/hyu_16_02/03.png"),
              appTitle: "GamsungDiary",
              appComment: "일상에 지친 현대인을 위한 감정 기록 다이어리",
              students: "손서희 이지영 김태향",
              youTubeAddress: "https://www.youtube.com/embed/zlrfcUR7jNw",
              website: "https://projectintheclass.github.io/Gamsung/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/hyu_16_02/04.png"),
              appTitle: "BigPicture",
              appComment: "The Big Picture makes it easy to manage your tasks.",
              students: "함치헌 구경호 정승철",
              youTubeAddress: "https://www.youtube.com/embed/8iKvfBW2w6o",
              website: "https://projectintheclass.github.io/TheBigPicture/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/hyu_16_02/05.png"),
              appTitle: "Sue4U",
              appComment:
                "“고소를 하고 싶어하는 사람들” 을 위한 “손쉽게 고소할 수 있는” “대리고소 매칭” 앱",
              students: "changhee1 hobeoung dizzymon2",
              youTubeAddress: "https://www.youtube.com/embed/vN1z-nUk91w",
              website: "https://projectintheclass.github.io/Sue4U/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/hyu_16_02/06.png"),
              appTitle: "맛집",
              appComment: "양심없는 이중 메뉴판은 이제 그만",
              students: "강준모 박경원 이재훈",
              youTubeAddress: "https://www.youtube.com/embed/NbfNXsLBIFs",
              website: "https://projectintheclass.github.io/MatZyp/"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/hyu_16_02/07.png"),
              appTitle: "YogiPC",
              appComment:
                "친구들과 함께 게임하고 싶을 때 PC방 자리를 찾는 수고를 덜어주는 앱",
              students: "ryj0902 kcross4 binDongKim",
              youTubeAddress: "https://www.youtube.com/embed/GIZ6sWPNl6k",
              website: "https://projectintheclass.github.io/YogiPC/#"
            },
            {
              appScreen: require("@/assets/images/report-appscreen/hyu_16_02/08.png"),
              appTitle: "Noti",
              appComment:
                "Noti를 통해 새로운 형태의 메세지 앱 경험을 할 수 있습니다.",
              students: "이채원 이하용 황정보",
              youTubeAddress: "https://www.youtube.com/embed/f3irFMOF1xQ",
              website: "https://projectintheclass.github.io/Noti/"
            }
          ]
        }
      },
      {
        curriculumName: "2016 2학기 연세대학교 UIC IID 학과",
        data: {
          classContents: {
            image: require("@/assets/images/report-client/ysu.png"),
            classTitle: "2016 iOS 프로토타이핑 과정",
            targetStudents: "연세대학교 UIC IID 학과 재학생",
            duration: "기간 : 2016년 9월 6일 ~ 2016년 12월 12일",
            time: "시간 : 10:00~14:00 총 60시간",
            numberOfStudents: "인원 : 5명 (수료율 100%)",
            lecturers: "강사 : 윤성관",
            curriculum: {
              time1: "",
              time2: "60시간",
              time3: ""
            },
            studentsCompletion: {
              enrollment: 5,
              track0: 0,
              track1: 5,
              track2: { students: 14, teams: 5 },
              completion: { number: 5, presentation: 5 }
            }
          },
          studentsOutcome: [
            {
              appScreen: "",
              appTitle: "DoIt_IID",
              appComment: "",
              students: "",
              youTubeAddress: "https://www.youtube.com/embed/REkBgY74hTc"
            },
            {
              appScreen: "",
              appTitle: "SchedulePet",
              appComment: "",
              students: "",
              youTubeAddress: "https://www.youtube.com/embed/c2oW13OFEg0"
            },
            {
              appScreen: "",
              appTitle: "Clear",
              appComment: "",
              students: "",
              youTubeAddress: "https://www.youtube.com/embed/WErUASt24fo"
            },
            {
              appScreen: "",
              appTitle: "TheCooTour_IID",
              appComment: "",
              students: "",
              youTubeAddress: "https://www.youtube.com/embed/82MlzBzhYiw"
            },
            {
              appScreen: "",
              appTitle: "Commit2U_IID",
              appComment: "",
              students: "",
              youTubeAddress: "https://www.youtube.com/embed/cHLFOO9QPsw"
            }
          ]
        }
      },
      {
        curriculumName: "2016 2학기 동국대학교 멀티미디어학과",
        data: {
          classContents: {
            image: require("@/assets/images/report-client/dgu.png"),
            classTitle: "iOS App Design to Develop Course",
            targetStudents: "동국대학교 멀티미디어공학과",
            duration: "기간 : 2016년 9월 5일 ~ 2016년 12월 15일",
            time: "시간 : 총 16주 48시간 (실습 32시간)",
            numberOfStudents: "인원 : 7명",
            lecturers: "강사 : 윤성관",
            curriculum: {
              time1: "",
              time2: "12시간",
              time3: "32시간"
            },
            studentsCompletion: {
              enrollment: 7,
              track0: 0,
              track1: 7,
              track2: { students: 7, teams: 3 },
              completion: { number: 7, presentation: 3 }
            }
          },
          studentsOutcome: [
            {
              appScreen: require("@/assets/images/report-appscreen/dgu_16_01/01.png"),
              appTitle: "CalendarVot",
              appComment: "투표를 통한 모임 일정 관리 iMessage App",
              students: "염혜리 좌정우",
              youTubeAddress: "https://www.youtube.com/embed/L_2avDz-KRA",
              website: "https://projectintheclass.github.io/Calendar-Vot/"
            },
            {
              appScreen: "",
              appTitle: "PinSwift",
              appComment: "",
              students: "",
              youTubeAddress: "https://www.youtube.com/embed/Vv-IfKtOj7s"
            },
            {
              appScreen: "",
              appTitle: "사다리",
              appComment: "",
              students: "",
              youTubeAddress: "https://www.youtube.com/embed/abQSFLRuGC4"
            }
          ]
        }
      },
      {
        curriculumName: "2016 1학기 서울대학교 정보문화학과",
        data: {
          classContents: {
            image: require("@/assets/images/report-client/snu.png"),
            classTitle: "고급인터페이스프로그래밍 (3학점)",
            targetStudents:
              "정보문화학 전공자 중 선수과목(인터페이스 프로그래밍) 이수자",
            duration: "기간 : 2016년 3월 5일 ~ 2016년 6월 12일",
            time: "시간 : 매주 화요일 9시 30 ~ 12시 30분 총 45시간",
            numberOfStudents: "인원 : 15명",
            lecturers: "강사 : 윤성관",
            curriculum: {
              time1: "",
              time2: "",
              time3: "48시간"
            },
            studentsCompletion: {
              enrollment: 15,
              track0: 0,
              track1: 14,
              track2: { students: 15, teams: 15 },
              completion: { number: 15, presentation: 15 }
            }
          },
          studentsOutcome: [
            {
              appScreen: "",
              appTitle: "길찾샤",
              appComment: "",
              students: "백영준",
              youTubeAddress: "https://www.youtube.com/embed/YZx-aKbSCwA"
            },
            {
              appScreen: "",
              appTitle: "Recipedia",
              appComment: "",
              students: "현유지",
              youTubeAddress: "https://www.youtube.com/embed/EaXgwTpXNOo"
            },
            {
              appScreen: "",
              appTitle: "Teamate",
              appComment: "",
              students: "이유진",
              youTubeAddress: "https://www.youtube.com/embed/GAP7Fvgh7yY"
            },
            {
              appScreen: "",
              appTitle: "실험시럼",
              appComment: "",
              students: "도홍일",
              youTubeAddress: "https://www.youtube.com/embed/BoqFSu7UE40"
            },
            {
              appScreen: "",
              appTitle: "Lookcast",
              appComment: "",
              students: "구연재",
              youTubeAddress: "https://www.youtube.com/embed/Y9qAHPi0sxQ"
            },
            {
              appScreen: "",
              appTitle: "Bookrap",
              appComment: "",
              students: "강민구",
              youTubeAddress: "https://www.youtube.com/embed/Vt3ihpbVKCM"
            },
            {
              appScreen: "",
              appTitle: "GetItCheap",
              appComment: "",
              students: "유슬기",
              youTubeAddress: "https://www.youtube.com/embed/H1qFt872i7w"
            },
            {
              appScreen: "",
              appTitle: "GrandsPhoto",
              appComment: "",
              students: "김승현",
              youTubeAddress: "https://www.youtube.com/embed/31c8X7cskl4"
            },
            {
              appScreen: "",
              appTitle: "TravelLog",
              appComment: "",
              students: "조원희",
              youTubeAddress: "https://www.youtube.com/embed/Ngd2-p3n7ao"
            },
            {
              appScreen: "",
              appTitle: "매일운동",
              appComment: "",
              students: "김주영",
              youTubeAddress: "https://www.youtube.com/embed/NZvzFF6u064"
            },
            {
              appScreen: "",
              appTitle: "PhotoAny",
              appComment: "",
              students: "황도증",
              youTubeAddress: "https://www.youtube.com/embed/nw4YqTMcY9g"
            },
            {
              appScreen: "",
              appTitle: "Clute",
              appComment: "",
              students: "이현정",
              youTubeAddress: "https://www.youtube.com/embed/U4Ub8unRgmA"
            },
            {
              appScreen: "",
              appTitle: "66HabitMaker",
              appComment: "",
              students: "서연",
              youTubeAddress: "https://www.youtube.com/embed/LkwZpsgj8uA"
            },
            {
              appScreen: "",
              appTitle: "Moaju",
              appComment: "",
              students: "김정환",
              youTubeAddress: "https://www.youtube.com/embed/vELTUkZgQpw"
            },
            {
              appScreen: "",
              appTitle: "EZLOL",
              appComment: "",
              students: "최현석",
              youTubeAddress: "https://www.youtube.com/embed/B3i0lGTImXQ"
            }
          ]
        }
      },
      {
        curriculumName: "2016 겨울방학 고려대학교 iOS 특강",
        data: {
          classContents: {
            image: require("@/assets/images/report-client/ku.png"),
            classTitle: "iOS App Design to Develop Course",
            targetStudents: "전공 & 학년 무관",
            duration: "기간 : 2015년 12월 26일 ~ 2016년 2월 6일",
            time: "시간 : 월요일 ~ 금요일 4시간 총 120시간",
            numberOfStudents: "인원 : 정원 20명",
            lecturers: "강사 : 윤성관",
            curriculum: {
              time1: "",
              time2: "36시간",
              time3: "84시간"
            },
            studentsCompletion: {
              enrollment: 20,
              track0: 0,
              track1: 20,
              track2: { students: 20, teams: 20 },
              completion: { number: 20, presentation: 20 }
            }
          },
          studentsOutcome: [
            {
              appScreen: "",
              appTitle: "Golden Time",
              appComment:
                "반복적으로 수행하는 일 들을 정해진 시간과 순서에 따라 처리할 수 있도록 도와주는 앱",
              students: "김윤성",
              youTubeAddress: "https://www.youtube.com/embed/u7BZBFDEHwY"
            },
            {
              appScreen: "",
              appTitle: "Remember Day",
              appComment:
                "자신의 하루를 기록과 사진으로 남기고 나중에 한꺼번에 보고 싶으나 의지 박약으로 한 달 이상 기록을 남기지 못하는 사람들으 위한 알람 기능이 있는 가벼운 기록 앱",
              students: "김도연",
              youTubeAddress: "https://www.youtube.com/embed/YfnnK73H7ec"
            },
            {
              appScreen: "",
              appTitle: "임상 실험 참고 어플리케이션",
              appComment:
                "학교에서 시간 당 1~2만원에 진행되는 각종 심리, 임상, 언어 실험을 진행하는 연구자들과 참가자를 연결해주는 어플리케이션",
              students: "백기현",
              youTubeAddress: "https://www.youtube.com/embed/F45LM-IITCY"
            },
            {
              appScreen: "",
              appTitle: "MakeYourPush",
              appComment:
                "여러 웹사이트에서 찾고자 하는 정보를 매번 들어가서 보기 귀찮은 사람들을 위해, 원하는 정보가 올라왔을 때 바로 푸쉬나 알림을 주고 앱 내에서 링크를 걸어주는 앱",
              students: "김동환",
              youTubeAddress: "https://www.youtube.com/embed/mZsK2hKTqco"
            },
            {
              appScreen: "",
              appTitle: "편의점 어플리케이션",
              appComment: "편의점 상품 소개 어플리케이션",
              students: "박태선",
              youTubeAddress: "https://www.youtube.com/embed/cgqWYy3nVzs"
            },
            {
              appScreen: "",
              appTitle: "Bow-wow",
              appComment: "반려견 통합 관리 앱",
              students: "양승호",
              youTubeAddress: "https://www.youtube.com/embed/y4W8AhSynPE"
            },
            {
              appScreen: "",
              appTitle: "MA",
              appComment:
                "스케쥴이 복잡한 사람들을 위해 약속을 잡을 사람과 자신의 일정을 비교하여 언제 약속을 잡을 수 있는 지 보여주고 바로 약속을 잡을 수 있는 앱",
              students: "강현구",
              youTubeAddress: "https://www.youtube.com/embed/4-PKaNbdzCI"
            },
            {
              appScreen: "",
              appTitle: "우리학교마을",
              appComment:
                "대학교를 기반으로 동문들이 서로에게 쉽게 도움을 요청하고, 도움을 제공할 수 있는 장을 제공하는 어플리케이션",
              students: "최세진",
              youTubeAddress: "https://www.youtube.com/embed/_TdMohPadEw"
            },
            {
              appScreen: "",
              appTitle: "MusicSheet Manager",
              appComment:
                "피아노연주를 취미로 하고 모바일 디바이스로 악보를 보는 사람들을 위한 악보를 자동으로 넘겨주는 앱",
              students: "이지헌",
              youTubeAddress: "https://www.youtube.com/embed/PPlNNlrNXjw"
            },
            {
              appScreen: "",
              appTitle: "TeacherNStudent",
              appComment:
                "과외 선생님, 과외 학생, 학부모가 카메라와 그림판을 통해 질문 사항을 해결하고 과제를 체크 하는 앱",
              students: "김경민",
              youTubeAddress: "https://www.youtube.com/embed/rpd9WUwOoCM"
            },
            {
              appScreen: "",
              appTitle: "xLANGUAGE",
              appComment:
                "언어를 계속 배우고 싶은 사람들이 배우고 싶은 언어의 원어민들과 채팅하고 단어장을 쉽게 관리하며 언어 하나를 외우기 위한 레벨 업데이트 기능을 가지고 있는 앱",
              students: "최스타니슬라브",
              youTubeAddress: "https://www.youtube.com/embed/PrM0TFEJEl0"
            },
            {
              appScreen: "",
              appTitle: "ColCal",
              appComment:
                "학교 생활에 항상 신경을 써야하는 대학생들을 위해 일정, 과제, 졸업사정표 등 여러 정보를 저장하고 확인할 수 있는 대학 생활 앱",
              students: "서배근",
              youTubeAddress: "https://www.youtube.com/embed/7cTEPxXZCDo"
            },
            {
              appScreen: "",
              appTitle: "PlanA",
              appComment:
                "여행을 막연히 꿈꾸는 사람들을 위해 지도에서 선택한 목적지들을 이어서 루트를 가시적으로 핀과 선으로 보여주는 앱",
              students: "박시화",
              youTubeAddress: "https://www.youtube.com/embed/RMtzUhYjiWo"
            },
            {
              appScreen: "",
              appTitle: "MidPoint",
              appComment:
                "서로 다른 장소에 위치해 있는 두 사람을 위해 중간 지점을 계산하여 알려주고 약속 장소를 추천해 주는 앱",
              students: "이채윤",
              youTubeAddress: "https://www.youtube.com/embed/RMtzUhYjiWo"
            },
            {
              appScreen: "",
              appTitle: "맛집앱",
              appComment: "신입생들을 위한 학교 주변 맛집 소개해주는 앱",
              students: "허재성",
              youTubeAddress: "https://www.youtube.com/embed/8_YGpqXTNTs"
            },
            {
              appScreen: "",
              appTitle: "MatchMaker",
              appComment:
                "길거리 농구를 함께 할 사람을 온라인에서 찾을 수 있는 어플리케이션",
              students: "김지회",
              youTubeAddress: "https://www.youtube.com/embed/KSC6wkL66AQ"
            },
            {
              appScreen: "",
              appTitle: "Koreapas",
              appComment: "주로 며책의 게시판만 이용하는 사용자를 위한 앱",
              students: "손창우",
              youTubeAddress: "https://www.youtube.com/embed/DbMfKq-V_6Q"
            },
            {
              appScreen: "",
              appTitle: "Contest Exhibit App",
              appComment:
                "공모전에 고나심이 많은 사람들을 위해 관심있는 카테고리를 토대로 공모전 정보를 전달해주는 애 ",
              students: "유정민",
              youTubeAddress: "https://www.youtube.com/embed/_9iYQzaLuFI"
            },
            {
              appScreen: "",
              appTitle: "FITPAIR",
              appComment:
                "FitPair는 바쁜 현대인들을 위해 원하는 운동부위, 스케쥴, 장소를 매칭하여 운동 파트너를 실시간으로 찾아주는 앱",
              students: "구정우",
              youTubeAddress: "https://www.youtube.com/embed/KGKeE5QZFFY"
            },
            {
              appScreen: "",
              appTitle: "책거래 서비스",
              appComment: "위치기반 책 직거래 서비스",
              students: "김형민",
              youTubeAddress: "https://www.youtube.com/embed/JYe76m9VjjM"
            }
          ]
        }
      }
    ];
    this.currentOutcome = this.outcomes.filter(
      e => e.curriculumName === this.title
    )[0].data;
  }
};
</script>

<style scoped>
#rectangle {
  width: 0.5em;
  background: #00b3fe;
  margin-right: 1em;
}
.circleBase {
  display: inline-block;
  border: 0.7rem solid #00b3fe;
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
  display: table-cell;
  vertical-align: middle;
}
.circleBase-none {
  display: inline-block;
  border: 0.7rem solid #f5f5f5;
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
  display: table-cell;
  vertical-align: middle;
}
.hline {
  border-bottom: 3px solid #384452;
  margin: 10px;
}
</style>
