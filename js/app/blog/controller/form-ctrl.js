/**
 * Created by Igor on 4/21/2016.
 */
(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('FormCtrl', ['$state', FormCtrl]);

    function FormCtrl ($state) {
        var self = this;

        self.textArea = 'dcgdf';

        self.submit = function submit () {
            console.log(self.textArea);
        };

        self.cancel = function cancel () {
            $state.go('main.blog');
        };
    }

}());