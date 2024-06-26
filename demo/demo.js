// stats.js: JavaScript Performance Monitor
const stats = new Stats();
stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild(stats.dom);
function animate() {
  stats.begin();
  // monitored code goes here
  stats.end();

  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

initPlayers();
handleEvent();

function handleEvent() {
  document.getElementById('wplayer-dialog').addEventListener('click', (e) => {
    const $clickDom = e.currentTarget;
    const isShowStatus = $clickDom.getAttribute('data-show');

    if (isShowStatus) {
      document.getElementById('float-wplayer').style.display = 'none';
    } else {
      $clickDom.setAttribute('data-show', 1);
      document.getElementById('float-wplayer').style.display = 'block';
    }
  });

  document.getElementById('close-dialog').addEventListener('click', () => {
    const $openDialogBtnDom = document.getElementById('wplayer-dialog');

    $openDialogBtnDom.setAttribute('data-show', '');
    document.getElementById('float-wplayer').style.display = 'none';
  });
}

function initPlayers() {
  // wplayer-float
  window.dpFloat = new WPlayer({
    container: document.getElementById('wplayer-container'),
    preload: 'none',
    video: {
      url: 'http://static.smartisanos.cn/common/video/t1-ui.mp4',
      pic: 'http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg',
    },
    danmaku: {
      id: '9E2E3368B56CDBB4',
      api: 'https://api.prprpr.me/wplayer/'
    }
  });
  // dp1
  window.dp1 = new WPlayer({
    container: document.getElementById('wplayer1'),
    preload: 'none',
    video: {
      url: 'https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4',
      pic: 'https://i.loli.net/2019/06/06/5cf8c5d9c57b510947.png',
    },
    danmaku: {
      id: '9E2E3368B56CDBB4',
      api: 'https://api.prprpr.me/wplayer/',
      addition: ['https://s-sh-17-wplayercdn.oss.dogecdn.com/1678963.json']
    }
  });

  // dp2
  window.dp2 = new WPlayer({
    container: document.getElementById('wplayer2'),
    preload: 'none',
    autoplay: false,
    theme: '#FADFA3',
    loop: true,
    hotkey: true,
    logo: 'https://i.loli.net/2019/06/06/5cf8c5d94521136430.png',
    volume: 0.2,
    mutex: true,
    lang: 'zh-cn',
    video: {
      url: 'https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4',
      pic: 'https://i.loli.net/2019/06/06/5cf8c5d9c57b510947.png',
      type: 'auto'
    },
    danmaku: {
      bottom: '15%',
      unlimited: true,
      speedRate: 0.5,
    },
    contextmenu: [
      {
        text: 'custom contextmenu',
        link: 'https://github.com/MoePlayer/WPlayer'
      }
    ]
  });

  const events = [
    'abort', 'canplay', 'canplaythrough', 'durationchange', 'emptied', 'ended', 'error',
    'loadeddata', 'loadedmetadata', 'loadstart', 'mozaudioavailable', 'pause', 'play',
    'playing', 'ratechange', 'seeked', 'seeking', 'stalled',
    'volumechange', 'waiting',

    'danmaku_show', 'danmaku_hide', 'danmaku_clear',
    'danmaku_loaded', 'danmaku_send', 'danmaku_opacity',
    'contextmenu_show', 'contextmenu_hide',
    'notice_show', 'notice_hide',
    'quality_start', 'quality_end',
    'destroy',
    'resize',
    'fullscreen', 'fullscreen_cancel', 'webfullscreen', 'webfullscreen_cancel',
  ];
  const eventsEle = document.getElementById('events');
  for (let i = 0; i < events.length; i++) {
    dp2.on(events[i], (info) => {
      eventsEle.innerHTML += `<p>Event: ${events[i]} ${info ? `Data: <span>${JSON.stringify(info)}</span>` : ''}</p>`;
      eventsEle.scrollTop = eventsEle.scrollHeight;
    });
  }

  // dp3
  // window.dp3 = new WPlayer({
  //     container: document.getElementById('wplayer3'),
  //     preload: 'none',
  //     video: {
  //         quality: [{
  //             name: 'HD',
  //             url: 'https://s-sh-17-wplayercdn.oss.dogecdn.com/hikarunara.m3u8',
  //             type: 'hls'
  //         }, {
  //             name: 'SD',
  //             url: 'https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4',
  //             type: 'normal'
  //         }],
  //         defaultQuality: 0,
  //         pic: 'https://i.loli.net/2019/06/06/5cf8c5d9c57b510947.png'
  //     }
  // });

  // // dp4
  // window.dp4 = new WPlayer({
  //     container: document.getElementById('wplayer4'),
  //     preload: 'none',
  //     video: {
  //         url: 'https://s-sh-17-wplayercdn.oss.dogecdn.com/hikarunara.m3u8',
  //         type: 'hls'
  //     }
  // });

  // // dp5
  // window.dp5 = new WPlayer({
  //     container: document.getElementById('wplayer5'),
  //     preload: 'none',
  //     video: {
  //         url: 'https://moeplayer.b0.upaiyun.com/wplayer/hikarunara.flv',
  //         type: 'flv'
  //     }
  // });

  // window.dp8 = new WPlayer({
  //     container: document.getElementById('wplayer8'),
  //     preload: 'none',
  //     video: {
  //         url: 'https://moeplayer.b0.upaiyun.com/wplayer/dash/hikarunara.mpd',
  //         type: 'dash'
  //     }
  // });

  // window.dp9 = new WPlayer({
  //     container: document.getElementById('wplayer9'),
  //     video: {
  //         url: 'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent',
  //         type: 'webtorrent'
  //     }
  // });

  // window.dp6 = new WPlayer({
  //     container: document.getElementById('wplayer6'),
  //     preload: 'none',
  //     live: true,
  //     danmaku: true,
  //     apiBackend: {
  //         read: function (endpoint, callback) {
  //             console.log('假装 WebSocket 连接成功');
  //             callback();
  //         },
  //         send: function (endpoint, danmakuData, callback) {
  //             console.log('假装通过 WebSocket 发送数据', danmakuData);
  //             callback();
  //         }
  //     },
  //     video: {
  //         url: 'https://s-sh-17-wplayercdn.oss.dogecdn.com/hikarunara.m3u8',
  //         type: 'hls'
  //     }
  // });

  // window.dp10 = new WPlayer({
  //     container: document.getElementById('wplayer10'),
  //     video: {
  //         url: 'https://qq.webrtc.win/tv/Pear-Demo-Yosemite_National_Park.mp4',
  //         type: 'pearplayer',
  //         customType: {
  //             'pearplayer': function (video, player) {
  //                 new PearPlayer(video, {
  //                     src: video.src,
  //                     autoplay: player.options.autoplay
  //                 });
  //             }
  //         }
  //     }
  // });
}

function clearPlayers() {
  for (let i = 0; i < 6; i++) {
    window['dp' + (i + 1)].pause();
    document.getElementById('wplayer' + (i + 1)).innerHTML = '';
  }
}

function switchWPlayer() {
  if (dp2.options.danmaku.id !== '5rGf5Y2X55qu6Z2p') {
    dp2.switchVideo({
      url: 'http://static.smartisanos.cn/common/video/t1-ui.mp4',
      pic: 'http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg',
      type: 'auto',
    }, {
    });
  } else {
    dp2.switchVideo({
      url: 'https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4',
      pic: 'https://i.loli.net/2019/06/06/5cf8c5d9c57b510947.png',
      type: 'auto'
    }, );
  }
}