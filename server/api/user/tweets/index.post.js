import formidable from "formidable";
import {createTweet} from "~/server/db/tweets";
import {tweetTransformer} from "~/server/transformers/tweets";
import {createMediaFile} from "~/server/db/mediaFiles";
import {uploadToCloudinary} from "~/server/utils/cloudinary";

export default defineEventHandler(async (event)=>{
    const form = formidable({});
    const response = await new Promise((resolve, reject) => {
        form.parse(event.req, (err, fields, files) => {
            if(err) {
                reject(err);
            }
            resolve({fields, files});
        })
    })
    const {fields, files} = response;
    const userId = event.context?.auth?.user?.id;
    const tweetData = {
        authorId: userId,
        text: fields.text[0],
    }
    const replyTo = fields.replyTo;
    if(replyTo !== null) {
        tweetData.replyToId = replyTo
    }
    const tweet = await createTweet(tweetData);
    console.log(tweet);
    const filePromises = Object.keys(files).map(async key => {
        const file = files[key][0];
        const cloudinaryResource = await uploadToCloudinary(file.filepath);
        console.log(cloudinaryResource);
        return createMediaFile({
            url: cloudinaryResource.secure_url,
            providerPublicId: cloudinaryResource.public_id,
            userId: userId,
            tweetId: tweet.id
        })
    })
    await Promise.all(filePromises);
    return {
        Hello: tweetTransformer(tweet)
    }
})