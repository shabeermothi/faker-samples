(function () {
    'use strict';

    angular.module('faker.samples')
        .directive('faker', FakerSamples)

    function FakerSamples () {
        FakerSampleCtrl.$inject = ['$scope', 'faker.samples.service'];

        return {
            scope: {
                fakeDataType: "@"
            },
            restrict: 'A',
            templateUrl: '/samples',
            controller: FakerSampleCtrl,
            controllerAs: 'vm'
        };
        
        function FakerSampleCtrl ($scope, FakerService) {
            var vm = this;

            FakerService.getData($scope.fakeDataType).then(function (response) {
                vm.fakeData = response.data;
            }, function (err) {
                vm.errorMsg = "Error Occurred while getting faker data.. try again later!";
            });
        }
    }
}());