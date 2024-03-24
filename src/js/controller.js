import utils from './utils';
import Icons from './icons';

let cast;
let runOnce = true;
let isCasting = false;

class Controller {
  constructor(player) {
    this.player = player;

    this.autoHideTimer = 0;
    if (!utils.isMobile) {
      this.setAutoHideHandler = this.setAutoHide.bind(this);
      this.player.container.addEventListener('mousemove', this.setAutoHideHandler);
      this.player.container.addEventListener('click', this.setAutoHideHandler);
      this.player.on('play', this.setAutoHideHandler);
      this.player.on('pause', this.setAutoHideHandler);
    }

    this.initPlayButton();
    this.initPlayedBar();
    this.initFullButton();
    this.initQualityButton();
    this.initSpeedButton();

    this.initHighlights();
    if (!utils.isMobile) {
      this.initVolumeButton();
    }
  }

  initPlayButton() {
    this.player.template.playButton.addEventListener('click', () => {
      this.player.toggle();
    });

    this.player.template.mobilePlayButton.addEventListener('click', () => {
      this.player.toggle();
    });

    if (!utils.isMobile) {
      if (!this.player.options.preventClickToggle) {
        this.player.template.videoWrap.addEventListener('click', () => {
          this.player.toggle();
        });
        this.player.template.controllerMask.addEventListener('click', () => {
          this.player.toggle();
        });
      }
    } else {
      this.player.template.videoWrap.addEventListener('click', () => {
        this.toggle();
      });
      this.player.template.controllerMask.addEventListener('click', () => {
        this.toggle();
      });
    }
  }

  initHighlights() {
    this.player.on('durationchange', () => {
      if (this.player.video.duration !== 1 && this.player.video.duration !== Infinity) {
        if (this.player.options.highlight) {
          const highlights = this.player.template.playedBarWrap.querySelectorAll('.wplayer-highlight');
          [].slice.call(highlights, 0).forEach((item) => {
            this.player.template.playedBarWrap.removeChild(item);
          });
          for (let i = 0; i < this.player.options.highlight.length; i++) {
            if (!this.player.options.highlight[i].text || !this.player.options.highlight[i].time) {
              continue;
            }
            const p = document.createElement('div');
            p.classList.add('wplayer-highlight');
            p.style.left = (this.player.options.highlight[i].time / this.player.video.duration) * 100 + '%';
            p.innerHTML = '<span class="wplayer-highlight-text">' + this.player.options.highlight[i].text + '</span>';
            this.player.template.playedBarWrap.insertBefore(p, this.player.template.playedBarTime);
          }
        }
      }
    });
  }

  initPlayedBar() {
    const thumbMove = (e) => {
      let percentage = ((e.clientX || e.changedTouches[0].clientX) - utils.getBoundingClientRectViewLeft(this.player.template.playedBarWrap)) / this.player.template.playedBarWrap.clientWidth;
      percentage = Math.max(percentage, 0);
      percentage = Math.min(percentage, 1);
      this.player.bar.set('played', percentage, 'width');
      this.player.template.ptime.innerHTML = utils.secondToTime(percentage * this.player.video.duration);
    };

    const thumbUp = (e) => {
      document.removeEventListener(utils.nameMap.dragEnd, thumbUp);
      document.removeEventListener(utils.nameMap.dragMove, thumbMove);
      let percentage = ((e.clientX || e.changedTouches[0].clientX) - utils.getBoundingClientRectViewLeft(this.player.template.playedBarWrap)) / this.player.template.playedBarWrap.clientWidth;
      percentage = Math.max(percentage, 0);
      percentage = Math.min(percentage, 1);
      this.player.bar.set('played', percentage, 'width');
      this.player.seek(this.player.bar.get('played') * this.player.video.duration);
      this.player.moveBar = false;
    };

    this.player.template.playedBarWrap.addEventListener(utils.nameMap.dragStart, () => {
      this.player.moveBar = true;
      document.addEventListener(utils.nameMap.dragMove, thumbMove);
      document.addEventListener(utils.nameMap.dragEnd, thumbUp);
    });

    this.player.template.playedBarWrap.addEventListener(utils.nameMap.dragMove, (e) => {
      if (this.player.video.duration) {
        const px = this.player.template.playedBarWrap.getBoundingClientRect().left;
        const tx = (e.clientX || e.changedTouches[0].clientX) - px;
        if (tx < 0 || tx > this.player.template.playedBarWrap.offsetWidth) {
          return;
        }
        const time = this.player.video.duration * (tx / this.player.template.playedBarWrap.offsetWidth);
        this.player.template.playedBarTime.style.left = `${tx - (time >= 3600 ? 25 : 20)}px`;
        this.player.template.playedBarTime.innerText = utils.secondToTime(time);
        this.player.template.playedBarTime.classList.remove('hidden');
      }
    });

    if (!utils.isMobile) {
      this.player.template.playedBarWrap.addEventListener('mouseenter', () => {
        if (this.player.video.duration) {
          this.player.template.playedBarTime.classList.remove('hidden');
        }
      });

      this.player.template.playedBarWrap.addEventListener('mouseleave', () => {
        if (this.player.video.duration) {
          this.player.template.playedBarTime.classList.add('hidden');
        }
      });
    }
  }

