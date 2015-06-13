'use strict';

angular.module('lab61.Controllers', [])

.controller('ListController', function($scope, $state) {

        $scope.changePage = function(){

            $state.go( 'view', { id: 3 } );

        }
})

.controller('ViewController', function($scope, $stateParams, $ionicHistory) {

        console.log( $stateParams.id );

        if ( parseInt( $stateParams.id )  === 1 ) {

            console.log( 'on id = 1' );

            $scope.elements_ionic = '<div class="list">'+
  '<label class="item item-input item-stacked-label">'+
    '<span class="input-label">First Name</span>'+
    '<input type="text" placeholder="María">'+
  '</label>'+
  '<label class="item item-input item-stacked-label">'+
    '<span class="input-label">Last Name</span>'+
    '<input type="text" placeholder="Pachón">'+
  '</label>'+
  '<label class="item item-input item-stacked-label">'+
    '<span class="input-label">Email</span>'+
    '<input type="text" placeholder="marupachon@hotmail.com">'+
  '</label>'+
'</div>';

            var list_element = angular.element( document.querySelector( '#elements' ) );

            list_element.append( $scope.elements_ionic );

        } else if ( parseInt( $stateParams.id )  === 2 ) {

            $scope.elements_ionic = '<div class="list">'+

  '<a class="item item-icon-left" href="#">'+
    '<i class="icon ion-email"></i>'+
    'Check mail'+
  '</a>'+
  '<a class="item item-icon-left item-icon-right" href="#">'+
   ' <i class="icon ion-chatbubble-working"></i>'+
    'Call Ma'+
    '<i class="icon ion-ios-telephone-outline"></i>'+
  '</a>'+
  '<a class="item item-icon-left" href="#">'+
   ' <i class="icon ion-mic-a"></i>'+
    'Record album'+
    '<span class="item-note">'+
     ' Grammy'+
    '</span>'+
  '</a>'+
  '<a class="item item-icon-left" href="#">'+
   ' <i class="icon ion-person-stalker"></i>'+
    'Friends'+
   ' <span class="badge badge-assertive">0</span>'+
  '</a>'+
'</div>';

            var list_element = angular.element( document.querySelector( '#elements' ) );

            list_element.append( $scope.elements_ionic );

        } else {

            $scope.elements_ionic = '<h4>Grid: Evenly Spaced Columns</h4>' +
                                    '<div class="row">' +
                                        '<div class="col">.col</div>' +
                                        '<div class="col">.col</div>' +
                                        '<div class="col">.col</div>' +
                                        '<div class="col">.col</div>' +
                                        '<div class="col">.col</div>' +
                                    '</div><br/>' +
                                    '<h4>Grid: Explicit Column Sizes</h4>' +
                                    '<div class="row">'+
                                    '<div class="col col-50">.col.col-50</div>'+
                                    '<div class="col">.col</div>'+
                                    '<div class="col">.col</div>'+
                                    '</div>' +
                                    '<div class="row">'+
                                        '<div class="col col-75">.col.col-75</div>'+
                                        '<div class="col">.col</div>'+
                                    '</div>' +
                                    '<div class="row">'+
                                        '<div class="col">.col</div>'+
                                        '<div class="col col-75">.col.col-75</div>'+
                                    '</div>' +
                                    '<div class="row">'+
                                        '<div class="col">.col</div>'+
                                        '<div class="col">.col</div>'+
                                    '</div>';

            var list_element = angular.element( document.querySelector( '#elements' ) );

            list_element.append( $scope.elements_ionic );

        }


        $scope.goBack = function(){

            $ionicHistory.goBack();

        }
});