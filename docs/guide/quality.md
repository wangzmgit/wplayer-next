# 清晰度切换

在 `video.quality` 里设置不同清晰度的视频链接和类型，`video.defaultQuality` 设置默认清晰度

```js
const player = new DPlayer({
  container: document.getElementById('dplayer'),
  video: {
    quality: [
      {
          name: 'HD',
          url: 'demo.m3u8',
          type: 'hls',
      },
      {
          name: 'SD',
          url: 'demo.mp4',
          type: 'normal',
      },
    ],
    defaultQuality: 0,
    pic: 'demo.png',
  },
});
```
