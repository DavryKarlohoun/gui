;(function(){ //iife for angularjs
  angular.module('catsoverflow',['ngRoute'],
    function ($routeProvider){
        $routeProvider
        .when('/', {
          templateUrl: 'partials/home.html',
          controller: 'HomeCtrl'
        })
        .when('/login', {
          templateUrl: 'partials/signup.html',
          controller: 'signup-controller'
        })
        .when('/home', {
          templateUrl: 'partials/home.html',
          publicAccess: true
        })
        .when('/ask-question', {
          templateUrl: 'partials/ask.html',
        });
    })




    .controller("HomeCtrl", function($scope, $http){          //home-top questions
      $http.get("https://cats-overflow.herokuapp.com/questions.json")
      .then(function(response){
        $scope.questions = response.data;
      });
    })



    .controller("ask-controller", function($scope, $http){   //ask new question
      $scope.askNew = {
        title: "",
        description: ""
      }
      $scope.askNewQuestion = function(){
        $http.post("http://cats-overflow.herokuapp.com/questions.json", $scope.askNew)
        .then(function(data){
          console.log(data);
        });
      };
    })



    .controller("login-controller", function($scope, $http, $location){  //log-in controller
      $scope.logIn = {
        email: "",
        password: ""
      }
      $scope.processLogin = function(){
        $http.post("http://cats-overflow.herokuapp.com/login.json", $scope.logIn)
        .then(
          function(data){ //success
          console.log(data);
          $scope.usersession = data;

          },
          function(error){
          console.log(error);
          console.log("error!");
        });
      };
    })



    .controller("signup-controller", function($scope, $http){  //sign up controller
      $scope.signupData = {
        display_name: "",
        email: "",
        full_name: "",
        password: ""
      }
      $scope.processSignUp = function(){
        $http.post("http://cats-overflow.herokuapp.com/users.json", $scope.signupData)
        .then(function(data){
          console.log(data);
        });
      };
    });






})();
