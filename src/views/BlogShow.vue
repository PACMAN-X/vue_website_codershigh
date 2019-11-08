<template>
  <div class="size">
    <b-embed type="iframe" aspect="16by9" :src="url" allowfullscreen></b-embed>
  </div>
</template>

<script>
export default {
  props: ["id", "url"]
};
</script>

<style></style>
