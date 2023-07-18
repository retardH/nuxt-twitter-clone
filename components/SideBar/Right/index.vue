<template>
  <div class="flex flex-col">
<!--  Preview Card What's happening-->
    <div>
      <SideBarRightPreviewCard title="What's happening" >
<SideBarRightPreviewCardItem v-for="item in whatHappeningItems">
  <div >
      <h2 class="font-bold text-gray-800 text-base dark:text-white">{{item.title}}</h2>
    <p class="text-xs text-gray-400">{{item.count}}</p>
  </div>
</SideBarRightPreviewCardItem>
      </SideBarRightPreviewCard>
    </div>
<!--    Who to Follow-->
    <div>
      <SideBarRightPreviewCard title="Who to Follow" >
        <SideBarRightPreviewCardItem v-for="item in WhoToFollowItems">
          <div class="flex p-2 justify-between items-center">
              <div class="flex ">
                <img :src="item.img" :alt="item.name" class=" w-10 h-10 rounded-full">
                <div class="flex flex-col ml-2 justify-center">
                  <h1 class="text-sm font-bold text-gray-900 dark:text-white ">{{item.name}}</h1>
                  <p class="text-xs text-gray-400">{{item.handle}}</p>
                </div>
              </div>
            <div class="flex h-full items-center">
              <button class="px-4  rounded-2xl text-xs py-2 font-bold text-white  bg-black dark:text-black dark:bg-white">Follow</button>
            </div>
          </div>
        </SideBarRightPreviewCardItem>
      </SideBarRightPreviewCard>
    </div>
  </div>
</template>

<script setup >


const whatHappeningItems=[
  {
    title:'SpaceX',
    count:'1.18k Tweets'
  },
  {
    title:'#CodingWithMe',
    count:"1.5k Tweets"
  },
  {
    title: '#What Happening in Myanmar',
    count: '12K Tweets'
  },
  {
    title:'Manchester United F.C',
    count:'1.1k Tweets'
  }
]

const WhoToFollowItems=[
  {
    img:"https://picsum.photos/200/200",
    name:"MadeWithLaravel",
    handle:"@MadeWithLaravel",
  },
  {
    img:"https://picsum.photos/200/200",
    name:"MadeWithLaravel",
    handle:"@MadeWithLaravel",
  },
  {
    img:"https://picsum.photos/200/200",
    name:"MadeWithLaravel",
    handle:"@MadeWithLaravel",
  }
]
</script>