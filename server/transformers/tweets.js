import {mediaFileTransformer} from "~/server/transformers/mediaFile";
import {userTransformer} from "~/server/transformers/user";
import human from "human-time";
export const tweetTransformer = (tweet) => {
    return {
        id: tweet.id,
        text: tweet.text,
        mediaFiles: tweet.mediaFile ? tweet.mediaFile.map(mediaFileTransformer) : [],
        author: !!tweet.author ? userTransformer(tweet.author) : null,
        replies: !!tweet.replies ? tweet.replies.map(tweetTransformer) : [],
        replyTo: !!tweet.replyTo ? tweetTransformer(tweet.replyTo) : null,
        repliesCount: !!tweet.replies ? tweet.replies.length : 0,
        postedAt: human(tweet.createdAt),
    }
}