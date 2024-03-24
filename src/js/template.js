import Icons from './icons';
import tplPlayer from '../template/player.art';
import utils from './utils';

class Template {
  constructor(options) {
    this.container = options.container;
    this.options = options.options;
    this.index = options.index;
    this.tran = options.tran;
    this.init();
  }

  init() {
    this.container.innerHTML = tplPlayer({
      options: this.options,
      index: this.index,
      tran: this.tran,
      icons: Icons,
      mobile: utils.isMobile,
      video: {
        current: true,
        pic: this.options.video.pic,
        preload: this.options.preload,
        url: this.options.video.url,
      },
    });

    this.volumeButton = this.container.querySelector('.wplayer-volume-icon');
    this.volumeBox = this.container.querySelector('.wplayer-volume-box');
    this.volumeBar = this.container.querySelector('.wplayer-volume-bar-inner');
    this.volumeBarWrap = this.container.querySelector('.wplayer-volume-bar-wrap');
    this.playedBar = this.container.querySelector('.wplayer-played');
    this.loadedBar = this.container.querySelector('.wplayer-loaded');
    this.playedBarWrap = this.container.querySelector('.wplayer-bar-wrap');
    this.playedBarTime = this.container.querySelector('.wplayer-bar-time');
    this.danmaku = this.container.querySelector('.wplayer-danmaku');
    this.danmakuLoading = this.container.querySelector('.wplayer-danloading');
    this.video = this.container.querySelector('.wplayer-video-current');
    this.bezel = this.container.querySelector('.wplayer-bezel-icon');
    this.playButton = this.container.querySelector('.wplayer-play-icon');
    this.mobilePlayButton = this.container.querySelector('.wplayer-mobile-play');
    this.videoWrap = this.container.querySelector('.wplayer-video-wrap');
    this.controllerMask = this.container.querySelector('.wplayer-controller-mask');
    this.ptime = this.container.querySelector('.wplayer-ptime');
    this.settingButton = this.container.querySelector('.wplayer-setting-icon');
    this.settingBox = this.container.querySelector('.wplayer-setting-box');
    this.mask = this.container.querySelector('.wplayer-mask');
    this.loop = this.container.querySelector('.wplayer-setting-loop');
    this.loopToggle = this.container.querySelector('.wplayer-setting-loop .wplayer-toggle-setting-input');
    this.showDanmaku = this.container.querySelector('.wplayer-setting-showdan');
    this.showDanmakuToggle = this.container.querySelector('.wplayer-showdan-setting-input');
    this.unlimitDanmaku = this.container.querySelector('.wplayer-setting-danunlimit');
    this.unlimitDanmakuToggle = this.container.querySelector('.wplayer-danunlimit-setting-input');
    this.speedButton = this.container.querySelector('.wplayer-speed-icon');
    this.speedBox = this.container.querySelector('.wplayer-speed-box');
    this.speedItem = this.container.querySelectorAll('.wplayer-speed-item');
    this.danmakuOpacityBar = this.container.querySelector('.wplayer-danmaku-bar-inner');
    this.danmakuOpacityBarWrap = this.container.querySelector('.wplayer-danmaku-bar');
    this.danmakuOpacityBarWrapWrap = this.container.querySelector('.wplayer-danmaku-bar-wrap');
    this.dtime = this.container.querySelector('.wplayer-dtime');
    this.controller = this.container.querySelector('.wplayer-controller');
    this.commentInput = this.container.querySelector('.wplayer-comment-input');
    this.commentButton = this.container.querySelector('.wplayer-comment-icon');
    this.commentSettingBox = this.container.querySelector('.wplayer-comment-setting-box');
    this.commentSettingButton = this.container.querySelector('.wplayer-comment-setting-icon');
    this.commentSettingFill = this.container.querySelector('.wplayer-comment-setting-icon path');
    this.commentSendButton = this.container.querySelector('.wplayer-send-icon');
    this.commentSendFill = this.container.querySelector('.wplayer-send-icon path');
    this.commentColorSettingBox = this.container.querySelector('.wplayer-comment-setting-color');
    this.browserFullButton = this.container.querySelector('.wplayer-full-icon');
    this.webFullButton = this.container.querySelector('.wplayer-full-in-icon');
    this.menu = this.container.querySelector('.wplayer-menu');
    this.menuItem = this.container.querySelectorAll('.wplayer-menu-item');
    this.qualityButton = this.container.querySelector('.wplayer-quality-icon');
    this.qualityList = this.container.querySelector('.wplayer-quality-list');
    this.subtrack = this.container.querySelector('.wplayer-subtrack');
    this.barPreview = this.container.querySelector('.wplayer-bar-preview');
    this.barWrap = this.container.querySelector('.wplayer-bar-wrap');
    this.noticeList = this.container.querySelector('.wplayer-notice-list');
    this.infoPanel = this.container.querySelector('.wplayer-info-panel');
    this.infoPanelClose = this.container.querySelector('.wplayer-info-panel-close');
    this.infoVersion = this.container.querySelector('.wplayer-info-panel-item-version .wplayer-info-panel-item-data');
    this.infoFPS = this.container.querySelector('.wplayer-info-panel-item-fps .wplayer-info-panel-item-data');
    this.infoType = this.container.querySelector('.wplayer-info-panel-item-type .wplayer-info-panel-item-data');
    this.infoUrl = this.container.querySelector('.wplayer-info-panel-item-url .wplayer-info-panel-item-data');
    this.infoResolution = this.container.querySelector('.wplayer-info-panel-item-resolution .wplayer-info-panel-item-data');
    this.infoDuration = this.container.querySelector('.wplayer-info-panel-item-duration .wplayer-info-panel-item-data');
    this.infoDanmakuAmount = this.container.querySelector('.wplayer-info-panel-item-danmaku-amount .wplayer-info-panel-item-data');
  }

  static NewNotice(text, opacity, id) {
    const notice = document.createElement('div');
    notice.classList.add('wplayer-notice');
    notice.style.opacity = opacity;
    notice.innerText = text;
    if (id) {
      notice.id = `wplayer-notice-${id}`;
    }
    return notice;
  }
}

export default Template;
