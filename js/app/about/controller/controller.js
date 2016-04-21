(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('AboutCtrl', [AboutCtrl]);

    function AboutCtrl () {
        var self = this;

        self.header = 'About page';

        //self.infoTxt = false;
        //self.infoBtn = function () {
        //    self.infoTxt = self.infoTxt ? false : true;
        //};
    }

}());
/**
 * Created by Igor on 4/20/2016.
 */
