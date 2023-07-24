<template>
 <div class="flex items-center p-4 pb-1">
   <div class="">
     <img :src="author.profileImage" alt="" class="w-10 h-10 rounded-full"/>
   </div>
   <div class="ml-3">
    <span class="text-base font-medium text-gray-800 dark:text-white">
      {{author.name}}
    </span>
     <span class="ml-1 text-sm font-medium text-gray-400">
       <nuxt-link to="#">
       {{author.handle}}
     </nuxt-link>
       . {{props.tweet.postedAt}}
     </span>
     <p v-if="props.tweet.replyTo" class="text-sm">
       <span class="text-gray-500">
         Replying to
       <nuxt-link :to="replyToTweetUrl" class="text-blue-400">
         {{props.tweet.replyTo.author.handle}}
       </nuxt-link>
       </span>
     </p>
   </div>
 </div>

</template>

<script setup>
  const props = defineProps({
    tweet: {
      type: Object,
      required: true
    }
  })
  const author = props.tweet.author;
  const replyToTweetUrl = computed(() => `/status/${props.tweet.replyTo.id}`);
</script>