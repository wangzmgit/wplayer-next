export default {
  title: 'WPlayer弹幕播放器',
  lang: 'zh-CN',
  description: '基于DPlayer开发的弹幕播放器',
  head: [
    [
      'meta',
      {
        name: 'keywords',
        content: 'html5, player, danmaku'
      }
    ],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
      }
    ],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  themeConfig: {
    editLink: {
      text: '为此页提供修改建议',
      pattern: 'https://github.com/wangzmgit/wplayer-next/tree/master/docs/:path'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/wangzmgit/wplayer-next' },
    ],
    footer: {
      message: '根据 MIT 许可证发布',
      copyright: `Copyright © 2022-${new Date().getFullYear()}`
    },
    nav: [
      { text: '指南', link: '/guide/', activeMatch: '/guide/' },
      { text: '赞助', link: '/other/donate' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '项目指南',
          items: [
            {
              text: '开始',
              link: '/guide/'
            },
            {
              text: '参数',
              link: '/guide/parameters'
            },
            {
              text: 'API',
              link: '/guide/api'
            },
            {
              text: '事件绑定',
              link: '/guide/event'
            },
            {
              text: '清晰度切换',
              link: '/guide/quality'
            },
            {
              text: 'MSE支持',
              link: '/guide/mse'
            },
            {
              text: '直播',
              link: '/guide/live'
            }
          ]
        }
      ],
    }
  }
}