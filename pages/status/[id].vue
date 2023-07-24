<template>
  <div>
    <MainSection title="Tweet" :loading="loading">
      <head>
        <title>Home | Twitter</title>
      </head>
<!--      <div class="border-b" :class="twitterBorderColor">-->
<!--        <tweet-form :user="user"/>-->
<!--      </div>-->
<!--      <tweet-list-feed :tweets="homeTweets"/>-->
      <p>Tweet detail page</p>
    </MainSection>
  </div>
</template>

<script setup>
const loading = ref(false);
</script>