



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
      }])

      .controller("signup-controller", function($scope, $http){

        $scope.signupData= {
          display_name: "",
          email: "",
          full_name: "",
          password: ""
        }
        $scope.processSignUp= function(){
          $http.post("http://cats-overflow.herokuapp.com/users", $scope.signupData)
          .then(function (response){
            console.log(response);
          });
        }
      });





        // .run(function($http, $rootScope){
        //   $http.get('https://blacajojo.herokuapp.com/questions')
        //   // $http.get('../questions.json')
        //     .then(function (response){
        //       console.log(arguments);
        //       $rootScope.questions = response.data;
        //       });
        //     });






      // function processSignUp ($scope, $http){
      //   $scope.signupData = {};
      //   $scope.processSignup = function(){
      //     $http({
      //       method: 'POST',
      //       url: 'http://cats-overflow.herokuapp.com/users',
      //       data: $.param($scope.signupData),
      //       headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      //     })
      //     .success(function(data){
      //       console.log(data);
      //
      //       // if (!data.success){
      //       //   $scope.errorName =data.errors.name;
      //       // } else {
      //       //   $scope.message = data.message;
      //       // }
      //     });
      //   };
      //
      // }




})();
