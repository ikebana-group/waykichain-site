module.exports = {
  base: '/',
  title: 'qaxd.design',
  dest: 'public',
  themeConfig: {
    nav: [
      {
        text: '联系方式', link: '/contact',
        items: [
          { text: '邮箱', link: '/contact/mail' },
          { text: 'Github', link: '/contact/github' },
        ]
      },
    ],
    sidebar: {
      '/contact': [
        {
          title: '邮箱',
          path: '/contact/mail'
        },
        {
          title: 'Github',
          path: '/contact/github'
        },
      ]
    },
  },
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
}
