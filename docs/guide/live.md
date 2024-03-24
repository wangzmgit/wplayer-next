# 直播

初始化播放器:

```js
const player = new WPlayer({
  container: document.getElementById('wplayer'),
  live: true,
  danmaku: true,
  video: {
    url: 'demo.m3u8',
    type: 'hls',
  },
});
```

通过 WebSocket 获取到弹幕之后，通过 `player.danmaku.draw` 绘制弹幕:

```js
const danmaku = {
  text: '弹幕内容',
  color: '#fff',
  type: 'right',
};
player.danmaku.draw(danmaku);
```
