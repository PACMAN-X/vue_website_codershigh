<template>
  <div class="mb-2">
    <router-link
      :to="{
        name: 'reportShow',
        params: { title: report.title, target: '_blank' }
      }"
      >{{ report.title }}</router-link
    >
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
