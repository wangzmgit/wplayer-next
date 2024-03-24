# 开始

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

我们先尝试初始化一个最简单的 WPlayer

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