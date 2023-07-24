import {getTweetById} from "~/server/db/tweets";
import {tweetTransformer} from "~/server/transformers/tweets";

export default defineEventHandler(async (event) => {
    const {id} = event.context.params;
    const tweet = await getTweetById(id, {
        // author: true,
        // mediaFiles: true,
        // replyTo: {
        //     include: {
        //         author: true
        //     }
        // },
        // replies: {
        //     include: {
        //         author: true,
        //         replyTo: {
        //             include: {
        //                 author: true
        //             }
        //         }
        //     }
        // }
    });
    return {
        'tweet': tweetTransformer(tweet)
    }
})