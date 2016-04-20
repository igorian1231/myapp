(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('HomeCtrl', ['$state', HomeCtrl]);

    function HomeCtrl ($state) {
        var self = this;

        //$state.go('home.main');

        self.header = 'Home page';
        console.log('dsfs');

    }

}());
