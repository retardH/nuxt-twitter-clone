<template>
  <div :class="{'dark':darkMode}">
    <div class="bg-white dark:bg-dim-900">
      <div class="min-h-full" >
        <div class="grid grid-cols-12 mx-auto sm:px-6 lg:px-8 lg:max-w-7xl  lg:gap-5" >
          <!--        Left side bar-->
          <div class="hidden md:block   xl:col-span-2 xs-col-span-1" >
            <div class="sticky top-0" >
              <SideBarLeft/>
            </div>
          </div>
<!--                  main Content-->
          <div class="col-span-12 md:col-span-8 xl:col-span-6 bg-red-400" >
sfs
          </div>
          <!--        Right side bar-->
          <div class="hidden bg-red-400 col-span-12 md:block xl:col-span-4 md:col-span-3">
            <div class="sticky top-0">
            <SideBarRight/>
            </div>
          </div>

        </div>

      </div>

    </div>
  </div>
</template>

<script setup >
const darkMode = ref(true)


</script>