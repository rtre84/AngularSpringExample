'use strict';

angular.module('angularSpringAttempt3App')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


