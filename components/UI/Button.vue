<template>
  <button
      class="flex justify-center text-white bg-blue-400 py-2 rounded-3xl px-6 hover:bg-blue-500
      font-sm disabled:bg-blue-300 disabled:cursor-not-allowed"
      :disabled="props.disabled"
      :class="classes"
  >
    <span>
      <slot/>
    </span>
  </button>
</template>

<script setup>
  const props = defineProps({
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'md'
    }
  })
  const classes = ref('');
</script>