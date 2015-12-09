angular.module("loginApp",['loginServices'])
	   .constant("use_db",true)
	   .controller("loginController",function($scope,$state,SignIn,use_db,
											  $ionicModal,SignUp){
	   
			console.log("loginController");
		   
			$scope.methods = {
				signin: login,
				openSignUp: showCreateModal,
				closeSignUp: hideCreateModal,
				register: signUp
			}
			
			$scope.message = "";
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
						$scope.message = data.message;
					}
					
				});
									
		   }
		   
		   $ionicModal.fromTemplateUrl('my-modal.html',{
			   scope:$scope,
			   animation:'slide-in-up'
		   }).then(function(modal){
				$scope.modal = modal;
		   });
		   
		   function showCreateModal(){
			   $scope.modal.show();
		   }
		   
		   function hideCreateModal(){
			   $scope.modal.hide();
			   $scope.created = false;
			   $scope.loginError = false;
		   }
		   
		   function signUp(newUser){
			   
			   console.log(newUser);
			   
			   
			   $scope.userData = SignUp.query(newUser);

			   $scope.userData.$promise.then(function(data) {

					if(data.status == "Ok"){
						$scope.createError = false;
						$scope.created = true;
					}else{
						 $scope.createError = true;
					}
					
				});
			   
		   }
	   
		
	   
		})