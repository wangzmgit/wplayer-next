# MSE 支持

## HLS

需要在 `WPlayer.min.js` 前面加载 [hls.js](https://github.com/video-dev/hls.js)。

```html
<div id="wplayer"></div>
<script src="hls.min.js"></script>
<script src="WPlayer.min.js"></script>
```

```js
const player = new WPlayer({
  container: document.getElementById('wplayer'),
  video: {
    url: 'demo.m3u8',
    type: 'hls',
  },
  pluginOptions: {
    hls: {
      // hls config
    },
  },
});
console.log(player.plugins.hls); // Hls 实例
```

```js
// 另一种方式，使用 customType
const player = new WPlayer({
  container: document.getElementById('wplayer'),
  video: {
    url: 'demo.m3u8',
    type: 'customHls',
    customType: {
      customHls: function (video, player) {
        const hls = new Hls();
        hls.loadSource(video.src);
        hls.attachMedia(video);
      },
    },
  },
});
```

## MPEG DASH

需要在 `WPlayer.min.js` 前面加载 [dash.js](https://github.com/Dash-Industry-Forum/dash.js)。

```html
<div id="wplayer"></div>
<script src="dash.min.js"></script>
<script src="WPlayer.min.js"></script>
```

```js
const player = new WPlayer({
  container: document.getElementById('wplayer'),
  video: {
    url: 'demo.mpd',
    type: 'dash',
  },
  pluginOptions: {
    dash: {
      // dash config
    },
  },
});
console.log(player.plugins.dash); // Dash 实例
```

```js
// 另一种方式，使用 customType
const player = new WPlayer({
  container: document.getElementById('wplayer'),
  video: {
    url: 'demo.mpd',
    type: 'customDash',
    customType: {
      customDash: function (video, player) {
        dashjs.MediaPlayer().create().initialize(video, video.src, false);
      },
    },
  },
});
```

## MPEG DASH (Shaka)

需要在 `WPlayer.min.js` 前面加载 [shaka-player.compiled.js](https://github.com/google/shaka-player)。

```html
<div id="wplayer"></div>
<script src="shaka-player.compiled.js"></script>
<script src="WPlayer.min.js"></script>
```

```js
const player = new WPlayer({
  container: document.getElementById('wplayer'),
  screenshot: true,
  video: {
    url: 'demo.mpd',
    type: 'shakaDash',
    customType: {
      shakaDash: function (video, player) {
        var src = video.src;
        var playerShaka = new shaka.Player(video); // 将会修改 video.src
        playerShaka.load(src);
      },
    },
  },
});
```

## FLV

需要在 `WPlayer.min.js` 前面加载 [flv.js](https://github.com/Bilibili/flv.js)。

```html
<div id="wplayer"></div>
<script src="flv.min.js"></script>
<script src="WPlayer.min.js"></script>
```

```js
const player = new WPlayer({
  container: document.getElementById('wplayer'),
  video: {
    url: 'demo.flv',
    type: 'flv',
  },
  pluginOptions: {
    flv: {
      // refer to https://github.com/bilibili/flv.js/blob/master/docs/api.md#flvjscreateplayer
      mediaDataSource: {
        // mediaDataSource config
      },
      config: {
        // config
      },
    },
  },
});
console.log(player.plugins.flv); // flv 实例
```

```js
// 另一种方式，使用 customType
const player = new WPlayer({
  container: document.getElementById('wplayer'),
  video: {
    url: 'demo.flv',
    type: 'customFlv',
    customType: {
      customFlv: function (video, player) {
        const flvPlayer = flvjs.createPlayer({
          type: 'flv',
          url: video.src,
        });
        flvPlayer.attachMediaElement(video);
        flvPlayer.load();
      },
    },
  },
});
```