import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Portfolio from "./views/Portfolio.vue";
import TechBlog from "./views/TechBlog.vue";
import EduBlog from "@/views/EduBlog.vue";
import BlogShow from "@/views/BlogShow.vue";
import AppStoreShow from "@/views/AppStoreShow.vue";
import ReportShow from "@/views/ReportShow.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: Portfolio
    },
    {
      path: "/techblog",
      name: "techblog",
      component: TechBlog
    },
    {
      path: "/reportShow/:title",
      name: "reportShow",
      component: ReportShow,
      props: true
    },
    {
      path: "/edublog",
      name: "edublog",
      component: EduBlog
    },
    {
      path: "/blog/:id",
      name: "blogshow",
      component: BlogShow,
      props: true
    },
    {
      path: "/appStoreShow",
      name: "appStoreShow",
      component: AppStoreShow
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});
