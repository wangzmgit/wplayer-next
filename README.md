# WPlayer 弹幕播放器

WPlayer 是基于 [DPlayer](https://github.com/DIYgod/DPlayer) 1.27.1 开发的弹幕播放器，具体内容请参考[官方文档](https://wplayer-next.interastral-peace.com/)

## 安装

使用 npm:
```
npm install wplayer-next --save
```

使用 Yarn:
```
yarn add wplayer-next
```

## 快速开始

加载播放器文件:

```html
<div id="wplayer"></div>
<script src="WPlayer.min.js"></script>
```

或者使用模块管理器:

```js
import WPlayer from 'wplayer';

const player = new WPlayer(options);
```

在 js 里初始化:

```js
const player = new WPlayer({
    container: document.getElementById('wplayer'),
    video: {
        url: 'demo.mp4',
    },
});
```