/**
 * Created by Igor on 4/21/2016.
 */
(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('FormCtrl', ['$state', '$stateParams', 'localStorageService', FormCtrl]);

    function FormCtrl ($state, $stateParams, localStorageService) {
        var self = this;

        self.posts = (localStorageService.get('posts') === null) ? [] : localStorageService.get('posts');

        self.setPosts = function setPosts () {
            localStorageService.set('posts', self.posts);
        };

        self.id = $stateParams.id;

        self.post = {};

        self.submit = function submit () {
            if (!self.post.name || !self.post.description) {
                return false;
            }

            self.posts.push({
                id: Math.floor(Math.random() * 100000),
                name: self.post.name,
                description: self.post.description,
                date: new Date
            });

            self.setPosts();

            $state.go('main.blog', {}, {reload: true});
        };

        self.cancel = function cancel () {
            $state.go('main.blog');
        };
    }
}());