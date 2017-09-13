angular.module('productBrowing')

.controller('DetailsCtrl', ['$scope', '$stateParams', 'Product', function( $scope, $stateParams, Product){

    $scope.id = $stateParams.id;
    
    $scope.book = Product.Product($scope.id)
    .then(function(response){
        $scope.book={};
        var details = response.data.books;
        var title;
        for (var i=0; i<details.length; i++){
            if(details[i]._id == $scope.id){
                $scope.book = details[i];
                console.log($scope.book);
            }
        }
    }), function(response){
        console.log("Error");
    }
}]);