angular.module('productBrowing')

.factory('Product', function ProductFactory($http){
    return {
        Products: function(){
            return $http({method: 'GET', url:'data.json'});
        },
        Product: function(id){
//            var book={};
//            this.Products()
//            .then(function(response){
//                var details = response.data.books;
//                var title;
//                for (var i=0; i<details.length; i++){
//                    if(details[i]._id == id){
//                        book = details[i];
//                        console.log(book);
//                    }
//                }
//                return book;
//            }), function(response){
//                console.log("Error!");
//            };
            return $http({method: 'GET', url:'data.json'});
        }
    }
})