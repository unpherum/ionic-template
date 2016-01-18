angular
	.module('starter.siteMenuController', [])
	.controller('SiteMenuCtrl', ['$rootScope', '$scope', '$ionicSideMenuDelegate', '$location', function($rootScope, $scope, $ionicSideMenuDelegate, $location){
    $scope.showMenu = function () {
      $ionicSideMenuDelegate.toggleLeft();
    };
    $scope.showRightMenu = function () {
      $ionicSideMenuDelegate.toggleRight();
    };
	}]);
