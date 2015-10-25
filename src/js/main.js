;(function(){ //iife for angularjs


  angular.module ('catsoverflow',['ngRoute'],
    function($routeProvider){
        $routeProvider
        .when('/', {
          templateUrl: 'index.html'
        })
        .when('/login', {
          templateUrl: 'partials/signup.html',
          controller: 'signup-controller'
        })
        .when('/home', {
          templateUrl: 'partials/home.html'
        })
        .when('/ask-question', {
          templateUrl: 'partials/qa.html'
        });
    })

    .run([ '$rootScope','$http', function($scope, $http){
      $http.get("https://cats-overflow.herokuapp.com/questions.json") // will work running html in Browser Sync
        .then(function(response){
          $scope.questions = response.data;
        })

      }])

    .controller("signup-controller", function($scope, $http){

      $scope.signupData= {
        display_name: "",
        email: "",
        full_name: "",
        password: ""
      }
      $scope.processSignUp= function(){
        $http.post("http://cats-overflow.herokuapp.com/users.json", $scope.signupData)
        .then(function (response){
          console.log(response);
        });
      }
    });

  }]);
})();
