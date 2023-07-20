<template>
  <div>
   <div class="pt-5 space-y-6">
     {{data.password}}
     {{data.username}}

     <UIInput label="UserName" placeholder="@username" @update:model-value=" value=> data.username = value" />

     <UIInput label="UserName"  placeholder="********"  type="password"  @update:model-value=" value => data.password=value" />
     <div>
       <button @click="handleLogin" >Login</button>
     </div>

   </div>
  </div>
</template>
<script setup>
import useAuth from "~/composables/useAuth";
const data = reactive({
  password : '',
  username:'',
  loading:false
})


const handleLogin =async ()=>{
  const {login} = useAuth()

  data.loading = true
    try {
     await  login({
       userName:data.username,
       password:data.password
     })
    }catch (error){
      console.log(error)
    }finally {
      data.loading= false
    }
}
</script>