(function () {
    var app = angular.module('app', [
        'ngScrollbars',
        'ngCookies',
    ]);


    app.config([
        "$compileProvider",
        function ($compileProvider) {
            $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|skype):/);
        }
    ]);

    app.run([
        '$rootScope',
        function ($rootScope) {

        }
    ]);

}());