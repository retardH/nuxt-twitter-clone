<template>
  <div class="flex items-center text-gray-400 cursor-pointer group">
    <div :class="`p-2 group-hover:text-${props.color}-400 rounded-full ${defaultTransition}`">
      <slot name="icon" :classes="`w-${props.size} h-${props.size}`"/>
    </div>
    <span :class="`ml-0.5 group-hover:text-${props.color}-400`">
      <slot name="default"></slot>
    </span>
  </div>
</template>

<script setup>

const { defaultTransition } = useTailwindConfig();
const props = defineProps({
  color: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    default: 5,
  }
})

</script>