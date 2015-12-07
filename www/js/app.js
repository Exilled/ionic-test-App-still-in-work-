angular.module('app', ['ionic','loginApp','menuApp','moviesApp','booksApp'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider,$urlRouterProvider){
	
	$stateProvider
	
		.state('login',{
		url:"/login",
		templateUrl:"partials/login/login.html",
		controller:"loginController"
		});
		
		
		
	$urlRouterProvider.otherwise("/login");
	
	
	
})
