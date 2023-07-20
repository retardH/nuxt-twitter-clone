<template>
<MainSection title="Home" :loading="loading">
<!--{{user}}-->
  <br/>
  <tweet-form :user="user"/>
</MainSection>
</template>
<script setup>
import useAuth from "~/composables/useAuth";

const loading = ref(false)
const {useAuthUser} = useAuth()
const user = useAuthUser()
</script>