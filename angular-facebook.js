$(function(){

angular.module('FB', []).directive('fbLike', function() {
    return {
      restrict: 'A',
      scope: {},
      template: "<div class=\"fb-like-box\" data-href=\"{{page}}\" data-width=\"{{width}}\" data-show-faces=\"{{faces}}\" data-height=\"{{height}}\" data-stream=\"{{stream}}\" data-header=\"{{header}}\"></div>",
      link: function($scope, $element, $attrs) {
        var _ref;

        $scope.page = $attrs.fbLike;
        $scope.height = (_ref = $attrs.fbHeight) != null ? _ref : 550;
        $scope.faces = $attrs.fbFaces != null ? $attrs.fbFaces : false;
        $scope.stream = $attrs.fbStream != null ? $attrs.fbStream : true;
        $scope.header = $attrs.fbHeader != null ? $attrs.fbHeader : false;
        $(window).on('resize', function() {
          if ($scope.$$phase == null) {
            $scope.$apply(function() {
              return $scope.width = $element.parent().width();
            });
          } else {
            $scope.width = $element.parent().width();
          }
          return FB.XFBML.parse();
        });
      }
    };
  })

})();