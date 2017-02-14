angular.module('app.controllers', [])
  
.controller('homeCtrl', ['$scope', '$stateParams', '$http', '$rootScope',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http, $rootScope) {
	$http.post('https://anilist.co/api/auth/access_token', {grant_type : "client_credentials",
		client_id : 'nerdykhaleesi25-gnvdr',
		client_secret : 'fuC8tGrRA6tp7o9crbA7'}).then(function(response){
			$rootScope.access_token = response.data.access_token;
			
		$http.get('http://anilist.co/api/anime/21?access_token='+$rootScope.access_token).then(function(response){
			$scope.featured = response.data;
		}, 4000);	
	});


}])
   
.controller('mangaCtrl', ['$scope', '$stateParams', '$rootScope', '$http',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $rootScope, $http) {
	if(!$rootScope.access_token){
		$http.post('https://anilist.co/api/auth/access_token', {grant_type : "client_credentials",
		client_id : 'nerdykhaleesi25-gnvdr',
		client_secret : 'fuC8tGrRA6tp7o9crbA7'}).then(function(response){
			$rootScope.access_token = response.data.access_token;
		});
	}
	
	
	$http.get('http://anilist.co/api/browse/manga?sort=score-desc&access_token='+$rootScope.access_token).then(function(response){
		$scope.manga = response.data;
	});

}])
   
.controller('animeCtrl', ['$scope', '$stateParams', '$http', '$rootScope', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http, $rootScope) {
	if(!$rootScope.access_token){
		$http.post('https://anilist.co/api/auth/access_token', {grant_type : "client_credentials",
		client_id : 'nerdykhaleesi25-gnvdr',
		client_secret : 'fuC8tGrRA6tp7o9crbA7'}).then(function(response){
			$rootScope.access_token = response.data.access_token;
		});
	}
	
	
	$http.get('http://anilist.co/api/browse/anime?sort=popularity-desc&year=2017&season=Winter&airing_data=true&page=1&access_token='+$rootScope.access_token).then(function(response){
		$scope.anime = response.data;
		console.log($scope.anime);
	});

}])
      
.controller('mainMenuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 