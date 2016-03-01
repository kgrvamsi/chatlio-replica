message.controller("MessagingCtrl", function($scope,$http){
	$scope.title = "Welcome to the Chatlio Replica"
	$scope.status
	
	$scope.apiCheck = function() {
		$http.get("https://slack.com/api/api.test")
		.then(function(response){
			console.log(response.data.ok);
			$scope.status = response.data.ok
		})
	}
	
})
