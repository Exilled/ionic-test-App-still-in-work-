angular.module("loginApp",[])
	   .controller("loginController",function($scope,$state){
	   
			console.log("loginController");
		   
			$scope.methods = {
				signin: login
			}
		   
			function login(user){
			    
			   console.log(user);
			   
			   $state.go('menu',{user:user});
			
		   }
	   
		})