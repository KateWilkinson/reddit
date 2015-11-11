var app = angular.module('newslist', []);

app.controller('MainCtrl', [
  '$scope',
  function($scope){
    $scope.test = 'Hi!';

    $scope.posts = [
      { title: 'post1', upvotes: 5 },
      { title: 'post2', upvotes: 6 },
      { title: 'post3', upvotes: 8 },
      { title: 'post4', upvotes: 1 },
      { title: 'post5', upvotes: 2 }
    ];

    $scope.addPost = function(){
      if (!$scope.title || $scope.title === '') { return; }
      $scope.posts.push({ title: $scope.title, upvotes: 0 });
      $scope.title = '';
    };

    $scope.incrementUpvotes = function(post){
      post.upvotes += 1;
    };
  }
]);
