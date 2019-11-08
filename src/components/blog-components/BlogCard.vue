<template>
  <div class="mb-2">
    <router-link
      :to="{ name: 'blogshow', params: { id: article.id, url: article.url } }"
    >
      {{ article.title }}
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object
    }
  }
};
</script>

<style></style>
