angular.module("menuApp",[])
	   .controller("menuController",function($scope,$state,
					$ionicSideMenuDelegate,$stateParams){
			
			console.log("menuController");
			
			$scope.user = $stateParams.user;
			
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
		
			$stateProvider.state('menu',{
					url:"/menu",
					templateUrl:"partials/menu/menu.html",
					controller:"menuController",
					params:{
						user:null
					}
				}).state('menu.welcome',{
					url:"/welcome",
					views:{
						"menuContent":{
							templateUrl:"partials/welcome/welcome.html",
						}
					}
				})
				.state('menu.movies',{
					url:"/movies",
						views:{
							'menuContent':{
								templateUrl:"partials/movies/movies.html",
								controller:"moviesController"
							}
						}
					})
				.state('menu.movieDetails',{
					url:"/moviesDetails",
					views:{
						"menuContent":{
							templateUrl:"partials/movies/movieDetails.html",
							controller:"movieDetailsController",	
						}
					},
					params:{ movie: null}
				});	
		})