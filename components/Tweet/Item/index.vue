<template>
  <div>
    <TweetItemHeader :tweet="props.tweet"/>
    <div class="ml-16 flex flex-col">
      <p class="flex-shrink text-base  text-gray-800 dark:text-white">
        {{props.tweet.text}}
      </p>
      <div v-for="image in tweet.mediaFiles" :key="image.id">
        <img :src="image.url" alt="" class="flex my-3 max-w-[520px] border-[1px] rounded-2xl" :class="twitterBorderColor"/>
      </div>
      <div class="mt-1">
        <TweetItemActions :tweet="props.tweet"/>
      </div>
    </div>
  </div>
</template>

<script setup>
const {twitterBorderColor} = useTailwindConfig();
const props = defineProps({
  tweet: {
    type: Object,
    required: true
  }
})
</script>