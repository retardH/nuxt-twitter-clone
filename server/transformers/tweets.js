import {mediaFileTransformer} from "~/server/transformers/mediaFile";
import {userTransformer} from "~/server/transformers/user";

export const tweetTransformer = (tweet) => {
    return {
        id: tweet.id,
        text: tweet.text,
        mediaFiles: tweet.mediaFile ? tweet.mediaFile.map(mediaFileTransformer) : [],
        author: !!tweet.author ? userTransformer(tweet.author) : null,
        replies: !!tweet.replies ? tweet.replies.map(tweetTransformer) : [],
        replayTo: !!tweet.replyTo ? tweetTransformer(tweet.replyTo) : null
    }
}