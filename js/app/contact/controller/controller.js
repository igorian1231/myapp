/**
 * Created by Igor on 4/20/2016.
 */
(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('ContactCtrl', ['$state', ContactCtrl]);

    function ContactCtrl ($state) {
        var self = this;

        self.header = 'Contact Page';

    }

}());