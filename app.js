var app = angular.module('newslist', []);

app.controller('MainCtrl', [
  '$scope',
  function($scope){
    $scope.test = 'Hi!';
    $scope.posts = [
      'post1',
      'post2',
      'post3',
      'post4',
      'post5'
    ];
  }
]);
