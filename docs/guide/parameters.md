# 参数

| 名称                 | 默认值                             | 描述                                                                                                             |
| -------------------- | ---------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| container            | document.querySelector('.dplayer') | 播放器容器元素                                                                                                   |
| live                 | false                              | 开启直播模式, 见[#直播](/guide/live#直播)                                                                        |
| autoplay             | false                              | 视频自动播放                                                                                                     |
| theme                | '#b7daff'                          | 主题色                                                                                                           |
| loop                 | false                              | 视频循环播放                                                                                                     |
| lang                 | navigator.language.toLowerCase()   | 可选值: 'en', 'zh-cn', 'zh-tw'                                                                                   |
| hotkey               | true                               | 开启热键，支持快进、快退、音量控制、播放暂停                                                                     |
| preload              | 'auto'                             | 视频预加载，可选值: 'none', 'metadata', 'auto'                                                                   |
| volume               | 0.7                                | 默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效                                           |
| playbackSpeed        | [0.5, 0.75, 1, 1.25, 1.5, 2]       | 可选的播放速率，可以设置成自定义的数组                                                                           |
| logo                 | -                                  | 在左上角展示一个 logo，你可以通过 CSS 调整它的大小和位置                                                         |
| preventClickToggle   | false                              | 阻止点击播放器时候自动切换播放/暂停                                                                              |
| setting              | false                              | 是否在播放器显示设置按钮                                                                                         |
| video                | -                                  | 视频信息                                                                                                         |
| video.quality        | -                                  | 见[#清晰度切换](/guide/quality#清晰度切换)                                                                       |
| video.defaultQuality | -                                  | 见[#清晰度切换](/guide/quality#清晰度切换)                                                                       |
| video.url            | -                                  | 视频链接                                                                                                         |
| video.pic            | -                                  | 视频封面                                                                                                         |
| video.type           | 'auto'                             | 可选值: 'auto', 'hls', 'flv', 'dash', 'webtorrent', 'normal' 或其他自定义类型, 见[#MSE 支持](/guide/mse#MSE支持) |
| video.customType     | -                                  | 自定义类型, 见[#MSE 支持](/guide/mse#MSE支持)                                                                    |
| danmaku              | -                                  | 显示弹幕                                                                                                         |
| danmaku.data         | -                                  | 弹幕数据                                                                                                         |
| danmaku.comment      | false                              | 是否在播放器上显示发送弹幕的区域                                                                                 |
| danmaku.bottom       | -                                  | 弹幕距离播放器底部的距离，防止遮挡字幕，取值形如: '10px' '10%'                                                   |
| danmaku.unlimited    | false                              | 海量弹幕模式，即使重叠也展示全部弹幕，请注意播放器会记忆用户设置，用户手动设置后即失效                           |
| danmaku.speedRate    | 1                                  | 弹幕速度倍率，越大速度越快                                                                                       |
| contextmenu          | []                                 | 自定义右键菜单                                                                                                   |
| highlight            | []                                 | 自定义进度条提示点                                                                                               |
| mutex                | true                               | 互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器                                                     |

```js
const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    autoplay: false,
    theme: '#FADFA3',
    loop: true,
    lang: 'zh-cn',
    setting: true,
    hotkey: true,
    preload: 'auto',
    logo: 'logo.png',
    volume: 0.7,
    mutex: true,
    video: {
      url: 'dplayer.mp4',
      pic: 'dplayer.png',
      type: 'auto',
    },
    danmaku: {
      data: [],
      bottom: '15%',
      unlimited: true,
      speedRate: 0.5,
    },
    contextmenu: [
        {
          text: 'DPlayer',
          link: 'https://github.com/DIYgod/DPlayer',
        },
        {
          text: 'WPlayer',
          link: 'https://github.com/wangzmgit/wplayer-next',
        },
        {
          text: 'custom',
          click: (player) => {
              console.log(player);
          },
        },
    ],
    highlight: [
      {
        time: 20,
        text: '这是第 20 秒',
      },
      {
        time: 120,
        text: '这是 2 分钟',
      },
    ],
});
```
