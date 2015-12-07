angular.module("booksApp",[])
	   .controller("booksController",function($state,$scope,$stateParams,
											  $ionicHistory){
		
		console.log("booksController");
		
		$scope.books = [
		{title:"Harry Potter",score:5,desc:"Harry Potter Desc"},
		{title:"Maze Runner",score:4.9,desc:"Maze Runner Desc"},
		{title:"Hunger Games",score:4.1,desc:"Hunger Games Desc"}
		];
	   
	   
	   $ionicHistory.clearHistory();
	   
	   
	   $scope.selectBook = function(bookSelected){
		   	   	   
		   console.log("entrou");		   
				   
		   $state.go('menu.bookDetails',{book:bookSelected});
		   
	   }
	   })
	   .controller("bookDetailsController",function($stateParams,$scope,$state){
		   
		   console.log("bookDetails");
		   
		   $scope.book = $stateParams.book;
		   
		   if($scope.book == null){
			   $state.go("menu.books");
			   
		   }
 
	   })