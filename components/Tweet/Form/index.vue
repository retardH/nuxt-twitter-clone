<template>
  <div>
    <tweet-form-input :user="props.user"/>
  </div>
</template>

<script setup>
  const props = defineProps({
    user: {
      type: Object,
      required: true,
    }
  })
</script>