<template>
  <div>
    <div class="flex items-start flex-shrink-0 p-4 pb-0">
      <div class="flex w-12 items-start">
        <img :src="props.user?.profileImage" alt="profile image" class="inline-block w-10 h-10 rounded-full" />
      </div>
      <div class="w-full">
        <textarea
            v-model="text"
            class="w-full h-10 py-0 text-lg text-gray-900 placeholder:text-gray-400 bg-transparent border-0 dark:text-white focus:ring-0" placeholder="What's on your mind"/>
      </div>
    </div>
    <div>
      <button @click="handleFormSubmit">Tweet</button>
    </div>
  </div>
</template>

<script setup>
const text = ref('');
  const props = defineProps({
    user: {
      type: Object,
      required: true
    }
  })
  const handleFormSubmit = () => {
    alert(JSON.stringify({
      text: text.value
    }))
  }
</script>