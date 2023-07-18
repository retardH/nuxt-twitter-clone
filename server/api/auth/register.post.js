import {createUser} from "~/server/db/users";
import {userTransformer} from "~/server/transformers/user";

export default  defineEventHandler(async (event)=>{
    const body= await readBody(event)
    const {userName,email,password,repeatPassword,name} = body
    if(!userName|| !email|| !password|| !repeatPassword || !name){
        return sendError(event,createError({
            statusCode:400,
            statusMessage:"invalid Params"
        }))
    }
    if(password !== repeatPassword){
        return sendError(event,createError({
            statusCode:400,
            statusMessage:"Password do not  Match"
        }))
    }
    const userData ={
        userName,
        email,
        password,
        name,
        profileImage:"https://picsum.photos/200/200"
    }
    const user = await  createUser(userData)
    return {
        body:userTransformer(user)
    }
})