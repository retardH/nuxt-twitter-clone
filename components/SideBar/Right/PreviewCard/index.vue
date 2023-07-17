<template>
  <div class="m-2 border rounded-xl bg-gray-50 dark:bg-dim-700" :class="twitterBorderColor">
    <h1>{{props.title}}</h1>

  </div>
</template>

<script setup>
import useTailwindConfig from "~/composables/useTailwindConfig";

const {twitterBorderColor} = useTailwindConfig()
const props= defineProps({
  title:{
    type:String,
    required:true
  }
})
</script>