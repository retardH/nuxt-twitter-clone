<template>
  <div>
    <label v-if="props.label"
           class="block pl-3 ml-px text-sm font-medium text-gray-700"
    >{{ props.label }}</label>
    <div class="mt-1">
      <input :type="props.type" :value="props.modelValue" @input="event=>emits('update:modelValue',event.target.value)"
             class="block px-4 w-full border-gray-300 rounded-full focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      :placeholder="props.placeholder"
      />

    </div>
  </div>
</template>

<script setup>
const emits = defineEmits(['update:modelValue'])

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  placeholder:{
    type:String,
    required:true
  },
  type:{
    type:String,
    default:'text'
  },
  value: {
    type: String,
    required: true
  }
})
</script>