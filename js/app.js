angular.module('productBrowing', ['ui.router'])

.config(function($urlRouterProvider, $stateProvider){
        $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('categories',{
        url:'/',
        templateUrl: "categories.html",
        controller: "CategoriesCtrl"
    })
    .state('category',{
        url:'/:productId',
        templateUrl: "category.html",
        controller: "CategoryCtrl"
    })
    .state('category.info',{
        url:'/:id',
        templateUrl: "details.html",
        controller: "DetailsCtrl"
    })
});