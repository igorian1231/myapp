/**
 * Created by Igor on 4/21/2016.
 */
(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('FormCtrl', ['$state', 'localStorageService', FormCtrl]);

    function FormCtrl ($state, localStorageService) {
        var self = this;

        self.posts = (localStorageService.get('posts') === null) ? [] : localStorageService.get('posts');

        self.setPosts = function setPosts () {
            localStorageService.set('posts', self.posts);
        };

        self.post = {};

        self.submit = function submit () {
            if (!self.post.name && !self.post.description) {
                return false;
            }
            self.posts.push({
                name: self.post.name,
                description: self.post.description
            });

            self.setPosts();

            $state.go('main.blog', {}, {reload: true});
        };

        self.cancel = function cancel () {
            $state.go('main.blog');
        };
    }
}());