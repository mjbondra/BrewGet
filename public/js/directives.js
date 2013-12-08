'use strict';

  ////////////////
 // DIRECTIVES //
////////////////

var brewGetDirectives = angular.module('brewGetDirectives', []);

/**
 * <global-messages> Directive
 */
brewGetDirectives.directive('globalMessages', ['MessageHandler', '_', function (MessageHandler, _) {
  return {
    restrict: 'E',
    link: function (scope) {
      scope.$on('globalMessages', function (event, globalMessages) { 
        scope = _.extend(scope, MessageHandler.process(globalMessages));
      });
    },
    templateUrl: '/partials/directives/messages.html'
  };
}]);

/**
 * <validation-messages> Directive
 */
brewGetDirectives.directive('validationMessages', ['MessageHandler', '_', function (MessageHandler, _) {
  return {
    restrict: 'E',
    link: function (scope) {
      scope.$on('validationErrors', function (event, validationErrors) { 
        scope = _.extend(scope, MessageHandler.process(validationErrors));
      });
    },
    templateUrl: '/partials/directives/messages.html'
  };
}]);
