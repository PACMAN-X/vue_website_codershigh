<template>
  <div>
    <div class="mb-2" v-if="report.title != '결과물 더 보기'">
      <router-link
        :to="{
          name: 'reportShow',
          params: { title: report.title, target: '_blank' }
        }"
        >{{ report.title }}</router-link
      >
    </div>
    <div v-else>
      <router-link :to="{ name: 'portfolio' }">{{ report.title }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    report: {
      type: Object
    }
  }
};
</script>

<style scoped></style>
