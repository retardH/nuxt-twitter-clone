<template>
<MainSection title="Home" :loading="loading">
  <head>
    <title>Home | Twitter</title>
  </head>
  <div class="border-b" :class="twitterBorderColor">
    <tweet-form :user="user"/>
  </div>
  <tweet-list-feed :tweets="homeTweets"/>
</MainSection>
</template>
<script setup>
const {twitterBorderColor} = useTailwindConfig();
const {getTweets} = useTweets();
const loading = ref(false);
const {useAuthUser} = useAuth();
const homeTweets = ref([]);
const user = useAuthUser();
onBeforeMount(async () => {
  loading.value = true;
  try {
    const {tweets} = await getTweets();
    homeTweets.value = tweets;
  } catch (e) {
    console.log(e);
  } finally {
    loading.value = false;
  }
})
</script>