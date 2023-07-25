var app = angular.module('ngmouseoverApp', []);

app.controller('ngmouseoverCtrl', function ($scope) {

$scope.count = 0;

$scope.getdetails = function () {

$scope.count = $scope.count + 1;

}

});