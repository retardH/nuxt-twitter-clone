<template>
  <nuxt-link to="#"
             class="flex items-center py-3 px-1 w-min text-black dark:hover:bg-dim-200 dark:text-white  hover:bg-gray-200 rounded-full "
             :class="defaultTransition">
    <div class="w-6 h-6 text-dark">
      <slot name="icon"/>
    </div>
    <div class="ml-4 text-xl hidden xl:block " :class="textClass">
      <slot name="name"/>
    </div>
  </nuxt-link>
</template>

<script setup>
import useTailwindConfig from "~/composables/useTailwindConfig";

const {defaultTransition} = useTailwindConfig()
const props = defineProps({
  active: {
    type: Boolean,
    default: false
  }
})
const textClass = computed(() => props.active ? "font-semibold" : 'font-normal')
</script>