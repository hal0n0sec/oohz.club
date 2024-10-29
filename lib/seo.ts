export const seo = {
  title: 'takuya | sunshine',
  description:
    '👋 我是 takuya，来自浙江杭州，热衷于折腾，喜欢研究网络安全、AI，以及在未知领域中探索🌈。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://cali.so'
      : 'http://localhost:3000'
  ),
} as const
