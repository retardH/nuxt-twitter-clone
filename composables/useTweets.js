export default () => {
    const postTweet = (formData) => {
        const form = new FormData();
        form.append('text', formData.text);
        form.append('replyTo', formData.replyTo);
        formData.mediaFiles.forEach((mediaFile, index) => {
            form.append('media_file' + index, mediaFile);
        })
        console.log('this is form data', form.text);
        return useFetchApi('/api/user/tweets', {
            method: 'POST',
            body: form,
        })
    }
    const getTweets = () => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await useFetchApi('/api/tweets', {
                    method: 'GET',
                });
                resolve(response);
            } catch (error) {
                reject(error);
            }
        })
    }
    const getTweetById = (tweetId) => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await useFetchApi(`/api/tweets/${tweetId}`, {
                    method: 'GET',
                });
                resolve(response);
            } catch (error) {
                reject(error);
            }
        })
    }
    return {
        postTweet,
        getTweets,
        getTweetById
    }
}