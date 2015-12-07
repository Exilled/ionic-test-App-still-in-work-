angular.module("loginServices",[])
	   .factory('SignIn',function($resource){
			
			return $resource('http://localhost:3000/account', {}, {
				query : {
					method : 'POST'
				}
			});
			
		});