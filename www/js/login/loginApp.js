angular.module("loginApp",[])
	   .controller("loginController",function($scope,$state){
	   
			console.log("loginController");
		   
			$scope.methods = {
				signin: login
			}
		   
			function login(user){
			    			   
			   $state.go('menu.movies',{user:user});
			
		   }
	   
		})