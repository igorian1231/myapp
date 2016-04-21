myApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('main', {
            url: '',
            templateUrl: 'js/app/main/template/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
        })
        .state('main.home', {
            url: '/home',
            templateUrl: 'js/app/home/template/home.html',
            controller: 'HomeCtrl',
            controllerAs: 'home'
        })
        .state('main.about', {
            url: '/about',
            templateUrl: 'js/app/about/template/about.html',
            controller: 'AboutCtrl',
            controllerAs: 'about'
        })
        .state('main.contact', {
            url: '/contact',
            templateUrl: 'js/app/contact/template/contact.html',
            controller: 'ContactCtrl',
            controllerAs: 'contact'
        })
        .state('main.blog', {
            url: '/blog',
            templateUrl: 'js/app/blog/template/blog.html',
            controller: 'BlogCtrl',
            controllerAs: 'blog'
        })

        .state('main.blog.add', {
            url: '/add',
            templateUrl: 'js/app/blog/template/form-blog.html',
            controller: 'FormCtrl',
            controllerAs: 'form'
        })
});