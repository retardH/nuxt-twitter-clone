import useAuth from "~/composables/useAuth";

export default ((url,options={})=>{
    const {useAuthToken} = useAuth()
    return $fetch(url,{
        ...options,
        headers:{
            ...options.headers,
            Authorization:`Bears ${useAuthToken().value}`
        }
    })
})