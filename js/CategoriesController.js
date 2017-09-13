angular.module('productBrowing')

.controller('CategoriesCtrl', ['$scope','Category', function($scope, Category){
    $scope.items = {};
    Category.Categories()
    .then(function(response){
        var cat = response.data.categories;
        $scope.items = cat;
    }), function(response){
        console.log("Error");
    }
}])