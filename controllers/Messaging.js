message.controller("MessagingCtrl", function($scope,requests,$interval){
	$scope.title = "Welcome to the Chatlio Replica"
	$scope.status
	$scope.messages
	$scope.apiCheck = function() {
		requests.status()
		.then(function(res){

		$scope.status = res.data.ok
		})
	}

	$scope.sendmsge = function(message){
		$http.post("")
	}
	
	$scope.getMessages = function(){

	}
	
})
