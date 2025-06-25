const date = require('@/utils/date');
module.exports = async (ctx) => {


    data = eval('(' + data + ')').slice(0, 10);
    const items = data.map((i) => ({
        description: `
        <img src="${i.logo}"></br>
        `,
        author: i.referrer,
    }));
    ctx.state.data = {
        link: 'https://lemon.qq.com/lab/',
    };