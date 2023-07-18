import {getUserBuyUserName} from "~/server/db/users";
import bcrypt from "bcrypt";
import {generateTokens, sendRefreshToken} from "~/server/utils/jwt";
import {userTransformer} from "~/server/transformers/user";
import {createRefreshToken} from "~/server/db/refreshTokes";

export default  defineEventHandler(async (event)=>{
    const body =await  readBody(event)
    const {userName,password} = body
    if(!userName || !password){
        return sendError(event,createError({
            statusCode:400,
            statusMessage:"Invalid params"
        }))
    }
    // Is the user registered
const user = await getUserBuyUserName(userName)
    if(!user){
        return  sendError(event,createError({
            statusCode:400,
            statusMessage:'Username or password is invalid'
        }))
    }
    // Compare password
    const doesThePasswordMatch = await  bcrypt.compare(password, user.password)
    if(!doesThePasswordMatch){
        return sendError(event,createError({
            statusCode:400,
            statusMessage:"Password does not match"
        }))
    }


    // Generate Tokens
    //Access token
    //Refresh token
     const { accessToken,refreshToken }= generateTokens(user)


    // Save it inside db
        await  createRefreshToken({
            token:refreshToken,
            userId:user.id
        })
    //     Add http only cookie
sendRefreshToken(event,refreshToken)


    return  {
       access_token : accessToken,
        user: userTransformer(user)
    }
})

