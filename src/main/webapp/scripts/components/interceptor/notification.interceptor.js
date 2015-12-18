 'use strict';

angular.module('angularSpringAttempt3App')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-angularSpringAttempt3App-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-angularSpringAttempt3App-params')});
                }
                return response;
            }
        };
    });
