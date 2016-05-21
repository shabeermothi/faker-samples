(function () {
    'use strict';

    angular.module('faker.samples')
        .directive('faker', FakerSamples)
        .directive('fakerImage', FakerImageDirective);

    function FakerSamples () {
        FakerSampleCtrl.$inject = ['$scope', 'faker.samples.service'];

        return {
            scope: {
                fakeDataType: "@"
            },
            restrict: 'A',
            transclude: true,
            templateUrl: '/samples',
            controller: FakerSampleCtrl,
            controllerAs: 'vm'
        };
        
        function FakerSampleCtrl ($scope, FakerService) {
            var vm = this;
            getFakerData();

            function getFakerData () {
                FakerService.getData($scope.fakeDataType).then(function (response) {
                    vm.fakeData = response.data;
                }, function (err) {
                    vm.errorMsg = "Error Occurred while getting faker data.. try again later!";
                });
            }

            vm.refresh = function () {
                getFakerData();
            };
            
            vm.isUrl = function (str) {
                var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
                return regexp.test(str);
            };
        }
    }

    function FakerImageDirective () {
        return {
            restrict: 'AE',
            require: '^faker',
            templateUrl: '/images',
            link: function (scope, ele, attr, FakerCtrl) {
                scope.fakeImageObj = FakerCtrl.fakeData;
            }
        };
    }
}());