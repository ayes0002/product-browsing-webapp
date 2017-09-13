angular.module('productBrowing')

.factory('Category', function CategoryFactory($http){
    return {
        Categories: function(){
            return $http({method: 'GET', url:'data.json'});
        },
        Category: function(id){
            return $http({method: 'GET', url:'data.json'});
        }
    }
})