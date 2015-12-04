angular.module("moviesApp",[])
	   .controller("moviesController",function($state,$scope){
		
		console.log("moviesController");
		
		$scope.movies = [
		{title:"Interstellar",score:5,desc:" Interstellar Desc"},
		{title:"Shutter Island",score:4.9,desc:"Shutter Island Desc"},
		{title:"Hunger Games",score:4.1,desc:"Hunger Games Desc"}
		];
	   
	   
	   $scope.selectMovie = function(movie){
		   
		   $state.go("menu.movieDetails",{movie:movie});
		   
	   }
	   })
	   .controller("movieDetailsController",function($stateParams,$scope,$state){
		   
		   console.log("movieDetails");
		   
		   
		   
		   
	   })