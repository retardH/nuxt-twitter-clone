<template>
  <div>
    <div v-if="loading" class="flex items-center justify-center">
      <u-i-spinner />
    </div>
    <div v-else>
      <tweet-form-input :user="props.user" @on-submit="handleFormSubmit"/>
    </div>
  </div>
</template>

<script setup>
const {postTweet} = useTweets();
const loading = ref(false);
const props = defineProps({
  user: {
    type: Object,
    required: true,
  }
})
const handleFormSubmit = async (data) => {
  loading.value = true;
  try {
    const response = await postTweet({
      text: data.text,
      mediaFiles: data.mediaFiles
    });
    alert(JSON.stringify(response));
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
}
</script>