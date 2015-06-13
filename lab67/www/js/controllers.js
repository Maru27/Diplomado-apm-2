angular.module('lab67.Controllers',
    [
        'ionic',
        'lab67.Services'
    ]
)

.controller('lab67.ListController', function($scope,  $state, users) {

        $scope.decorator = {

            'text-decoration': 'none'
        };

        $scope.data_information = users;

        $scope.getList = function() {

            $state.transitionTo('userList');

        }
        $scope.getProductsLists = function() {

            $state.transitionTo('productsList');

        };
})

.controller('lab67.ViewController', function($scope, users) {

    console.log(users);

    $scope.data_information = users;
})

.controller('lab67.ListUserController', function($scope,lists) {

        $scope.lists = lists.user_list.query(function(data){

            console.log(data);
       });
})

.controller('lab67.ListProductsController', function($scope,list2) {

        $scope.products_lists = list2.products_list.query(function(){

            console.log();
    });
});
