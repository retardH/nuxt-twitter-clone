export default () => {
    const postTweet = (formData) => {
        const form = new FormData();
        form.append('text', formData.text);
        formData.mediaFiles.forEach((mediaFile, index) => {
            form.append('media_file' + index, mediaFile);
        })
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
            } catch (e) {
                reject(e);
            }
        })
    }
    return {
        postTweet,
        getTweets
    }
}