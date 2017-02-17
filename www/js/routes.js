angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.home', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsController.manga', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/manga.html',
        controller: 'mangaCtrl'
      }
    }
  })

  .state('tabsController.anime', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/anime.html',
        controller: 'animeCtrl'
      }
    }
  })

 .state('tabsController.reviewdetail', {
    url: '/reviewdetail/:rID',
    views: {
      'tab1': {
        templateUrl: 'templates/reviewdetail.html',
        controller: 'reviewCtrl'
      }
    }
  })  
  
  .state('tabsController.animedetail', {
    url: '/animedetail/:aID',
    views: {
      'tab3': {
        templateUrl: 'templates/animedetail.html',
        controller: 'animeCtrl'
      }
    }
  })
  .state('tabsController.mangadetail', {
    url: '/mangadetail/:mID',
    views: {
      'tab2': {
        templateUrl: 'templates/mangadetail.html',
        controller: 'mangaCtrl'
      }
    }
  })
  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1/page2') 

});