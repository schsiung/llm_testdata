
    const id = ctx.params.id;

    const gtvId = liveInfo.data[0].gtvId;
    const offline = res.data.data[0].score === -1;
    const item = offline
        : [
                  title: liveInfo.data[0].text,
                  link: response.url,
              },

        title: `${liveInfo.data[0].anchorInfo.nickname} - 黑白直播`,
        description: liveInfo.data[0].anchorInfo.notice,
        item,
    };