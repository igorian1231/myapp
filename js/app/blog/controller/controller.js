/**
 * Created by Igor on 4/21/2016.
 */
(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('BlogCtrl', ['$state', 'localStorageService', BlogCtrl]);

    function BlogCtrl ($state, localStorageService) {
        var self = this;

        self.saveToLocalStorage = function () {
            localStorageService.set('posts', self.posts);
        };

        self.setPosts = function setPosts () {
            localStorageService.set('posts', self.posts);
        };

        self.posts = (localStorageService.get('posts') === null) ? [] : localStorageService.get('posts');

        self.header = 'My Blog';

        self.addBtn = function addBtn () {
            $state.go('main.blog.add');
        };

        self.isEditing = [];
        self.item = [];

        self.edit = function edit (id) {
            self.isEditing = true;
            self.item[id] = self.posts[id];
            $state.go('main.blog.edit', {id: id});
            self.setPosts();
        };

        self.delete = function (index) {
            self.posts.splice(index, 1);
            self.setPosts();
        };



    }
}());