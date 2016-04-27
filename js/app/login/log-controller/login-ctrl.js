/**
 * Created by Igor on 4/25/2016.
 */
(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('LogCtrl', ['$state', LogCtrl]);

    function LogCtrl ($state) {
        var self = this;

        self.header = 'Please login';

        self.message = 'ready';

        self.addNewUser = function addNewUser (userDetails) {
            self.message = userDetails.mail + '( ' + userDetails.password + ' )';
        };

    }
}());
