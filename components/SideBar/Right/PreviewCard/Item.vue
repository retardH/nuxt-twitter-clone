<template>
  <div class="p-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-dim-300 border-b" :class="wrapperClasses">
<slot></slot>
  </div>
</template>
<script setup>
import useTailwindConfig from "~/composables/useTailwindConfig";

const {defaultTransition,twitterBorderColor} = useTailwindConfig()
const wrapperClasses= computed(()=>`${defaultTransition} ${twitterBorderColor}`)
</script>