  initFullButton() {
    this.player.template.browserFullButton.addEventListener('click', () => {
      this.player.fullScreen.toggle('browser');
    });

    if (this.player.options.webFull && !utils.isMobile) {
      this.player.template.webFullButton.addEventListener('click', () => {
        this.player.fullScreen.toggle('web');
      });
    }
  }

  initVolumeButton() {
    const vHeight = 120;

    const volumeMove = (event) => {
      const e = event || window.event;
      const clientY = (e.clientY || e.changedTouches[0].clientY);
      const activeSize = vHeight - (clientY - this.player.template.volumeBarWrap.getBoundingClientRect().top);
      const percentage = activeSize / vHeight;
      this.player.volume(percentage);
    };
    const volumeUp = () => {
      document.removeEventListener(utils.nameMap.dragEnd, volumeUp);
      document.removeEventListener(utils.nameMap.dragMove, volumeMove);
    };

    this.player.template.volumeBarWrap.addEventListener('click', (event) => {
      const e = event || window.event;
      const clientY = (e.clientY || e.changedTouches[0].clientY);
      const activeSize = vHeight - (clientY - this.player.template.volumeBarWrap.getBoundingClientRect().top);
      const percentage = activeSize / vHeight;
      this.player.volume(percentage);
    });

    this.player.template.volumeBarWrap.addEventListener(utils.nameMap.dragStart, () => {
      document.addEventListener(utils.nameMap.dragMove, volumeMove);
      document.addEventListener(utils.nameMap.dragEnd, volumeUp);
    });
  }

  initQualityButton() {
    if (this.player.options.video.quality) {
      this.player.template.qualityList.addEventListener('click', (e) => {
        if (e.target.classList.contains('wplayer-quality-item')) {
          this.player.switchQuality(e.target.dataset.index);
        }
      });
    }
  }

  initSpeedButton() {
    const playbackRate = this.player.video.playbackRate;
    const speedText = playbackRate === 1 ? this.player.tran('normal') : `${playbackRate}x`;
    this.player.template.speedButton.innerHTML = speedText;

    for (let i = 0; i < this.player.template.speedItem.length; i++) {
      this.player.template.speedItem[i].addEventListener('click', () => {
        const playbackRate = this.player.template.speedItem[i].dataset.speed;
        const speedText = playbackRate === '1' ? this.player.tran('normal') : `${playbackRate}x`;
        this.player.speed(playbackRate);
        this.player.template.speedButton.innerHTML = speedText;
      });
    }
  }

  setAutoHide() {
    this.show();
    clearTimeout(this.autoHideTimer);
    this.autoHideTimer = setTimeout(() => {
      if (this.player.video.played.length && !this.player.paused && !this.disableAutoHide) {
        this.hide();
      }
    }, 3000);
  }

  show() {
    this.player.container.classList.remove('wplayer-hide-controller');
  }

  hide() {
    this.player.container.classList.add('wplayer-hide-controller');
    this.player.setting.hide();
    this.player.comment && this.player.comment.hide();
  }

  isShow() {
    return !this.player.container.classList.contains('wplayer-hide-controller');
  }

  toggle() {
    if (this.isShow()) {
      this.hide();
    } else {
      this.show();
    }
  }

  destroy() {
    if (!utils.isMobile) {
      this.player.container.removeEventListener('mousemove', this.setAutoHideHandler);
      this.player.container.removeEventListener('click', this.setAutoHideHandler);
    }
    clearTimeout(this.autoHideTimer);
  }
}

export default Controller;
