message.factory('requests',['$http',function($http){
	var urlBase="https://slack.com/api/api.test"

	var requests = {}

	requests.status = function(){
		return $http.get(urlBase);
	}

	return requests;
}
]);

