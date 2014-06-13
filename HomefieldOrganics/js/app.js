// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

var app = angular.module('vegStore', []);

app.directive("signUp", function () {
    return {
        restrict: 'E',
        templateUrl: "../signup.html"
    };
});

app.directive("logIn", function () {
    return {
        restrict: 'E',
        templateUrl: "../login.html"
    };
});

app.directive("storeModule", function () {
    return {
        restrict: 'E',
        templateUrl: "../store.html"
    };
});

app.controller('SignupController', ['$http', function ($http) {
    this.user = {};
    this.user.weekday = 'Thursday';
    
    this.updateWeekday = function () {
        if (this.user.town == 'Guelph')
            this.user.weekday = 'Wednesday';
    };
    
    this.addUser = function () {
        $http.put('users.json', this.user).success (function(data){
            this.user = {};
        });
    };
               
}]);

app.controller('LoginController', ['$http', function ($http) {
    this.cUser = {};
    this.register = false;
    this.attempts = 0;
    
    this.toggleSignup = function () {
        this.register = !(this.register);
    };
    
    this.increment = function () {
        this.attempts++;
    };
    
               
}]);

app.controller('StoreController', ['$http', function ($http) {
    var store = this;
    store.products = [];
               
    $http.get('/users.json').success(function (data) {
        store.products = data;
    });
}]);