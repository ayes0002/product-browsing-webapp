angular.module('productBrowing')

.controller('CategoryCtrl', ['$scope', 'Product', '$stateParams', function($scope, Product, $stateParams){
    $scope.books = {};
    $scope.productId = $stateParams.productId; 
    Product.Products()
    .then(function(response){
        var books = response.data.books;
        $scope.books = books;
        $scope.category = books.filter(x => x.cat_id[0] == [$scope.productId]);
    }), function(response){
        console.log("Error");
    }
}])