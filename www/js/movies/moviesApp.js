angular.module("moviesApp",[])
	   .controller("moviesController",function($state,$scope,$stateParams,
					$ionicHistory){
		
		console.log("moviesController");
		
		$scope.movies = [
		{title:"Interstellar",score:5,desc:" Interstellar Desc"},
		{title:"Shutter Island",score:4.9,desc:"Shutter Island Desc"},
		{title:"Hunger Games",score:4.1,desc:"Hunger Games Desc"}
		];
		
		$ionicHistory.clearHistory();
	   
	   
	   $scope.selectMovie = function(movieSelected){
		   	   
		   $stateParams.movie = movieSelected;
		      		   
		   $state.go('menu.movieDetails',{movie:movieSelected});
		   
	   }
	   })
	   .controller("movieDetailsController",function($stateParams,$scope,$state){
		   
		   console.log("movieDetails");
		   
		   console.log($stateParams);
		   
		   $scope.movie = $stateParams.movie;
		   
		   if($scope.movie == null){
			   $state.go("menu.movies");
			   
		   }
 
	   })