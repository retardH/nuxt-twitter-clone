<template>
  <div>
    <MainSection title="Tweet" :loading="loading">
      <head>
        <title>Home | Twitter</title>
      </head>
      <TweetDetails :tweet="tweet" :user="user"/>
    </MainSection>
  </div>
</template>

<script setup>
const loading = ref(false);
const tweet = ref(null);
const {getTweetById} = useTweets();
const {useAuthUser} = useAuth();
const user = useAuthUser();
const getTweetIdFromRoute = () => {
  return useRoute().params.id;
}
watch(() => useRoute().fullPath, () => {
  getTweet();
})
const getTweet = async () => {
  loading.value = true;
  try {
    const response = await getTweetById(getTweetIdFromRoute());
    console.log(response);
    tweet.value = response.tweet;
  } catch (e) {
    console.log(e);
  } finally {
    loading.value = false;
  }
}
onBeforeMount(() => {
  getTweet();
})
</script>