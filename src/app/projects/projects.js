export default [
  {
    image: "assets/img/news.jpg",
    title: "News Application",
    explanation: `This is a Progressive Web App built with react. It allows the user to
    choose a news category by clicking the side menu. It then downloads and
    populates the screen with the articles. This articles are clickable and
    each have a details page. The app is installable and works offline thus
    the user can still read the downloaded articles when there is no
    internet connection`,
    appLink: "https://pwa-news-app.netlify.com",
    githubLink: "https://github.com/Niklus/pwa-news-app",
    tags: [
      {
        classes: ["tag", "tag-html"],
        tech: "HTML5",
      },
      {
        classes: ["tag", "tag-css"],
        tech: "CSS",
      },
      {
        classes: ["tag", "tag-js"],
        tech: "JS",
      },
      {
        classes: ["tag", "tag-reactjs"],
        tech: "REACT",
      },
      {
        classes: ["tag", "tag-idb"],
        tech: "IndexedDb",
      },
      {
        classes: ["tag", "tag-netlify"],
        tech: "Netlify",
      },
    ],
  },
  {
    image: "assets/img/erc.jpg",
    title: "Exchange Rate Calculator",
    explanation: `This is a Progressive Web App that allows the user to see the exchange
    rate of different currencies. It displays values of two different
    countries and updates the values on amount change. The app is
    installable and works offline. Since we are getting data from an api,
    the app will automatically detect network connection and informs the
    user if it is possible or not to use the app.`,
    appLink: "https://e-r-c-app.netlify.app/",
    githubLink: "https://github.com/Niklus/exchange-rate-calculator",
    tags: [
      {
        classes: ["tag", "tag-html"],
        tech: "HTML5",
      },
      {
        classes: ["tag", "tag-css"],
        tech: "CSS",
      },
      {
        classes: ["tag", "tag-js"],
        tech: "JS",
      },
      {
        classes: ["tag", "tag-netlify"],
        tech: "Netlify",
      },
    ],
  },
  {
    image: "assets/img/github-battle.jpg",
    title: "Github Battle App",
    explanation: `This is a react application that allows github users to play a fun game
    called github Battle. The app checks the github metrics such as
    followers, stars and number of repos and then it uses that to to
    determine the winner. The app also shows the most popular repos based on
    the chosen programming language.`,
    appLink: "https://github-battle-b3817.web.app/popular",
    githubLink: "https://github.com/Niklus/github-battle-app",
    tags: [
      {
        classes: ["tag", "tag-html"],
        tech: "HTML5",
      },
      {
        classes: ["tag", "tag-css"],
        tech: "CSS",
      },
      {
        classes: ["tag", "tag-js"],
        tech: "JS",
      },
      {
        classes: ["tag", "tag-reactjs"],
        tech: "REACT",
      },
      {
        classes: ["tag", "tag-firebase"],
        tech: "Firebase",
      },
    ],
  },
  {
    image: "assets/img/quote.jpg",
    title: "Quote Generator App",
    explanation: `This is a random quote generator. The app allows you to randomly fetch a
    quote from an external api. Yo then have an option to tweet the quote if
    you like it. The app also gives you a link to the author's wikipedia
    page (by clicking on the name). If the author is unknown then the link
    is omitted.`,
    appLink: "https://niklus.github.io/quote-generator/",
    githubLink: "https://github.com/Niklus/quote-generator",
    tags: [
      {
        classes: ["tag", "tag-html"],
        tech: "HTML5",
      },
      {
        classes: ["tag", "tag-css"],
        tech: "CSS",
      },
      {
        classes: ["tag", "tag-js"],
        tech: "JS",
      },
    ],
  },
  {
    image: "assets/img/youtube.jpg",
    title: "Youtube Web Component",
    explanation: `This is a youtube web component built on top of the YouTube Iframe API.
    It allows developers to embed youtube in their applications using a html
    like tag. The library is hosted on npm known as you-tube. The above
    image is a demo showing the capabilities of the library. Clicking the
    'view code' below demonstarates how to use the web component library.`,
    appLink: "https://www-cd33c.firebaseapp.com/you-tube/",
    githubLink: "https://github.com/Niklus/you-tube",
    tags: [
      {
        classes: ["tag", "tag-html"],
        tech: "HTML5",
      },
      {
        classes: ["tag", "tag-css"],
        tech: "CSS",
      },
      {
        classes: ["tag", "tag-js"],
        tech: "JS",
      },
      {
        classes: ["tag", "tag-stencil"],
        tech: "Stencil",
      },
    ],
  },
  {
    image: "assets/img/portfolio.jpg",
    title: "Portfolio App",
    explanation: `This is my portfolio app where I showcase my projects. You are currently
    on this app. The app is built with Angular. The contact page uses
    emailjs to send emails. The app is hosted on firebase.`,
    appLink: "https://niklus.com",
    githubLink: "https://github.com/Niklus/portfolio-site.git",
    tags: [
      {
        classes: ["tag", "tag-html"],
        tech: "HTML5",
      },
      {
        classes: ["tag", "tag-css"],
        tech: "CSS",
      },
      {
        classes: ["tag", "tag-js"],
        tech: "JS",
      },
      {
        classes: ["tag", "tag-angular"],
        tech: "Angular",
      },
      {
        classes: ["tag", "tag-firebase"],
        tech: "Firebase",
      },
    ],
  },
];
