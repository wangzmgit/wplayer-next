# API


- `player.play()`: 播放视频

- `player.pause()`: 暂停视频

- `player.seek(time: number)`: 跳转到特定时间

```js
player.seek(100);
```

- `player.toggle()`: 切换播放和暂停

- `player.on(event: string, handler: function)`: 绑定视频和播放器事件，见[#事件绑定](/guide/event#事件绑定)

- `player.switchVideo(video, danmakuData)`: 切换到其他视频

```js
player.switchVideo(
  {
    url: 'second.mp4',
    pic: 'second.png',
  },
  [
    {time: 1, text: '弹幕内容', color: '#fff', type: 0}
  ]
);
```

- `player.notice(text: string, time: number)`: 显示通知，时间的单位为毫秒，默认时间 2000 毫秒，默认透明度 0.8

- `player.switchQuality(index: number)`: 切换清晰度

- `player.destroy()`: 销毁播放器

- `player.speed(rate: number)`: 设置视频速度

- `player.volume(percentage: number, nostorage: boolean, nonotice: boolean)`: 设置视频音量

```js
player.volume(0.1, true, false);
```

- `player.video`: 原生 video

- `player.video.currentTime`: 返回视频当前播放时间

- `player.video.duration`: 返回视频总时间

- `player.video.paused`: 返回视频是否暂停

- 支持大多数[原生 video 接口](http://www.w3schools.com/tags/ref_av_dom.asp)

- `player.danmaku`

- `player.danmaku.update(danmakuData)`: 更新弹幕内容

```js
player.danmaku.update([
  {time: 1, text: '弹幕内容', color: '#fff', type: 0}
]);
```

- `player.danmaku.send(danmaku, callback: function)`: 提交一个新弹幕

```js
player.danmaku.send(
  {
    text: '弹幕内容',
    color: '#b7daff',
    type: 'right', // should be `top` `bottom` or `right`
  },
  function () {
    console.log('success');
  }
);
```

- `player.danmaku.draw(danmaku)`: 实时绘制一个新弹幕
  
```js
player.danmaku.draw({
  text: '弹幕内容',
  color: '#fff',
  type: 'top',
});
```

- `player.danmaku.opacity(percentage: number)`: 设置弹幕透明度，透明度值在 0 到 1 之间

```js
  player.danmaku.opacity(0.5);
```

- `player.danmaku.clear()`: 清除所有弹幕

- `player.danmaku.hide()`: 隐藏弹幕

- `player.danmaku.show()`: 显示弹幕

- `player.fullScreen`: 两个类型：`web` 和 `browser`，默认类型是 `browser`

- `player.fullScreen.request(type: string)`: 进入全屏

```js
  player.fullScreen.request('web');
```

- `player.fullScreen.cancel(type: string)`: 退出全屏

```js
  player.fullScreen.cancel('web');
```
