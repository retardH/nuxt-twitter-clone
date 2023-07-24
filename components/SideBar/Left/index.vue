<template>
<div  class="h-screen flex flex-col ">
  <div class="py-2 px-1 my-2 hover:bg-blue-50 rounded-full dark:hover:bg-white/20 w-min  "  :class="defaultTransition" >
    <nuxt-link to="/">
      <div class="w-8 h-8" >
        <LogoTwitter/>
      </div>
    </nuxt-link>
  </div>
  <div class="mt-2 space-y-3">
    <SideBarLeftTab >
      <template #icon>
        <HomeIcon/>
      </template>
      <template #name >
        Home
      </template>
    </SideBarLeftTab>
    <SideBarLeftTab >
      <template #icon>
       <MagnifyingGlassIcon/>
      </template>
      <template #name >
        Explore
      </template>
    </SideBarLeftTab>
    <SideBarLeftTab >
      <template #icon>
       <BellIcon/>
      </template>
      <template #name >
        Notification
      </template>
    </SideBarLeftTab>
    <SideBarLeftTab >
      <template #icon>
      <EnvelopeIcon/>
      </template>
      <template #name >
        Messages
      </template>
    </SideBarLeftTab>
    <SideBarLeftTab >
      <template #icon>
       <DocumentTextIcon/>
      </template>
      <template #name >
       Lists
      </template>
    </SideBarLeftTab>
    <SideBarLeftTab >
      <template #icon>
       <UsersIcon/>
      </template>
      <template #name >
        Communities
      </template>
    </SideBarLeftTab>
    <SideBarLeftTab >
      <template #icon>
       <UserIcon/>
      </template>
      <template #name >
      Profile
      </template>
    </SideBarLeftTab>

    <SideBarLeftTab >
      <template #icon>
        <EllipsisHorizontalCircleIcon/>
      </template>
      <template #name >
       More
      </template>
    </SideBarLeftTab>
    <div class="w-full hidden xl:block">
      <UIButton size="lg" liquid>
        <strong>
          Tweet
        </strong>
      </UIButton>
    </div>
    <div class="w-full xl:hidden">
      <UIButton>
        <div class="w-6 h-6 font-bold rounded-full">
          <PencilIcon/>
        </div>
      </UIButton>
    </div>
  </div>

</div>
</template>
<script setup >
import useTailwindConfig from "~/composables/useTailwindConfig";
import {HomeIcon}  from "@heroicons/vue/24/solid"
import {EllipsisHorizontalCircleIcon ,BellIcon,MagnifyingGlassIcon,EnvelopeIcon,UserIcon,UsersIcon
  ,DocumentTextIcon, PencilIcon}  from  "@heroicons/vue/24/outline"
const { defaultTransition } = useTailwindConfig()
</script>