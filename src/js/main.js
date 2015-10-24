



;(function(){ //iife for angularjs


  angular.module ('catsoverflow',['ngRoute'],
    function($routeProvider){
        $routeProvider
        .when('/', {
          templateUrl: 'index.html'
        })
        .when('/login', {
          templateUrl: 'signup.html'
        })
        .when('/home', {
          templateUrl: 'home.html'
        })
        .when('/ask-question', {
          templateUrl: 'qa.html'
        });
    })

    .run([ '$rootScope','$http', function($scope, $http){
      $http.get("https://cats-overflow.herokuapp.com/questions.json") // will work running html in Browser Sync
        .then(function(response){
          $scope.questions = response.data;
        })
      }]);


})();
