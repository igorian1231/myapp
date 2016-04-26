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

        self.header = 'Login';
        console.log('show');
        //$state.go('home.main');
    }
}());
