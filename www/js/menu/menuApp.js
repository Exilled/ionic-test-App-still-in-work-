angular.module("menuApp",[])
	   .controller("menuController",function($scope,$state,
					$ionicSideMenuDelegate){
			
			console.log("menuController");
			
			//$state.go('menu.welcome');
			
			$scope.menus = [
			{title:"Movies",action:"menu.movies"},
			{title:"Books",action:"menu.books"}
			];
			
			$scope.activeMenu  = {};


			
			$scope.selectMenu = function(menu){
				$scope.activeMenu = menu;
				$state.go(menu.action);
				$ionicSideMenuDelegate.toggleLeft(false);
			}
			$scope.toggle = function() {
				$ionicSideMenuDelegate.toggleLeft();
			};
			
	   
	   })
	   .config(function($stateProvider,$urlRouterProvider){
		
			$stateProvider
				.state('menu.welcome',{
				url:"/welcome",
				templateUrl:"partials/welcome/welcome.html",
				})
				.state('menu.movies',{
				url:"/movies",
				templateUrl:"partials/movies/movies.html",
				controller:"moviesController"
				})
				.state('menu.movieDetails',{
				url:"/movies",
				templateUrl:"partials/movies/movieDetails.html",
				controller:"movieDetailsController",
				params:{
					movie:null
				}
				});
				
			$urlRouterProvider.otherwise("/welcome");
			
		})