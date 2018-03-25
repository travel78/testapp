module.exports = {
    convertData: (data) => {
        return data.map((item) => {
            return {
                text: item.text,
                retweet_count: item.retweet_count,
                favorite_count: item.favorite_count,
                source: item.source,
                foto: item.entities.media && item.entities.media[0] && item.entities.media[0].media_url_https || ''
            }
        });
    }
};


