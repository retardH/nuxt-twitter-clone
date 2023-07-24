<template>
  <div>
    <TweetItemHeader :tweet="props.tweet"/>
    <div :class="tweetBodyWrapper">
      <p class="flex-shrink text-base  text-gray-800 dark:text-white" :class="textSize">
        {{props.tweet.text}}
      </p>
      <div v-for="image in tweet.mediaFiles" :key="image.id">
        <img :src="image.url" alt="" class="flex my-3 border-[1px] rounded-2xl" :class="[twitterBorderColor, imageWidth]"/>
      </div>
      <div class="mt-1">
        <TweetItemActions :tweet="props.tweet" :compact="props.compact"/>
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
  },
  compact: {
    type: Boolean,
    default: false
  }
})
const tweetBodyWrapper = computed(() => props.compact ? 'ml-16' : 'mx-2 mt-4');
const imageWidth = computed(() => props.compact ? 'max-w-[520px]' : 'w-full');
const textSize = computed(() => props.compact ? 'text-base' : 'text-xl');
</script>