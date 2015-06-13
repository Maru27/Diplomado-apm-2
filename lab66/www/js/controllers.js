angular.module('lab66.Controllers', ['lab66.Factories'] )

.controller('lab66.ListController', function($scope,  information) {

        $scope.decorator = {

            'text-decoration': 'none'
        };

        $scope.data_information = information;
})

.controller('lab66.ViewController', function($scope, information) {

    $scope.data_information = information;
});