<template>
  <div class="flex items-center justify-around w-full">
    <TweetItemActionsIcon color="blue" :size="size">
      <template v-slot:icon="{classes}">
        <ChatBubbleOvalLeftIcon :class="classes"/>
      </template>
      <template v-slot:default>
        {{props.tweet.repliesCount}}
      </template>
    </TweetItemActionsIcon>
    <TweetItemActionsIcon color="green" :size="size">
      <template v-slot:icon="{classes}">
        <ArrowPathIcon :class="classes"/>
      </template>
      <template v-slot:default>
        {{generateRandomNumber()}}
      </template>
    </TweetItemActionsIcon>
    <TweetItemActionsIcon color="red" :size="size">
      <template v-slot:icon="{classes}">
        <HeartIcon :class="classes"/>
      </template>
      <template v-slot:default>
        {{generateRandomNumber()}}
      </template>
    </TweetItemActionsIcon>
    <TweetItemActionsIcon color="yellow" :size="size">
      <template v-slot:icon="{classes}">
        <ArrowUpTrayIcon :class="classes"/>
      </template>
      <template v-slot:default>
        {{generateRandomNumber()}}
      </template>
    </TweetItemActionsIcon>
  </div>
</template>

<script setup>
import { ChatBubbleOvalLeftIcon, ArrowPathIcon, HeartIcon, ArrowUpTrayIcon } from '@heroicons/vue/24/outline';
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
const generateRandomNumber = () => {
  return Math.floor(Math.random() * 100);
}

const size = computed(() => props.compact ? 5 : 8);
</script>