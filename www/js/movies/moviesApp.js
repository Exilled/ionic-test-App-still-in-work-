angular.module("moviesApp",[])
	   .controller("moviesController",function($state,$scope,$stateParams){
		
		console.log("moviesController");
		
		$scope.movies = [
		{title:"Interstellar",score:5,desc:" Interstellar Desc"},
		{title:"Shutter Island",score:4.9,desc:"Shutter Island Desc"},
		{title:"Hunger Games",score:4.1,desc:"Hunger Games Desc"}
		];
	   
	   
	   $scope.selectMovie = function(movieSelected){
		   
		   console.log(movieSelected);
		   
		   $stateParams.movie = movieSelected;
		   
		   console.log($stateParams);
		   		   
		   $state.go('menu.movieDetails',{movie:movieSelected});
		   
	   }
	   })
	   .controller("movieDetailsController",function($stateParams,$scope,$state){
		   
		   console.log("movieDetails");
		   
		   console.log($stateParams);
		   
		   $scope.movie = $stateParams.movie;
		   
		   console.log($scope.movie);
		   
		   
		   
	   })