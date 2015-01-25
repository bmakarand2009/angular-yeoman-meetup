'use strict';

/**
 * @ngdoc function
 * @name testapp1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testapp1App
 */
angular.module('testapp1App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
