module.exports = {
  siteTitle: 'Shikhar Gupta | Computer Science Graduate Student | Software Developer | Cloud Engineer | ML Engineer',
  siteDescription:
    'Shikhar Gupta is a Computer Science Graduate Student at Arizona State University, who loves learning new things.',
  siteKeywords:
    'Shikhar Gupta, Shikhar, Gupta, Shikhar97, software developer, software engineer, cloud engineer, ml engineer, web developer, python developer, ghaziabad, aruba networks, pes university, bangalore',
  siteUrl: 'https://Shikhar97.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'G-JJBG91P2EL',
  googleVerification: '',
  name: 'Shikhar Gupta',
  location: 'Tempe, Arizona',
  email: 'sgupt330@asu.edu',
  github: 'https://github.com/Shikhar97',
  twitterHandle: '@IamShikharGupta',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/Shikhar97',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/shikhar-gupta-430372134/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/shikharguptaaa/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/IamShikharGupta',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
