export const userTransformer =(user)=>{
    return{
        id:user.id,
        name: user.name,
        email:user.email,
        userName:user.userName,
        profileImage:user.profileImage,
        handle: '@' + user.userName
    }
}