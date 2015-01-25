'use strict';

/**
 * @ngdoc function
 * @name testapp1App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testapp1App
 */
angular.module('testapp1App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.test="This is mytest123"
  });
