'use strict';

/**
 *                     ___           ___           ___           ___           ___                 
 *      _____         /  /\         /  /\         /__/\         /  /\         /  /\          ___   
 *     /  /::\       /  /::\       /  /:/_       _\_ \:\       /  /:/_       /  /:/_        /  /\  
 *    /  /:/\:\     /  /:/\:\     /  /:/ /\     /__/\ \:\     /  /:/ /\     /  /:/ /\      /  /:/  
 *   /  /:/~/::\   /  /:/~/:/    /  /:/ /:/_   _\_ \:\ \:\   /  /:/_/::\   /  /:/ /:/_    /  /:/   
 *  /__/:/ /:/\:| /__/:/ /:/___ /__/:/ /:/ /\ /__/\ \:\ \:\ /__/:/__\/\:\ /__/:/ /:/ /\  /  /::\   
 *  \  \:\/:/~/:/ \  \:\/:::::/ \  \:\/:/ /:/ \  \:\ \:\/:/ \  \:\ /~~/:/ \  \:\/:/ /:/ /__/:/\:\  
 *   \  \::/ /:/   \  \::/~~~~   \  \::/ /:/   \  \:\ \::/   \  \:\  /:/   \  \::/ /:/  \__\/  \:\ 
 *    \  \:\/:/     \  \:\        \  \:\/:/     \  \:\/:/     \  \:\/:/     \  \:\/:/        \  \:\
 *     \  \::/       \  \:\        \  \::/       \  \::/       \  \::/       \  \::/          \__\/
 *      \__\/         \__\/         \__\/         \__\/         \__\/         \__\/                
 *
 */

/** 
 * App Module
 */
var brewGet = angular.module('brewGet', [
  'ngRoute',
  'brewGetControllers',
  'brewGetServices'
]);

/** routes */
brewGet.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '/partials/home.html',
      controller: 'HomeCtrl'
    });
    $routeProvider.otherwise({ 
      redirectTo: '/' 
    });
}]);
