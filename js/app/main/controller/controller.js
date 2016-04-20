/**
 * Created by Igor on 4/20/2016.
 */
(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('MainCtrl', [MainCtrl]);

    function MainCtrl () {
        var self = this;

        self.header = 'main page';

    }

}());