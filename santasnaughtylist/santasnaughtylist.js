/* Santa's Naughty List */
/* Names of people that deserve coal in their Christmas stockings.  */
var app = angular.module("naughtyList", []); 
app.controller("naughtyCtrl", function($scope) {
    $scope.products = ["Donald Trump", "Hillary Clinton", "Vladimir Putin", "Kim Jong-un", "The CEO of my greedy Cell Phone company"];
    $scope.addItem = function () {
        $scope.errortext = "";
        if (!$scope.addMe) {return;}
        if ($scope.products.indexOf($scope.addMe) == -1) {
            $scope.products.push($scope.addMe);
        } else {
            $scope.errortext = "This person is already on the Naughty List.  While they might deserve to be there multiple times, it's against the rules!";
        }
    }
    $scope.removeItem = function (x) {
        $scope.errortext = "";    
        $scope.products.splice(x, 1);
    }
});
