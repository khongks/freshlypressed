var App = angular.module("App", ["ionic"]);

App.service("FreshlyPressed", ["$http", "$log", function($http, $log) {

    this.getBlogs = function($scope) {
        $http.jsonp("https://public-api.wordpress.com/rest/v1/freshly-pressed?callback=JSON_CALLBACK")
            .success(function(result) {
                //$log.info(JSON.stringify(result.posts));                
                $scope.posts = result.posts;
                $scope.$broadcast("scroll.refreshComplete");
            });
    }
    
}]);
                          
App.controller("AppCtrl", ["$scope", "FreshlyPressed", "$log", function ($scope, FreshlyPressed, $log) {
    
    $scope.posts = [];    
    $scope.refresh = function () {
        FreshlyPressed.getBlogs($scope);
    }
    
}]);