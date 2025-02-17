<template>
  <div class="wplayer-wrap">
    <div class="wplayer" id="wplayer"></div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import danmakuList from './danmaku.json';

let player = null;
const options = {
  autoplay: false,
  theme: '#FADFA3',
  loop: true,
  lang: 'zh-cn',
  hotkey: true,
  preload: 'auto',
  volume: 0.7,
  mutex: true,
  screenshot: true,
  video: {
    url: 'http://upfile.myfz.fun/uploads%2F2022%2F09%2F24%2Fge4ZfU9g_137649199_u2-1-208.mp4',
    type: 'auto'
  },
  danmaku: {
    comment: true,
    data: danmakuList
  },
  highlight: [
    { time: 20, text: '这是第 20 秒' },
    { time: 120, text: '这是 2 分钟' }
  ]
}

onMounted(async () => {
  options.container = document.getElementById("wplayer");

  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/wplayer-next/dist/WPlayer.min.js';
  script.onload = () => {
    console.log('远程UMD包已加载');
    player = new WPlayer(options);
  };
  document.body.appendChild(script);
})
</script>