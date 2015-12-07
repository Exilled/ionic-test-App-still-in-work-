angular.module("loginApp",['loginServices'])
	   .constant("use_db",true)
	   .controller("loginController",function($scope,$state,SignIn,use_db){
	   
			console.log("loginController");
		   
			$scope.methods = {
				signin: login
			}
			
			$scope.loginError = false;
		   
			function login(user){
			    
				if(use_db == false){
					$state.go('menu.movies',{user:user});
				};
				
				
				$scope.userData = SignIn.query(user);

				$scope.userData.$promise.then(function(data) {

					if(data.status == "Ok"){
						$scope.loginError = false;					
						$state.go('menu.movies',{user:user});
					}else{
						$scope.loginError = true;
					}
					
				});
									
		   }
	   
		})