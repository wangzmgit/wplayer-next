# 事件绑定

`player.on(event, handler)`

```js
player.on('ended', function () {
  console.log('player ended');
});
```

视频事件

- abort
- canplay
- canplaythrough
- durationchange
- emptied
- ended
- error
- loadeddata
- loadedmetadata
- loadstart
- mozaudioavailable
- pause
- play
- playing
- progress
- ratechange
- seeked
- seeking
- stalled
- suspend
- timeupdate
- volumechange
- waiting

播放器事件

- screenshot
- thumbnails_show
- thumbnails_hide
- danmaku_show
- danmaku_hide
- danmaku_clear
- danmaku_loaded
- danmaku_send
- danmaku_opacity
- contextmenu_show
- contextmenu_hide
- notice_show
- notice_hide
- quality_start
- quality_end
- destroy
- resize
- fullscreen
- fullscreen_cancel
- subtitle_show
- subtitle_hide
- subtitle_change
