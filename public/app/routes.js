angular.module('appRoutes', ['ui.router'])
  .config(function ($stateProvider, $locationProvider,$urlRouterProvider) {

    //function to create route 'table'
    function createState(item) {
      $stateProvider.state(item.state, {
        abstract: item.abstract,
        parent: item.parent,
        url: item.url,
        templateUrl: item.tmpUrl,
        template: item.template,
        controller: item.ctrl,
        views: item.views,
        requiredRole: item.requiredRole,
        resolve: item.resolve,
        controllerAs: item.controllerAs,
        index: item.index
      });
    }

    createState({
      state: 'home',
      url: '/',
      tmpUrl: 'app/views/pages/home.html'
    });

    createState({
      state: 'about',
      url: '/about',
      tmpUrl: 'app/views/pages/about.html'
    });

    createState({
      state: 'register',
      url: '/register',
      tmpUrl: 'app/views/pages/users/register.html',
      ctrl: 'regCtrl',
      controllerAs: 'reg'
    });

    $urlRouterProvider.otherwise('/');

    $locationProvider.hashPrefix('');
  });
