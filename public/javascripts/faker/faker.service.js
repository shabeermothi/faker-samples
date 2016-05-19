(function () {
    'use strict';

    angular.module('faker.samples')
        .factory('faker.samples.service', FakerService);

    FakerService.$inject = ['$http', 'fakerUris'];

    function FakerService ($http, FakerUris) {
        return {
            getData: getData
        };

        function getData (type) {
            if (!type) {
                throw Error('type of fake uri not provided!');
            }

            return $http({
                method: 'GET',
                url: FakerUris[type]
            });
        }
    }
}());