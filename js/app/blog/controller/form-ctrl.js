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

        self.getPostById = function getPostById () {

            for (var i = 0; i < self.posts.length; i++) {
                if (+self.id === +self.posts[i].id) {
                    self.post = self.posts[i];
                }
            }

        };

        self.isAddMode = function isAddMode () {
            return $state.current.name === 'main.blog.add';
        };

        self.isEditMode = function isEditMode () {
            return $state.current.name === 'main.blog.edit';
        };

        if (self.isEditMode()) {
            self.getPostById();
        }

        self.save = function save () {
            if (!self.post.name || !self.post.description) {
                return false;
            }

            if (self.isAddMode()) {
                self.posts.push({
                    id: Math.floor(Math.random() * 100000),
                    name: self.post.name,
                    description: self.post.description,
                    date: new Date
                });
            } else if (self.isEditMode()) {

            }

            self.setPosts();

            $state.go('main.blog', {}, {reload: true});
        };

        //self.isEditing = [];
        //self.item = [];

        //self.save = function save (id) {
        //    self.isEditing = false;
        //    self.post.name[id] = self.item[id];
        //    self.post.description[id] = self.item[id];
        //};

        self.cancel = function cancel () {
            $state.go('main.blog');
        };
    }
}());