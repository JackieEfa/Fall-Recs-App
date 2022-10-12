var app = new Framework7({
    // App root element
    el: '#app',
    // ... other parameters
    routes: [
      {
        path: '/',
        url: 'index.html',
      },
      { // do this for all pages!
        path: '/page2/',
        url: 'pages/page2.html',
      },
      { // do this for all pages!
        path: '/page3/',
        url: 'pages/page3.html',
      },
      { // do this for all pages!
        path: '/page4/',
        url: 'pages/page4.html',
      },
    ],
  });
var mainView = app.views.create('.view-main')