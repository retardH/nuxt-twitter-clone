<template>
  <div :class="{'dark':darkMode}">
    <div class="bg-white dark:bg-dim-900">
      <!-- Loading -->
      <LoadingPage v-if="isAuthLoading"/>
      <!-- App-->
      <div v-else-if="user" class="min-h-full">
        <div class="grid grid-cols-12 mx-auto sm:px-6 lg:px-8 lg:max-w-7xl  lg:gap-5">
          <!-- Left side bar-->
          <div class="hidden md:block   xl:col-span-2 col-span-1">
            <div class="sticky top-0">
              <SideBarLeft/>
            </div>
          </div>
          <!-- main Content-->
          <div class="col-span-12 md:col-span-8 xl:col-span-6 ">
            <NuxtPage/>
          </div>
          <!-- Right side bar-->
          <div class="hidden col-span-12 md:block xl:col-span-4 md:col-span-3">
            <div class="sticky top-0">
              <SideBarRight/>
            </div>
          </div>
        </div>
      </div>
      <!--Auth page-->
      <AuthPage v-else/>
    </div>
  </div>
</template>

<script setup>
import LoadingPage from "~/components/UI/LoadingPage.vue";
const darkMode = ref(false)
const {useAuthUser, initAuth, useAuthLoading} = useAuth()
const isAuthLoading = useAuthLoading();
const user = useAuthUser();
onBeforeMount(() => {
  initAuth()
})
</script>