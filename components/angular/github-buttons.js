angular.module('githubButtons', [])
.directive('githubButtons', function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: true,
    controller: function ($scope, $element, $attrs, $http) {

      // Set default option values
      $scope.options = {
        count: true,
        repo: 'webcomponents',
        size: 'small',
        user: true
      };

      // Update values based on attributes
      if ($attrs.count == 'false') {
        $scope.options.count = false;
      }
      if ($attrs.repo) {
        $scope.options.repo = $attrs.repo;
      }
      if ($attrs.size == 'large') {
        $scope.options.size = 'large';
      }
      if ($attrs.user) {
        $scope.options.user = $attrs.user;
      }

      // Make call to Github to get repository data
      $http.get('https://api.github.com/repos/' + $scope.options.user + '/' + $scope.options.repo).success(function (data) {
        $scope.response = data;
      });
    },
    templateUrl: 'github-buttons.html'
  };
});
