/**
 * Created by Igor on 4/21/2016.
 */
(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('BlogCtrl', ['$state', BlogCtrl]);

    function BlogCtrl ($state, localStorageService) {
        var self = this;

        self.saveToLocalStorage = function () {
            localStorageService.set();
        };

        self.posts = [{name: 'Post One', description: 'this is the description of the post'},
            {name: 'Post Two', description: 'second descr...'},
            {name: 'Post Three', description: 'third description'}
        ];
        //console.log(posts.name);
        //$state.go('home.main');

        self.header = 'My Blog';

        self.addBtn = function addBtn () {
            $state.go('main.blog.add');
        };


    }

}());