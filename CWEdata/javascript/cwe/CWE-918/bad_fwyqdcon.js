const got = require('@/utils/got');
const cheerio = require('cheerio');
const { isValidHost } = require('@/utils/valid-host');

module.exports = async (ctx) => {
    const language = ctx.params.language || 'www';
    const username = ctx.params.username;
    const sort = ctx.params.sort || 'mr';
    const link = `https://${language}.pornhub.com/pornstar/${username}/videos?o=${sort}`;
    if (!isValidHost(language)) {
        throw Error('Invalid language');
    }

    const response = await got.get(link);
    const $ = cheerio.load(response.data);
    const list = $('#mostRecentVideosSection .videoBox');

    ctx.state.data = {
        title: $('title').first().text(),
        link,
        item:
            list &&
            list
                .map((_, e) => {
                    e = $(e);

                    return {
                        title: e.find('span.title a').text(),
                        link: `https://www.pornhub.com` + e.find('span.title a').attr('href'),
                        description: `<img src="${e.find('img').attr('data-thumb_url')}">`,
                    };
                })
                .get(),
    };
};