class InfoPanel {
  constructor(player) {
    this.container = player.template.infoPanel;
    this.template = player.template;
    this.video = player.video;
    this.player = player;

    this.template.infoPanelClose.addEventListener('click', () => {
      this.hide();
    });
  }

  show() {
    this.beginTime = Date.now();
    this.update();
    this.player.timer.enable('info');
    this.player.timer.enable('fps');
    this.container.classList.remove('wplayer-info-panel-hide');
  }

  hide() {
    this.player.timer.disable('info');
    this.player.timer.disable('fps');
    this.container.classList.add('wplayer-info-panel-hide');
  }

  triggle() {
    if (this.container.classList.contains('wplayer-info-panel-hide')) {
      this.show();
    } else {
      this.hide();
    }
  }

  update() {
    this.template.infoVersion.innerHTML = ` v${WPLAYER_VERSION} Based on DIYgod/DPlayer v1.27.1`;
    this.template.infoType.innerHTML = this.player.type;
    this.template.infoUrl.innerHTML = this.player.options.video.url;
    this.template.infoResolution.innerHTML = `${this.player.video.videoWidth} x ${this.player.video.videoHeight}`;
    this.template.infoDuration.innerHTML = this.player.video.duration;
    if (this.player.options.danmaku) {
      this.template.infoDanmakuAmount.innerHTML = this.player.danmaku.dan.length;
    }
  }

  fps(value) {
    this.template.infoFPS.innerHTML = `${value.toFixed(1)}`;
  }
}

export default InfoPanel;
