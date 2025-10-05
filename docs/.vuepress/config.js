module.exports = {
  base: '/',
  title: 'Samaa Murtadha',
  description: 'UX/UI Designer Portfolio',
  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@700;900&display=swap' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects/' },
      { text: 'Resume', link: '/resume/' }
    ],
    smoothScroll: true
  }
}