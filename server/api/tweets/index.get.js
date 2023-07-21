import {getTweets} from "~/server/db/tweets";
import {tweetTransformer} from "~/server/transformers/tweets";

export default defineEventHandler(async (event) => {

    const tweets = await getTweets({
        include: {
            author: true,
            mediaFile: true
        }
    });

    return {
       tweets: tweets.map(tweetTransformer)
    }
})