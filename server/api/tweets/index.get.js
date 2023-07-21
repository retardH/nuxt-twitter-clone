import {getTweets} from "~/server/db/tweets";

export default defineEventHandler(async (event) => {

    const tweets = await getTweets({
        include: {
            author: true,
            mediaFile: true
        }
    });

    return {
       tweets: tweets
    }
})