export default (options) => {
  // default options
  const defaultOption = {
    container: options.element || document.getElementsByClassName('wplayer')[0],
    live: false,
    autoplay: false,
    setting: true,
    webFull: true,
    theme: '#00AEEC',
    loop: false,
    lang: (navigator.language || navigator.browserLanguage).toLowerCase(),
    hotkey: true,
    preload: 'metadata',
    volume: 0.7,
    playbackSpeed: [0.5, 0.75, 1, 1.25, 1.5, 2],
    video: {},
    contextmenu: [],
    mutex: true,
    pluginOptions: { hls: {}, flv: {}, dash: {}, webtorrent: {} },
    preventClickToggle: false,
  };
  for (const defaultKey in defaultOption) {
    if (defaultOption.hasOwnProperty(defaultKey) && !options.hasOwnProperty(defaultKey)) {
      options[defaultKey] = defaultOption[defaultKey];
    }
  }
  if (options.video) {
    !options.video.type && (options.video.type = 'auto');
  }

  if (options.video.quality) {
    options.video.url = options.video.quality[options.video.defaultQuality].url;
  }

  if (options.lang) {
    options.lang = options.lang.toLowerCase();
  }

  options.contextmenu = options.contextmenu.concat([
    {
      key: 'video-info',
      click: (player) => {
        player.infoPanel.triggle();
      },
    },
    {
      text: `WPlayer v${WPLAYER_VERSION}`,
      link: 'https://github.com/wangzmgit/wplayer-next',
    },
  ]);

  return options;
};
