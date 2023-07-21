<template>
  <button
      class="flex justify-center text-white bg-blue-400 py-2 rounded-full px-6 hover:bg-blue-500
      disabled:bg-blue-300 disabled:cursor-not-allowed"
      :disabled="props.disabled"
      :class="classes"
      @click="handleClick"
  >
    <span :class="textFontSize">
      <slot/>
    </span>
  </button>
</template>

<script setup>
  const emits = defineEmits(['onClick']);
  const handleClick = (event) => {
    emits('onClick', event);
  }
  const props = defineProps({
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'md'
    },
    liquid: {
      type: Boolean,
      default: false
    }
  })
  const textFontSize = computed(() => {
    switch (props.size) {
      case 'lg':
        return 'text-md'
      default:
        return 'text-sm'
    }
  })
  const paddingClasses = computed(() => {
    switch (props.size) {
      case 'sm':
        return 'px-3 py-2'
      case 'lg':
        return  'px-6 py-3'
      default:
        return 'py-2 px-2'
    }

  })

  const defaultWidth = computed(() => {
    switch (props.size) {
      default:
        return 'w-min'
    }
  })
  const classes = computed(() => `${paddingClasses.value} ${props.liquid ? 'w-full' : defaultWidth.value} `);
</script>