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

		$http.get('http://anilist.co/api/reviews/latest?limit=8&access_token='+$rootScope.access_token).then(function(response){
			$scope.latest = response.data.anime;
		});

		$http.get('http://anilist.co/api/series/trending?access_token='+$rootScope.access_token).then(function(response){
			$scope.trending = response.data;
		});
		
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

	/*$scope.groups = [];
  		for (var i=0; i<10; i++) {
    		$scope.groups[i] = {
      			name: i,
      			items: []
    		};
    	for (var j=0; j<3; j++) {
      		$scope.groups[i].items.push(i + '-' + j);
    	}
  	}*/
  
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
	  $scope.toggleGroup = function(group) {
	    if ($scope.isGroupShown(group)) {
	      $scope.shownGroup = null;
	    } else {
	      $scope.shownGroup = group;
	    }
	  };
	  $scope.isGroupShown = function(group) {
	    return $scope.shownGroup === group;
	  };

	  $scope.bar = {
			labels : ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100'],
			data : [ 10, 0, 0, 25, 400, 85, 444, 90, 356, 100]
		};

		$scope.pie = {
		labels : ['Completed', 'Plan to watch', 'Watching', 'On-hold', 'Dropped'],
		data : [ 10, 85, 90, 356, 100]
		};

	
	if($rootScope.access_token){
		$http.get('http://anilist.co/api/browse/manga?sort=score-desc&access_token='+$rootScope.access_token).then(function(response){
			$scope.manga = response.data;
		});

		$scope.findManga = function(){
			$http.get('http://anilist.co/api/manga/'+$stateParams.aID+'/page?access_token='+$rootScope.access_token).then(function(response){
				$scope.mangadetail = response.data;
				
			});
		}
	}
	

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
	$scope.toggleGroup = function(group) {
	    if ($scope.isGroupShown(group)) {
	      $scope.shownGroup = null;
	    } else {
	      $scope.shownGroup = group;
	    }
	  };
	  $scope.isGroupShown = function(group) {
	    return $scope.shownGroup === group;
	  };
	if($rootScope.access_token){
		$scope.findAnime = function(){
			$http.get('http://anilist.co/api/anime/'+$stateParams.aID+'/page?access_token='+$rootScope.access_token).then(function(response){
				$scope.animedetail = response.data;
				$scope.bar = {
					labels : ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100'],
					series: ["Score Distribution"],
					data : [10, 0, 0, 25, 400, 85, 444, 90, 356, 100]
				};
			});
		}
		
		
		$scope.pie = {
			labels : ['Completed', 'Plan to watch', 'Watching', 'On-hold', 'Dropped'],
			data : [ 10, 85, 90, 356, 100]
		};
		

		$http.get('http://anilist.co/api/browse/anime?sort=popularity-desc&year=2017&season=Winter&airing_data=true&page=1&access_token='+$rootScope.access_token).then(function(response){
			$scope.anime = response.data;
		});
	}
	

}])

.controller('reviewCtrl', ['$scope', '$stateParams', '$http', '$rootScope',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
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
    
    $scope.findReview = function(){
        $http.get('http://anilist.co/api/anime/review/'+$stateParams.rID+'?access_token='+$rootScope.access_token).then(function(response){
            $scope.reviewdetail = response.data;
        });
    }
    
	

}])
      
.controller('mainMenuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 