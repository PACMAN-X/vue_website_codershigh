<template>
  <div>
    <b-navbar toggleable="lg" class="navbar-default fixed-top" type="dark">
      <b-navbar-brand :to="{ name: 'home' }">
        <img src="@/assets/images/codershighAssets/codershighLogo.png" />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse class="mb-1" id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item :to="{ name: 'home' }">홈</b-nav-item>
          <b-nav-item :to="{ name: 'about' }">소개</b-nav-item>
          <b-nav-item :to="{ name: 'portfolio' }">수강생 작품</b-nav-item>
          <b-nav-item :to="{ name: 'techblog' }">기술블로그</b-nav-item>
          <b-nav-item :to="{ name: 'edublog' }">교육블로그</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style>
.navbar-default {
  background-color: #103f62;
  border-color: transparent;
  text-align: center;
}
</style>
